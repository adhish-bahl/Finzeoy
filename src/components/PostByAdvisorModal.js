import React from 'react'
import '../styles/TransactionModalStyles.css'
import '../styles/PostByAdvisorModal.css'

function PostByAdvisorModal() {
  return (
    <div id="myModal" className="modal">
        <div className="modal--content">
            <div className="modal--header">
                <span className="close">&times;</span>
                <h2>Post Content</h2>
            </div>
            <div className="modal--mainContent">
                <form action="">
                    <input type="text" name="title" id="title" placeholder='Give Title' />
                    <select name="typeOfArticle" id="articleType">
                      <option value="investment">Investment</option>
                      <option value="general">General</option>
                    </select>
                    <textarea type="" name="article" id="article" placeholder='Article Here' />
                    <button id="postButton" type="submit">Post</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default PostByAdvisorModal   