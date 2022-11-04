import React, { useEffect, useState } from 'react'
import LearningLessonsBar from './LearningLessonsBar'
import book from "../Images/books.svg"
import laptopGirl from "../Images/girlWithLaptop.svg"
import "../styles/LearningPage.css"

function LearningPage() {

    const [learningData, setLearningData] = useState([]); 
    
    const images = ["./Images/1(1).jpg", "./Images/1(2).jpg", "./Images/1(3).jpg", "./Images/1(4).jpg", "./Images/1(4).jpg", "./Images/1(4).jpg", 
                    "./Images/2(1).jpg", "./Images/2(2).jpg", "./Images/2(3).jpg", "./Images/2(4).jpg", "./Images/2(4).jpg", "./Images/2(4).jpg",
                    "./Images/3(1).jpg", "./Images/3(2).jpg", "./Images/3(3).jpg", "./Images/3(4).jpg", "./Images/3(4).jpg", "./Images/3(4).jpg"]

    useEffect(() => {
      fetch("https://localhost/Finzeoy/ServerFiles/GetLearningData.php")
      .then(res => res.json())
      .then(data => setLearningData(data));
    }, [])

    const beginnerLearningModules = learningData.filter(module => module.level == 1);

    const intermediateLearningModules = learningData.filter(module => module.level == 2)

    const advancedLearningModules = learningData.filter(module => module.level == 3);

    return (
      <div>
          <LearningLessonsBar title="Beginner" modules = {beginnerLearningModules} images={images.slice(0, 6)} />
          <LearningLessonsBar title="Intermediate" modules = {intermediateLearningModules} images={images.slice(6, 12)} />
          <LearningLessonsBar title="Advanced" modules = {advancedLearningModules} images={images.slice(12, 18)} />
          <img src={book} alt="book" className='LPbookIll'/>
          <img src={laptopGirl} alt="girl" className='LPlaptopGirlIll'/>
      </div>
    )
}

export default LearningPage