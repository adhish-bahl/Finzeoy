import React from 'react';
import DemoIng from "../Images/demoImg.jpg";
import "../styles/LLBPictureComp.css"

function LLBPictureComp() {
  return (
    <div className='LLBPCcontainer'>
        <img src={DemoIng} alt="thumbnail"/>
        <div className="LLBPCreadMore">READ MORE</div>
    </div>
  )
}

export default LLBPictureComp