import React from 'react';

class SearchWords extends React.Component {
  constructor(props) {
    super(props);
  }

  searchClick() {
    var search = document.getElementById('input-text').value;
    this.props.searchForWord(search);

  }

  render() {
    return (
      <div>
        <input id='input-text' style={{'marginTop': '10px'}} placeholder='Search for word...'></input>
        <button onClick={this.searchClick.bind(this)} id='search-btn'>Search</button>
      </div>
    )
  }
}

export default SearchWords;