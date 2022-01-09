import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    history: {
      type: Array
    }
  },
  { timestamps: true }
);

contactSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

contactSchema.plugin(mongoosePaginate);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
