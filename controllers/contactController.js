const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc GET all contacts
//@route GET /api/contacts
//@access private

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({user_id: req.user.id});
  res.status(200).json(contacts);
});

//@desc Create new contacts
//@route POST /api/contacts
//@access private
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
      user_id: req.user.id
    });

    res.status(201).json({ message: "Contact is created!", contact });
  } catch (error) {
    console.error("Error creating contact:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//@desc Get contact id
//@route GET /api/contacts
//@access private

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
//@access private

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if(contact.user.id.toString() !== req.user.id){
    res.status(403);
    throw Error("You  dont have permission to update other user contacts");
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
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if(contact.user.id.toString() !== req.user.id){
    res.status(403);
    throw Error("You dont have permission to update other user contacts");
  }

  await contact.deleteOne({_id: req.params.id});
  res.status(200).json(contact);
});

module.exports = {
  getContact,
  createContact,
  getContactId,
  updateContact,
  deleteContact,
};
