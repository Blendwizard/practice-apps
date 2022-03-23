import React from 'react';

class AddWords extends React.Component {
  constructor(props) {
    super(props)
  }

  appendWord() {
    var input = document.getElementById("word-text").value;
    this.props.addWord(input);
  }

  render() {
    return (
      <div>
        <input id ="word-text" type='text' placeholder='Add Word...'></input>
        <button onClick={this.appendWord.bind(this)}>Add</button>
      </div>
    )
  }
}

export default AddWords;