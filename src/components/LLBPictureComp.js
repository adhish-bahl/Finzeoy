import React from 'react';
import DemoIng from "../Images/demoImg.jpg";
import "../styles/LLBPictureComp.css"

function LLBPictureComp() {
  return (
    <div className='LLBPCcontainer'>
        <img src={DemoIng} alt="thumbnail"/>
        <div className="LLBPCreadMore">READ CHAPTER</div>
        <div className="articleTitle">Sample Title: this is a long title to test if it is working properly</div>
    </div>
  )
}

export default LLBPictureComp