import { Router } from "express";
import {
  createContact,
  deleteContact,
  editContact,
  getAllContact,
  getContact,
} from "../controllers/contact";
import checkDuplicate, { validate } from "../utils/validation";

const router = Router();

router.get("/contacts", getAllContact);
router.post("/contacts", checkDuplicate, validate, createContact);
router.delete("/contacts/:contactId", deleteContact);
router.get("/contacts/:contactId", getContact);
router.put("/contacts/:contactId", validate, editContact);

export default router;
