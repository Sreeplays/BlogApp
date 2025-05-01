import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controllers/postController.js";
import { adminGuard, authGuard } from "../middleware/authMiddleware.js";
const postRoutes = express.Router();

postRoutes.route("/").post(authGuard, adminGuard, createPost).get(getAllPosts);
postRoutes
  .route("/:slug")
  .put(authGuard, adminGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost)
  .get(getPost);

export default postRoutes;
