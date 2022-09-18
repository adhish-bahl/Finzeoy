import React from 'react';
import LLBPictureComp from './LLBPictureComp';
import right from "../Images/right.svg"
import left from "../Images/left.svg"
import "../styles/LearningLessonBar.css";



function LearningLessonsBar({title}) {

  function scrollLeft() {
    console.log("click!!")
    const left = document.getElementsByClassName("LLBlower");
    left.scrollIntoView(-200, 0)
  }

  function scrollRight()  {
    const left = document.getElementsByClassName("LLBlower");
    left.scrollIntoView(200,0)
  }


  return (
    <div className='LLBcontainer'>
        <div className="LLBTitle">
            <h1 className='LLBTitleHeading'>{title} Level</h1>
        </div>
        <div className='LLBlower1'>
          <img onClick={scrollLeft} src={left} alt="leftArrow" className='LLBLeftArrow'/>
          <div className="LLBlower">
            <LLBPictureComp />
            <LLBPictureComp />
            <LLBPictureComp />
            <LLBPictureComp />
            <LLBPictureComp />
            <LLBPictureComp />
          </div>
          <img onClick={scrollRight} src={right} alt="rightArrow" className='LLBRightArrow'/>
        </div>
    </div>
  )
}

export default LearningLessonsBar