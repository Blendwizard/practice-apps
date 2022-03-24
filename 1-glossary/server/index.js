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

  // Incorrect implementation
  database.save(req.body);
  res.send(201);

})

app.get('/words', (req, res) => {
  console.log("Attempting to fetch all words in database...")
  database.retrieveWords((err, success) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(success);
    }
  });
})

app.patch('/words', (req, res) => {

  console.log(`Updating the word::: ${req.body.word} ::: with: ${req.body.definition}`);
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


app.delete('/words', (req, res) => {
  var deleteWord = req.body.word;
  console.log(`Deleting word from glossary: ${deleteWord}`);
  database.deleteOne(deleteWord, (success) => {
      res.sendStatus(201);
  })
})



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
