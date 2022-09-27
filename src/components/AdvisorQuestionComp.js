import React from 'react'
import "../styles/AdvisorQuestionComp.css"

function AdvisorQuestionComp({question, author}) {
  return (
    <div className='AdvisorQuestionCompContainer'>
        <div className="AQquestion">
            {question}
        </div>
        <div className="AQauthor">
            {author}
        </div>
        <div className="AQbtnContainer">
            <button type="submit" className='AQsubmitBtn'>Answer</button>
        </div>
    </div>
  )
}

export default AdvisorQuestionComp