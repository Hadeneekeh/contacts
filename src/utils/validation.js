import { body } from "express-validator";
import Contact from "../models/contact";

const email = body("email").isEmail().not().isEmpty().trim().escape();

const checkDuplicate = body("email").custom(async (value) => {
  const exist = await Contact.findOne({ email: value });
  if (exist) {
    return Promise.reject("E-mail already exist");
  }
});

const firstName = body("firstName").isString().not().isEmpty().trim().escape();
const lastName = body("lastName").isString().not().isEmpty().trim().escape();
const phone = body("phone").isString().not().isEmpty().trim().escape();

export const validate = [email, firstName, lastName, phone];
export default checkDuplicate;
