import React from "react";
import ReactDOM from "react-dom";
import wordCollection from "./testData.js";
import WordList from './components/WordList.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <div>
        <h1>GlossaryApp</h1>
        <WordList wordCollection={wordCollection}/>
      </div>
    )
  }

}





ReactDOM.render(<App/>, document.getElementById('root'));