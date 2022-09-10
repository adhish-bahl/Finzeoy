import React from 'react';
import LLBPictureComp from './LLBPictureComp';
import "../styles/LearningLessonBar.css";

function LearningLessonsBar() {
  return (
    <div className='LLBcontainer'>
        <div className="LLBTitle">
            <h1 className='LLBTitleHeading'>Beginner Level</h1>
            <LLBPictureComp />
            <LLBPictureComp />
            <LLBPictureComp />
            <LLBPictureComp />
            <LLBPictureComp />
            <LLBPictureComp />
        </div>
    </div>
  )
}

export default LearningLessonsBar