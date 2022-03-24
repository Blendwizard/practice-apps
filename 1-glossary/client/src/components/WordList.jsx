import React from 'react';
import WordItems from './WordItems.jsx';


const WordList = (props) => {


  return (
    <div>
      <ul>
        {props.wordList.map((words) => {
          return <WordItems key={words._id} word={words} editItem={props.editItem} deleteWord={props.deleteWord}/>
        })}
      </ul>
    </div>
  )
}

export default WordList;