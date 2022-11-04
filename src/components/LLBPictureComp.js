import React from 'react';
import DemoIng from "../Images/demoImg.jpg";
import "../styles/LLBPictureComp.css"
import ArticleModal from '../components/ArticleModal';

function LLBPictureComp(props) {

  function showModal(event) {
    var modal =event.target.children[0];
    var span = modal.children[0].children[0].children[0];
    
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
}

  return (
    <div className='LLBPCcontainer'>
        <img src={DemoIng} alt="thumbnail"/>
        <div className="LLBPCreadMore" onClick={showModal}>READ CHAPTER
          <ArticleModal title={props.title} content={props.content} />
        </div>
        <div className="articleTitle">{props.title}</div>
    </div>
  )
}

export default LLBPictureComp