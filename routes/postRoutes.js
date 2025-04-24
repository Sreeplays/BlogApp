import express from 'express';
import { createPost } from '../controllers/postController.js';
import { authGuard } from '../middleware/authMiddleware.js';
const postRoutes = express.Router()


postRoutes.post('/', authGuard, createPost )

export default postRoutes;