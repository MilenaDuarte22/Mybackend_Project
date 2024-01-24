const express = require("express");
const errorHandler = require("./middleware/errorHandler");
//passing the config evn
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//parsing our data
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
//using our error handler file
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
