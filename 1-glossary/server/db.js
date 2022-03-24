const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost:27017/fetcher', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("Successfully connected to database...");
  }
});
// 2. Set up any schema and models needed by the app
var schema = new mongoose.Schema({
  word: String,
  definition: String
});

var Word = mongoose.model("Word", schema);

const save = (wordObj) => {
  var wordDoc = new Word({
    word: wordObj.word,
    definition: wordObj.definition
  });

  wordDoc.save((err, document) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Word saved successfully to database ...', document);
    }
  })
}

const retrieveWords = (callback) => {

  Word.find((err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

const updateDefinition = (word, definition, callback) => {
  var filter = {word: word};
  var update = {definition: definition};

  Word.findOneAndUpdate(filter, update, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  })
}

const deleteOne = (deleted, callback) => {
  Word.deleteOne({word: deleted}, (err, confirmation) => {
    if (err) {
      callback(err);
    } else {
      callback(confirmation);
    }
  })
}

// 3. Export the models

module.exports.save = save;
module.exports.retrieveWords = retrieveWords;
module.exports.updateDefinition = updateDefinition;
module.exports.deleteOne = deleteOne;

// 4. Import the models into any modules that need them
