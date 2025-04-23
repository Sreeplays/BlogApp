import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { Schema, model } from "mongoose";


const userSchema = new Schema(
  {
    avatar: { type: String, default: "" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
    verificationCode: { type: String, required: false },
    admin: {type: Boolean, default: true}
  },
  { timestamps: true }
);

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await hash(this.password, 10)
        return next();
    }
    return next();
})
userSchema.methods.generateJWT = async function() {
    return await jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

userSchema.methods.comparePass = async function(enteredPassword) {
  return await compare(enteredPassword, this.password)
}

const user = model("user", userSchema)
export default user;