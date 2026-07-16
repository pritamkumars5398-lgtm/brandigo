import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  // Billing & Contact Details
  name: string;
  email: string;
  phone: string;
  bestTime: string;
  city: string;
  state: string;

  // Brand / Logo Details
  logoName: string;
  slogan?: string;
  industry: string;
  colorPreferences?: string;
  referenceLink?: string;
  fileName?: string;

  // Package Details
  package: string;
  amount: string;

  // Payment Status Details
  paymentId?: string;
  orderId?: string;
  signature?: string;
  paymentStatus: "success" | "failed" | "pending";
  failureReason?: string;

  createdAt: Date;
}

const OrderSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    bestTime: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },

    logoName: { type: String, required: true },
    slogan: { type: String },
    industry: { type: String, required: true },
    colorPreferences: { type: String },
    referenceLink: { type: String },
    fileName: { type: String },

    package: { type: String, required: true },
    amount: { type: String, required: true },

    paymentId: { type: String },
    orderId: { type: String },
    signature: { type: String },
    paymentStatus: { type: String, enum: ["success", "failed", "pending"], default: "pending" },
    failureReason: { type: String },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

export default mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);
