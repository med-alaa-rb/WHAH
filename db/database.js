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

let registere = (arr, callback) => {
  console.log("hheheh");
  console.log(arr)
  var sql = `UPDATE students SET firstname = ? , lastname = ? , country = ?, city = ?, addresspostal = ?, driving = ?, dateOfBirth = ?, placeOfBirth = ?, nationality = ?, education = ?, socialLink = ?, skills = ?, languages = ?, hobbies = ?, profilePic = ?, summery= ? WHERE username= ?;`;
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
 
let registerCompany = (arr, callback) => {
  console.log("hheheh");
  console.log(arr)
  var sql = `UPDATE companies SET email = ? , owner = ? , field = ?, numberOfEmployees = ?, location = ?, website = ?, logo = ?, about = ? WHERE name= ?;`;
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}
let registerTrainingCenter = (arr, callback) => {
  console.log("hahaha");
  console.log(arr)
  var sql = `UPDATE trainingCenters SET email = ? , owner = ? , trainingOptions = ?, numberOfStudentGraduated = ?, location = ?, website = ?, logo = ?, about = ? WHERE name= ?;`;
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}


let verificationRequest = (arr, callback) => {
  var sql = "UPDATE students SET verRequest = ?  WHERE username= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}


let verifyStudent = (arr, callback) => {
  var sql = "UPDATE students SET verification = ?  WHERE username= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}

let rejectStudent = (arr, callback) => {
  var sql = "UPDATE students SET verRequest = ?  WHERE username= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}
////////////////////////////////////////////

let verifyCompanies = (arr, callback) => {
  var sql = "UPDATE companies SET verification = ?  WHERE name= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}

let rejectCompanies = (arr, callback) => {
  var sql = "UPDATE companies SET verRequest = ?  WHERE name= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}

/////////////////////////////////////////////////

const getNonVerifiedStudents = function () {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from students where verification='false' and verRequest='true';`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};


const getNonVerifiedCompany = function () {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from companies where verification='false' and verRequest='true';`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};



const getNonVerifiedCenters = function () {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from trainingCenters where verification='false' and verRequest='true';`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};
module.exports = {
  registere,
  verificationRequest,
  getNonVerifiedStudents,
  verifyStudent,
  rejectStudent, 
  registerCompany,
  registerTrainingCenter,
  getNonVerifiedCompany,
  getNonVerifiedCenters,
  verifyCompanies,
  rejectCompanies
};
