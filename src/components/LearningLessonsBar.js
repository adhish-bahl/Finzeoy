import React from 'react';
import { useRef } from "react";
import LLBPictureComp from './LLBPictureComp';
import right from "../Images/right.svg"
import left from "../Images/left.svg"
import "../styles/LearningLessonBar.css";



function LearningLessonsBar({title}) {

  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  // function scrollLeft() {
  //   // console.log("click!!")
  //   const scrollableDiv = document.getElementsByClassName("LLBlower");
  //   scrollableDiv.scrollLeft += 20;
  //   // (-200, 0)
  // }
  
  // function scrollRight()  {
  //   // console.log("click!!")
  //   const scrollableDiv = document.getElementsByClassName("LLBlower");
  //   scrollableDiv.style.
  //   scrollableDiv.replaceContent = "dksjnjkdnfs"
  //   scrollableDiv.scrollRight += 20;
  // }


  return (
    <div className='LLBcontainer'>
        <div className="LLBTitle">
            <h1 className='LLBTitleHeading'>{title} Level</h1>
        </div>
        <div className='LLBlower1'>
          <img onClick={() => scroll(-300)} src={left} alt="leftArrow" className='LLBLeftArrow'/>
          <div className="LLBlower" ref={ref}>
            {/* jjkkndaskjn */}
            <LLBPictureComp />
            <LLBPictureComp />
            <LLBPictureComp />
            <LLBPictureComp />
            <LLBPictureComp />
            <LLBPictureComp />
          </div>
          <img onClick={() => scroll(300)} src={right} alt="rightArrow" className='LLBRightArrow'/>
        </div>
    </div>
  )
}

export default LearningLessonsBar