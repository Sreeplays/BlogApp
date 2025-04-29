import { Schema, model } from "mongoose";


const postSchema = new Schema(
  {
    title: { type: String, required: true },
    caption: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    body: { type: Object, required: true },
    photo: {type: String, required: false},
    user: { type: Schema.Types.ObjectId, ref: "user", required: true },
    tags: { type: [String] },
    categories: [{type: Schema.Types.ObjectId, ref: "postCategories"}]
  },
  { timestamps: true, toJSON: {virtuals: true}}
);

postSchema.virtual('comment', {
    ref: 'comments',
    localField: '_id',
    foreignField: 'postId'
})

const post = model("post", postSchema)
export default post;