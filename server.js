const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
//passing the config evn
const dotenv = require("dotenv").config();

//connecting data base
connectDb();

const app = express();
const port = process.env.PORT || 5000;

//parsing our data
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
//users - login
app.use("/api/users", require("./routes/userRoute"));
//using our error handler file
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
