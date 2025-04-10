import { uploadPicture } from "../middleware/uploadPicMiddleware.js";
import user from "../models/user.js";
import { fileRemover } from "../utils/fileRemover.js";

export const registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    // Check whether the user exists
    let User = await user.findOne({ email });
    if (User) {
      throw new Error("User already exists");
    }
    // Creating a new user
    User = new user({
      name,
      email,
      password,
    });
    await User.save();

    return res.status(201).json({
      _id: User._id,
      avatar: User.avatar,
      name: User.name,
      email: User.email,
      verified: User.verified,
      admin: User.admin,
      token: await User.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let User = await user.findOne({ email });

    if (!User) {
      throw new Error("User not found");
    }
    if (await User.comparePass(password)) {
      return res.status(201).json({
        _id: User._id,
        avatar: User.avatar,
        name: User.name,
        email: User.email,
        verified: User.verified,
        admin: User.admin,
        token: await User.generateJWT(),
      });
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    next(error);
  }
};

export const userProfile = async (req, res, next) => {
  try {
    let User = await user.findById(req.user._id);

    if (User) {
      return res.status(201).json({
        _id: User._id,
        avatar: User.avatar,
        name: User.name,
        email: User.email,
        verified: User.verified,
        admin: User.admin,
      });
    } else {
      let error = new Error("User not found!");
      error.statusCode = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    let User = await user.findById(req.user._id);

    if (!User) {
      let error = new Error("User not found!");
      error.statusCode = 404;
      next(error);
    }

    User.name  = req.body.name || User.name;
    User.email = req.body.email || User.email;
    if(req.body.password == User.password) {
      throw new Error("Entered password matches with previous password!!")
    }
    if(req.body.password && req.body.password.length < 6) {
        throw new Error("Password must be atleast 6 characters")
    } else if(req.body.password) {
        User.password = req.body.password;
    }
    

    const updatedUser = await User.save()

    res.json({
        _id: updatedUser._id,
        avatar: updatedUser.avatar,
        name: updatedUser.name,
        email: updatedUser.email,
        verified: updatedUser.verified,
        admin: updatedUser.admin,
        token: await updatedUser.generateJWT(),
    })
  } catch (error) {
    next(error)
  }
};

export const updateProfilePic = async (req, res, next) => {
  try {
    const upload = uploadPicture.single("profilePicture")
    upload(req, res, async function (err){
      if(err) {
        const error =  new Error("Some error occured while uploading profile picture :(")
        next(error)
      } else {
        try {
        //if everthing went well
        if (req.file) {
          let filename;
          const updatedUser = await user.findById(req.user._id);
          filename = updatedUser.avatar;
          if ( filename ) {
            fileRemover(filename)
          }
          updatedUser.avatar = req.file.filename
          await updatedUser.save()
          res.json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
            token: await updatedUser.generateJWT(),
          })
        } else {
          let filename;
          let updatedUser = await user.findById(req.user._id);
          filename = updatedUser.avatar;
          updatedUser.avatar = "";
          await updatedUser.save()
          fileRemover(filename)
          res.json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
            token: await updatedUser.generateJWT(),
          })
        }} catch (error){
          next(error)
        }
      }
    })
  } catch (error) {
    next(error)
  }
}
