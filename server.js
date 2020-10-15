const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const db = require("./db/database.js");

var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

///////////////////////// Rgistration sTUDENT //////////////////////////////
app.post("/api/users/registration", (req, res) => {
    console.log("this is consol =>>>" , req.body )
    var registerArray = [
        req.body.name , 
        req.body.last , 
        req.body.country , 
        req.body.city , 
        req.body.address , 
        req.body.licence , 
        req.body.dateOfBirth , 
        req.body.placeOfBirth , 
        req.body.nationality , 
        req.body.education , 
        req.body.facebook , 
        req.body.skills , 
        req.body.languages , 
        req.body.hobbies , 
        req.body.image , 
        req.body.summary ,
        req.body.username
    ]
    db.registere(registerArray, (err, data) => {
        if (err) throw err;
        res.send(data);
      });
})

//////////////////////// Registration COMPANY ////////////////////////////////////////// 

app.post("/api/users/registerCompany", (req, res) => {
  console.log("this is consol =>>>" , req.body )
  var registerArray = [
    req.body.email,
    req.body.owner,
    req.body.field,
    req.body.numberOfEmployee,
    req.body.location,
    req.body.website ,
    req.body.logo,
    req.body.about,
    req.body.name 
  ]
  db.registerCompany(registerArray, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
}) 

////////////////////////////// Registration TRAINING CENTER /////////////////////////////////////

app.post("/api/users/registerTrainingCenter", (req, res) => {
  console.log("this is consol =>>>" , req.body )
  var registerArray = [
    req.body.email,
    req.body.owner,
    req.body.trainingOptions,
    req.body.numberOfStudent,
    req.body.location,
    req.body.website ,
    req.body.logo,
    req.body.about,
    req.body.name 
  ]
  db.registerTrainingCenter(registerArray, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
}) 

////////////////////////////// waiting for validation ///////////////////////////
app.post('/api/users/sendVerificationRequest', (req, res) => {
    var array = [
        'true',
        req.body.username
    ]
    db.verificationRequest(array, (err, data) => {
        if (err) throw err;
        res.send(data);
      });
})
//////////////////// Admin Side : Student Verification //////////////////
app.post('/api/users/verifyStudent', (req, res) => {
  var array = [
      'true',
      req.body.username
  ]
  db.verifyStudent(array, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
})

app.post('/api/users/rejectStudent', (req, res) => {
  var array = [
      'false',
      req.body.username
  ]
  db.rejectStudent(array, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
})
////////////////////////// Admin Side : Company Verififcation //////////////////////////////
app.post('/api/users/verifyCompanies', (req, res) => {
  var array = [
      'true',
      req.body.name
  ]
  db.verifyCompanies(array, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
})

app.post('/api/users/rejectCompanies', (req, res) => {
  var array = [
      'false',
      req.body.name
  ]
  db.rejectCompanies(array, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
})

//////////////////////////////////////////////////////////////////////////////

app.get('/api/users/getNonVerifiedStudents', async (req, res) => {
    try {
        const requests = await db.getNonVerifiedStudents();
        res.status(200).send(requests);
      } catch (err) {
        console.error(err);
      }
})



app.get('/api/users/getNonVerifiedCompanies', async (req, res) => {
  try {
      const requests = await db.getNonVerifiedCompany();
      res.status(200).send(requests);
    } catch (err) {
      console.error(err);
    }
})

app.get('/api/users/getNonVerifiedCenters', async (req, res) => {
  try {
      const requests = await db.getNonVerifiedCenters();
      res.status(200).send(requests);
    } catch (err) {
      console.error(err);
    }
})
app.listen(port, () => console.log(`server is listening on port ${port}`));



