import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const contentSectionSchema = new Schema(
  {
    heading: { type: String },
    paragraphs: { type: [String], default: [] },
    list: { type: [String] },
  },
  { _id: false },
);

const blogPostSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    keywords: { type: [String], default: [] },
    category: { type: String, required: true },
    publishedAt: { type: String, required: true },
    revisedAt: { type: String, required: true },
    readingTime: { type: Number, required: true },
    sections: { type: [contentSectionSchema], default: [] },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
      index: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    collection: "blog_posts",
  },
);

export type BlogPostDocument = InferSchemaType<typeof blogPostSchema> & {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

export const BlogPostModel =
  (mongoose.models.BlogPost as Model<BlogPostDocument>) ??
  mongoose.model<BlogPostDocument>("BlogPost", blogPostSchema);
