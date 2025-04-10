import express from 'express';
import { loginUser, registerController, updateProfile, updateProfilePic, userProfile } from '../controllers/userController.js';
import { authGuard } from '../middleware/authMiddleware.js';
const routes = express.Router()


routes.post('/register', registerController)
routes.post('/login', loginUser)
routes.get('/profile', authGuard, userProfile)
routes.put('/profile/update', authGuard, updateProfile)
routes.put('/profile/update/picture', authGuard, updateProfilePic)

export default routes;