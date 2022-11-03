import React from 'react'
import "../styles/DiscussionBox.css"

function DiscussionBox({question, author}) {
  return (
    <div className='DiscussionBoxContainer'>
        <div className="DBquestion">
            {question}
        </div>
        <div className="DBauthor">
            {author}
        </div>
        <div className="DBansweredBy">

        </div>
    </div>
  )
}

export default DiscussionBox