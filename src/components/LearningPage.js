import React from 'react'
import LearningLessonsBar from './LearningLessonsBar'
import book from "../Images/books.svg"
import laptopGirl from "../Images/girlWithLaptop.svg"
import "../styles/LearningPage.css"

function LearningPage() {
  return (
    <div>
        <LearningLessonsBar/>
        <LearningLessonsBar/>
        <LearningLessonsBar/>
        <img src={book} alt="book" className='LPbookIll'/>
        <img src={laptopGirl} alt="girl" className='LPlaptopGirlIll'/>
    </div>
  )
}

export default LearningPage