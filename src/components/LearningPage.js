import React, { useEffect, useState } from 'react'
import LearningLessonsBar from './LearningLessonsBar'
import book from "../Images/books.svg"
import laptopGirl from "../Images/girlWithLaptop.svg"
import "../styles/LearningPage.css"

function LearningPage() {

    const [learningData, setLearningData] = useState([]); 

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
          <LearningLessonsBar title="Beginner" modules = {beginnerLearningModules} />
          <LearningLessonsBar title="Intermediate" modules = {intermediateLearningModules} />
          <LearningLessonsBar title="Advance" modules = {advancedLearningModules} />
          <img src={book} alt="book" className='LPbookIll'/>
          <img src={laptopGirl} alt="girl" className='LPlaptopGirlIll'/>
      </div>
    )
}

export default LearningPage