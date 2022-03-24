import React from 'react';


// Dont forget to use 'this' when referring to props!

class WordItems extends React.Component {
  constructor(props) {
    super(props);
  }


  editClick() {

    var updatedDefinition = prompt('Add your new definition');
    // var id = this.props.word.id;
    var word = this.props.word.word;

    this.props.editItem(word, updatedDefinition);
  }

  deleteClick() {
    console.log(`Deleted "${this.props.word.word}" (non-functional)`);
    this.props.deleteWord(this.props.word.word);
  }

  render() {
    return (
      <div>
        <li>
          {this.props.word.word}: {this.props.word.definition}
        </li>
        <button className='edit-btn' style={{'backgroundColor': '#8EEDFB', 'fontSize': '10px'}}onClick={this.editClick.bind(this)}>Edit</button>
        <button className='delete-btn' style={{'backgroundColor': '#F75633', 'fontSize': '10px' }} onClick={this.deleteClick.bind(this)}>Delete</button>
      </div>
    )
  }
}

export default WordItems;