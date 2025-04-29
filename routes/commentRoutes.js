import express from 'express';
import { authGuard } from '../middleware/authMiddleware.js';
import { createComment } from '../controllers/commentsController.js';
const commentRoutes = express.Router()


commentRoutes.post('/', authGuard, createComment )

export default commentRoutes;