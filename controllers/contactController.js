const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc GET all contacts
//@route GET /api/contacts
//@access public

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create new contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body:", req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    req.status(400);
    throw new Error("Please, check if all fields was filled ");
  }

  res.status(201).json({ message: "Create contact" });
});

//@desc Get contact id
//@route GET /api/contacts
//@access public

const getContactId = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@desc Create contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContact,
  createContact,
  getContactId,
  updateContact,
  deleteContact,
};
