import React from "react";
import ReactDOM from "react-dom";
import wordCollection from "./testData.js";
import WordList from './components/WordList.jsx'
import AddWords from './components/AddWords.jsx';
import SearchWords from './components/SearchWords.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfWords: []
    };
  }

  componentDidMount() {
    this.fetchWords();
  }


// :::::::::::::::: FUNCTIONS ::::::::::::::::


  searchForWord(query) {
    fetch(`http://localhost:3000/words/search?term=${query}`)
    .then(res => res.json())
    .then(
      (results) => {
      this.setState({listOfWords: results});
    })
  }

  deleteWord(word) {
    var wordBody = {word};
    fetch('http://localhost:3000/words',
    {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(wordBody)
    })
    .then(this.fetchWords());
  }

  addWord(word) {
    // Need to handle unique ID
    var wordBody = {word : word, definition: ''};
    fetch('http://localhost:3000/words',
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(wordBody)
    })
    .then(this.fetchWords())
  }

  editItem(word, newDefinition) {
    console.log(`Changing: ${word} - New Definition: ${newDefinition}`);
    // Create object
    var updateBody = {word: word, definition: newDefinition};

    fetch('http://localhost:3000/words',
    {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateBody)
    })
    .then(this.fetchWords())
  }

  fetchWords() {
    fetch('http://localhost:3000/words')
    .then((res) => res.json())
    .then((results) => {
      this.setState({listOfWords: results});
    })
  }


  //:::::::::::::::: RENDER ::::::::::::::::
  render() {
    return (
      <div>
        <h1>GlossaryApp</h1>
        <AddWords addWord={this.addWord.bind(this)}/>
        <SearchWords searchForWord={this.searchForWord.bind(this)}/>
        <WordList wordList={this.state.listOfWords} editItem={this.editItem.bind(this)} deleteWord={this.deleteWord.bind(this)}/>
      </div>
    )
  }

}





ReactDOM.render(<App/>, document.getElementById('root'));