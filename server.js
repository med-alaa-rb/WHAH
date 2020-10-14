const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3008;
const db = require("./db/database.js");

var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(port, () => console.log(`server is listening on port ${port}`));
