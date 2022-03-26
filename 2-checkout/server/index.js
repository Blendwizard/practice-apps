require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
// Establishes connection to the database on server start
const db = require("./db");

const app = express();
app.use(express.json());

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));



app.get('/', (req, res) => {
  console.log('???????')
  db.checkUnique(req.session_id, (err, success) => {
    console.log("AHHHHH", success)
    if (err) {
      res.status(404).send(err);
    } else {
      console.log("success is:", success)
      if (success === true) {
        console.log(success)
        res.sendStatus(300);
      } else {
        res.sendStatus(200);
      }
    }
  })
})


app.post('/users', (req, res) => {
  console.log("USER SESSION:::", req.session_id);

  db.confirmSubmit(req.session_id, (err, success) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.sendStatus(201);
    }
  })

  // Stores Account Creation data

  // var userInfo = req.body;
  // if (userInfo.name !== '' && userInfo.email !== '' && userInfo.password !== '') {
  //   db.insertUser(userInfo, (success) => {
  //     res.sendStatus(201);
  //   });
  // } else {
  //   res.sendStatus(200);
  // }

})
/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
