import mongoose, { Document, Schema } from "mongoose";

interface IContact extends Document {
  fullName: string;
  email: string;
  phone?: string;
  destination: string;
  travelType: string;
  message: string;
}

const ContactSchema: Schema = new Schema(
  {
    fullName: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true, match: /.+\@.+\..+/ },
    phone: { type: String, minlength: 5 },
    destination: { type: String, required: true, minlength: 2 },
    travelType: { type: String, required: true },
    message: { type: String, required: true, minlength: 10, maxlength: 1000 },
  },
  { timestamps: true }
);

export default mongoose.model<IContact>("Contact", ContactSchema);
