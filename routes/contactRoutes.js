//making all the routes here
const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  getContactId,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getContactId).put(updateContact).delete(deleteContact);

//exporting our routers
module.exports = router;
