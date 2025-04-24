import { uploadPicture } from "../middleware/uploadPicMiddleware.js";
import post from '../models/post.js'
import { fileRemover } from "../utils/fileRemover.js";
import {v4 as uuid4} from "uuid"

export const createPost = async (req, res, next) => {
  try {
    const Post = new post({
        title: "Sample Title",
        caption: "Sample Caption",
        slug: uuid4(),
        body: {
            type: "doc",
            content: []
        },
        user: req.user._id,
        photo: ""
    })
    const createdPost = await Post.save()
  } catch (error) {
    next(error);
  }
};