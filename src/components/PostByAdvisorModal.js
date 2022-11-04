import React from 'react'
import '../styles/TransactionModalStyles.css'

function PostByAdvisorModal() {
  return (
    <div id="myModal" className="modal">
        <div className="modal--content">
            <div className="modal--header">
                <span className="close">&times;</span>
                <h2>TITLE</h2>
            </div>
            <div className="modal--mainContent">
                <p>CONTENT</p>
            </div>
        </div>
    </div>
  )
}

export default PostByAdvisorModal   