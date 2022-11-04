import React from 'react';
import { useRef } from "react";
import LLBPictureComp from './LLBPictureComp';
import right from "../Images/right.svg"
import left from "../Images/left.svg"
import "../styles/LearningLessonBar.css";



function LearningLessonsBar(props) {

  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  
  const learningLessons = props.modules.map(module => {
    return <LLBPictureComp key={module.moduleId} title={module.title} content={module.content} />
  })

  return (
    <div className='LLBcontainer'>
        <div className="LLBTitle">
            <h1 className='LLBTitleHeading'>{props.title} Level</h1>
        </div>
        <div className='LLBlower1'>
          <img onClick={() => scroll(-300)} src={left} alt="leftArrow" className='LLBLeftArrow'/>
          <div className="LLBlower" ref={ref}>
            {learningLessons}
          </div>
          <img onClick={() => scroll(300)} src={right} alt="rightArrow" className='LLBRightArrow'/>
        </div>
    </div>
  )
}

export default LearningLessonsBar