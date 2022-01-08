import mongoose from "mongoose";

const db = process.env.DATABASE_URL;

console.log("connecting to the db");

mongoose
  .connect(db)
  .then((result) => {
    console.log("connection successful");
  })
  .catch((error) => {
    console.log("connection failed:", error.message);
  });

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

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;