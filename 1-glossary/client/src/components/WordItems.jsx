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

  render() {
    return (
      <div>
        <li>
          {this.props.word.word}: {this.props.word.definition}
        </li>
        <button className='edit-btn' onClick={this.editClick.bind(this)}>Edit</button>
      </div>
    )
  }
}

export default WordItems;