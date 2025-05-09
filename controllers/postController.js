import { uploadPostPicture } from "../middleware/uploadPostPicMiddleware.js";
import post from "../models/post.js";
import { fileRemoverPost } from "../utils/fileRemoverPost.js";
import { v4 as uuid4 } from "uuid";
import comments from "../models/comments.js";
export const createPost = async (req, res, next) => {
  try {
    const Post = new post({
      title: "Sample Title",
      caption: "Sample Caption",
      slug: uuid4(),
      body: {
        type: "doc",
        content: [],
      },
      user: req.user._id,
      photo: "",
    });
    const createdPost = await Post.save();
    return res.json(createdPost);
  } catch (error) {
    next(error);
  }
};
export const updatePost = async (req, res, next) => {
  try {
    const foundPost = await post.findOne({ slug: req.params.slug });

    if (!foundPost) {
      const error = new Error("Post was not found :(");
      return next(error);
    }

    const upload = uploadPostPicture.single("postPicture");

    upload(req, res, async function (err) {
      if (err) {
        const error = new Error(
          "Error occurred while uploading post picture :("
        );
        return next(error);
      }

      try {
        const { title, caption, slug, body, photo, user, tags, categories } =
          JSON.parse(req.body.document);

        if (title) foundPost.title = title;
        if (caption) foundPost.caption = caption;
        if (slug) foundPost.slug = slug;
        if (body) foundPost.body = body;
        if (user) foundPost.user = user;
        if (tags) foundPost.tags = tags;
        if (categories) foundPost.categories = categories;

        if (req.file) {
          let fileName;
          fileName = foundPost.photo;
          if (fileName) {
            fileRemoverPost(fileName);
          }
          foundPost.photo = req.file.filename;
        } else if (req.body.removePhoto === "true") {
          // If client sends removePhoto = true, delete existing photo
          if (foundPost.photo) {
            fileRemoverPost(foundPost.photo);
          }
          foundPost.photo = "";
        }

        const updatedPost = await foundPost.save();
        return res.json(updatedPost);
      } catch (error) {
        next(error);
      }
    });
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const Post = await post.findOneAndDelete({ slug: `${req.params.slug}` });

    if (!Post) {
      const error = new Error("Post was not found!");
      return next(error);
    }

    await comments.deleteMany({ postId: Post._id }); // lowercase 'post'

    return res.json({
      message: "Post and related comments deleted successfully! The post was:",
      Post,
    });
  } catch (error) {
    next(error);
  }
};

export const getPost = async (req, res, next) => {
  try {
    const Post = await post.findOne({ slug: `${req.params.slug}` }).populate([
      {
        path: "user",
        select: ["avatar", "name"],
      },
      {
        path: "comment",
        match: {
          check: true,
          parent: null,
        },
        populate: [
          {
            path: "user",
            select: ["avatar", "name"],
          },
          {
            path: "replies",
            match: {
              check: true,
            },
          },
        ],
      },
    ]);

    if (!Post) {
      const error = new Error("Post was not found :(");
      next(error);
    }

    return res.json(Post);
  } catch (error) {
    next(error);
  }
};

export const getAllPosts = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 0;
    const Post = await post
      .find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate([
        {
          path: "user",
          select: ["avatar", "name", "verified"],
        },
      ]);
    res.json(Post);
  } catch (error) {
    next(error);
  }
};
