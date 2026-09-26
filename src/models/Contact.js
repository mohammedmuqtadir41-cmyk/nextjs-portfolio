import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

if (mongoose.models.Contact) {
  delete mongoose.models.Contact;
}

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;