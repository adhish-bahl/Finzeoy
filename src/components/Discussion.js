import React from 'react'
import "../styles/Discussion.css"
import DiscussionBox from './DiscussionBox'

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
            <DiscussionBox  question="How can my income Expenditure improve?" author="By althea D’Cruz"  />
            <DiscussionBox  question="How can my income Expenditure improve?" author="By althea D’Cruz"  />
            <DiscussionBox  question="How can my income Expenditure improve?" author="By althea D’Cruz"  />
            <DiscussionBox  question="How can my income Expenditure improve?" author="By althea D’Cruz"  />
            <DiscussionBox  question="How can my income Expenditure improve?" author="By althea D’Cruz"  />
        </div>
    </div>
  )
}

export default Discussion