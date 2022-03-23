require("dotenv").config();
const express = require("express");
const path = require("path");
const database = require('./db.js');


const app = express();
app.use(express.json());

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));


/****
 *
 *
 * Other routes here....
 *
 *
 */

app.post('/words', (req, res) => {
  // console.log('made it to post func')
  // console.log(req.body);

  database.save(req.body);
})

app.get('/words', (req, res) => {
  console.log("Attmpting to fetch all words in database...")
  database.retrieveWords((err, success) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(success);
    }
  });
})

app.patch('/words', (req, res) => {
  console.log("Made it to patch::::", req.body)
  var newDefinition = req.body.definition;
  var word = req.body.word;

  database.updateDefinition(word, newDefinition, (err, success) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(success);
    }
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
