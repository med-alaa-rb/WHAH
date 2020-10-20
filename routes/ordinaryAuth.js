const ord = require("express").Router();
const db = require("../db/ordinaryAuthDb/handleStudentConnection");

const bcrypt = require('bcrypt')

const hash = (pass) => bcrypt.hashSync(pass, 10)

ord.post("/registerStudent", (req, res) => {
    console.log(req.body)
  var arr = [
    req.body.username,
    req.body.secretinfo,
    hash(req.body.password),
    req.body.email
  ];
  db.addStudent(arr, (err, data) =>{
    if (err) throw err;
    res.send(`${req.body.username} added succsesfully`);
  });
});




ord.post("/login", (req, res) => {
  db.getUserInfo(req.body.username, (err, data) => {
    if (err) throw err;
    console.log(data[0].password)
    res.send(bcrypt.compareSync(req.body.password, data[0].password))
  });
});

module.exports = ord;
