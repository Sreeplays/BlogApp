import jwt from "jsonwebtoken"
import user from "../models/user.js"

export const authGuard = async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const { id } = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await user.findById(id).select("-password");
            next();
        } catch (error) {
            let err = new Error("Not authorized, token failed");
            err.statusCode = 401;
            next(err);
        }
    } else {
        let error = new Error("Not authorized, no token passed");
        error.statusCode = 401;
        next(error);
    }
}
export const adminGuard = async (req, res, next) => {
    if (req.user && req.user.admin) {
        next()
    } else {
        const error = new Error("Not authorized as an admin")
        error.statusCode = 400
        next(error)
    }
}