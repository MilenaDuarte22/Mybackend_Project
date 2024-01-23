const express = require("express");
//passing the config evn 
const dotenv = require("dotevn").config();

const app = express();
const port = process.env.PORT || 5000;
app.get(/api/contacts, (req, res)=> {
    res.send("Get all contacts");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
