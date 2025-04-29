import comments from "../models/comments.js"
import post from "../models/post.js"

export const createComment = async (req, res, next) => {
    try {
        //destructuring needed values for a comment
        const {desc, slug, parent, replyOnUser} = req.body
        //finding the post with the slug from the body
        const Post = await post.findOne({slug: `${slug}`})
        //conditional error for no post found
        if(!Post) {
            const error = new Error("Post was not found :(")
            return next(error)
        }
        //addition of new comment
        const newComment = new comments({
            user: req.user._id,
            desc,
            postId: Post._id,
            parent,
            replyOnUser
        })
        //saving and displaying as a json
        const saveComment =  await newComment.save()
        return res.json(saveComment)
    } catch (error) {
        next(error)
    }
    
}