import React from 'react'
import "../styles/Discussion.css"

function Discussion() {
  return (
    <div className='discussionContainer'>
        <div className="DCleft">
            <div className="DClheading">
                <h1>My Questions</h1>
            </div>
    
            <div className="DCRupper">
                <h1>Questions Asked:</h1>
            </div>

            <div className="DCRlower">
                <h1>Question Answered:</h1>
            </div>
        </div>

        <div className="DCright">
            
        </div>
    </div>
  )
}

export default Discussion