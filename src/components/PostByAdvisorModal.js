import React, { useState } from 'react'
import '../styles/TransactionModalStyles.css'
import '../styles/PostByAdvisorModal.css'

function PostByAdvisorModal() {

  const [articleData, setArticleData] = useState({
    "title": "",
    "typeOfArticle": "investment",
    "article": ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setArticleData(prevData => {
      return {...prevData, [name]: value}
    })
  }

  async function submitContent() {
    if(articleData.title == "" || articleData.article == "") {
      alert("Please fill all the fields")
    }

    else {
      var date = new Date();
      await fetch("https://finzeoy.000webhostapp.com/SaveArticles.php?title="+articleData.title+"&postedBy="+sessionStorage.getItem("userId")+"&date="+date.toLocaleDateString()+"&article="+articleData.article+"&type="+articleData.typeOfArticle+"")
      .then(res => res.json())
      .then(data => data.status === "success" ? alert("Article posted successfully") : alert("Article could not be posted"))

      window.location.reload();
    }
  }

  return (
    <div id="myModal" className="modal">
        <div className="modal--content">
            <div className="modal--header">
                <span className="close">&times;</span>
                <h2>Post Content</h2>
            </div>
            <div className="modal--mainContent">
                <div>
                    <input type="text" name="title" id="title" placeholder='Give Title' onChange={handleChange}/>
                    <select name="typeOfArticle" id="articleType" onChange={handleChange} >
                      <option value="investment">Investment</option>
                      <option value="general">General</option>
                    </select>
                    <textarea type="" name="article" id="article" placeholder='Article Here' onChange={handleChange} />
                    <button id="postButton" type="submit" onClick={submitContent}>Post</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostByAdvisorModal   