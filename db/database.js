const mysql = require("mysql");
const { register } = require("ts-node");
const mysqlConfig = require("./config.js");
const connection = mysql.createConnection(mysqlConfig);
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

let registere = (arr,  callback) => {
  console.log("hheheh")
  var sql = `UPDATE student  SET(firstname, lastname, country, city, addresspostal , driving , dateOfBirth , placeOfBirth , nationality , education , socialLink , skills , languages , hobbies , profilePic , summery) values (?, ?, ?, ?, ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ?)  WHERE username= ?;`;
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};



module.exports = {
  registere , 
};