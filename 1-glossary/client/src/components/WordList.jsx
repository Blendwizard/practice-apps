import React from 'react';
import WordItems from './WordItems.jsx';


const WordList = (props) => {


  return (
    <div>
      <ul>
        {props.wordList.map((words) => {
          return <WordItems word={words} editItem={props.editItem}/>
        })}
      </ul>
    </div>
  )
}

export default WordList;