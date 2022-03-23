import React from 'react';


const WordList = (props) => {

  return (
    <div>
      <ul>
        {props.wordCollection.map((word) => {
          return <WordItems/>;
        })}
      </ul>
    </div>
  )
}

export default WordList;