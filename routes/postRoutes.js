import express from 'express';
import { createPost, deletePost, getPost, updatePost } from '../controllers/postController.js';
import { adminGuard, authGuard } from '../middleware/authMiddleware.js';
const postRoutes = express.Router()


postRoutes.post('/', authGuard, createPost )
postRoutes.put('/updatePost/:slug', authGuard, adminGuard, updatePost )
postRoutes.delete('/delete/:slug', authGuard, adminGuard, deletePost)
postRoutes.get('/getPost/:slug', getPost)

export default postRoutes;