import React from 'react'
import "../styles/DiscussionBox.css"

function DiscussionBox({question, author, answerBy, answer}) {
  return (
    <div className='DiscussionBoxContainer'>
        <div className="DBquestion">
            {question}
        </div>
        <div className="DBauthor">
            {author}
        </div>
        <div className="DBanswerBy">
            <b>Answered by: </b> {answerBy}
        </div>
        <div className="DBanswer">
            {answer}
        </div>
    </div>
  )
}

export default DiscussionBox