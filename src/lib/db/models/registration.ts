import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const registrationSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["brand", "influencer"],
      required: true,
      index: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    brandName: { type: String },
    niche: { type: String },
    instagram: { type: String },
    followers: { type: Number },
    locale: { type: String, default: "fa-IR" },
    source: { type: String, default: "landing" },
  },
  {
    timestamps: true,
    collection: "registrations",
  },
);

export type RegistrationDocument = InferSchemaType<typeof registrationSchema> & {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

export const RegistrationModel =
  (mongoose.models.Registration as Model<RegistrationDocument>) ??
  mongoose.model<RegistrationDocument>("Registration", registrationSchema);
