import { validationResult } from "express-validator";
import Contact from "../models/contact";
import { log } from "../utils/logger";

const getAllContact = async (req, res, next) => {
  try {
    const contactList = await Contact.find({});
    res.status(200).json({
      status: 200,
      message: "All contacts retrieved!",
      data: contactList,
    });
  } catch (e) {
    log.error(e);
    next(e);
    res.status(400).end();
  }
};

const createContact = async (req, res, next) => {
  try {
    const validationError = validationResult(req);
    if (!validationError.isEmpty()) {
      return res.status(400).json({ errors: validationError.array() });
    }

    const contact = await Contact.create({ ...req.body });
    res.status(201).json({
      status: 201,
      message: "New contact created!",
      data: contact,
    });
  } catch (e) {
    log.error(e);
    next(e);
    res.status(400).end();
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const {
      params: { contactId },
    } = req;
    const contact = await Contact.findById(contactId);

    if (!contact) {
     return res.status(404).json({ status: 404, message: "Contact not found!" });
    }

    await Contact.findByIdAndRemove(contactId);
    res.status(204).end();
  } catch (e) {
    log.error(e);
    next(e);
    res.status(400).end();
  }
};

const getContact = async (req, res, next) => {
  try {
    const {
      params: { contactId },
    } = req;

    const contact = await Contact.findById(contactId);

    if (!contact) {
      return res
        .status(404)
        .json({ status: 404, message: "Contact not found!" });
    }

    res.status(200).json({
      status: 200,
      message: "Contact retrieved!",
      data: contact,
    });
  } catch (e) {
    log.error(e);
    next(e);
    res.status(400).end();
  }
};

const editContact = async (req, res) => {
  try {
    const {
      body,
      params: { contactId },
    } = req;

    const contact = await Contact.findById(contactId);

    if (!contact) {
      return res
        .status(404)
        .json({ status: 404, message: "Contact not found!" });
    }
    const validationError = validationResult(req);
    if (!validationError.isEmpty()) {
      return res.status(400).json({ errors: validationError.array() });
    }

    const { history } = contact;
    const currentContact = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      phone: contact.phone,
      email: contact.email,
      id: contactId,
      updatedAt: contact.updatedAt,
    };

    if (history.length === 3) history.shift();
    const editHistory = history.concat(currentContact);

    const { firstName, lastName, phone, email } = body;
    const reqBody = { firstName, lastName, phone, email, history: editHistory };

    const updatedContact = await Contact.findByIdAndUpdate(contactId, reqBody, {
      new: true,
    });

    res.status(200).json({
      status: 200,
      message: "Contact updated!",
      data: updatedContact,
    });
  } catch (e) {
    log.error(e);
    next(e);
    res.status(400).end();
  }
};

export { getAllContact, createContact, deleteContact, getContact, editContact };
