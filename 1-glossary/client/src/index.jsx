import React from "react";
import ReactDOM from "react-dom";
import wordCollection from "./testData.js";
import WordList from './components/WordList.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfWords: wordCollection
    };
  }


  editItem(wordId, newDefinition) {
    console.log(`Getting ID: ${wordId} and new definition: ${newDefinition}`);
  }

  render() {
    return (
      <div>
        <h1>GlossaryApp</h1>
        <WordList wordList={this.state.listOfWords} editItem={this.editItem.bind(this)}/>
      </div>
    )
  }

}





ReactDOM.render(<App/>, document.getElementById('root'));