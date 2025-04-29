import { Schema, model } from "mongoose";


const commentsSchema = new Schema(
  {
    user: {type: Schema.Types.ObjectId, ref: "user", required: true},
    desc: {type: String, required: true},
    postId: {type: Schema.Types.ObjectId, ref: "post", required: true},
    check: {type: Boolean, default: false},
    parent: {
        type: Schema.Types.ObjectId,
        ref: "comments",
        default: null
    },
    replyOnUser: {
        type: Schema.Types.ObjectId,
        ref: "user",
        default: null
    }
  },
  { timestamps: true, toJSON: {virtuals: true} }
);

commentsSchema.virtual('replies', {
    ref: 'comments',
    localField: '_id',
    foreignField: 'parent'
})

const comments = model("comments", commentsSchema)
export default comments;