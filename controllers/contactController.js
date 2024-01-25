const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc GET all contacts
//@route GET /api/contacts
//@access public

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create new contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body:", req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400).json({ error: "Please fill in all fields" });
    return;
  }
  try {
    const contact = await Contact.create({
      name,
      email,
      phone,
    });

    res.status(201).json({ message: "Contact is created!", contact });
  } catch (error) {
    console.error("Error creating contact:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//@desc Get contact id
//@route GET /api/contacts
//@access public

const getContactId = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Create contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updateContact);
});

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await contact.deleteOne();
  res.status(200).json(contact);
});

module.exports = {
  getContact,
  createContact,
  getContactId,
  updateContact,
  deleteContact,
};
