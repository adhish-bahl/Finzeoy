import React, { useEffect } from 'react'
import "../styles/Discussion.css"
import DiscussionBox from './DiscussionBox'

function Discussion(props) {

    const [questionsData, setQuestionsData] = React.useState([]);

    useEffect(() => {
        fetch("https://finzeoy.000webhostapp.com/GetQuestionsData.php")
        .then(res => res.json())
        .then(data => setQuestionsData(data))
    }, [])

    const questionsAskedData = questionsData.filter(question => {
        return question.answer.length === 0 && question.quesBy === props.userId;
    })

    console.log(questionsData);

    const questionsAnsweredData = questionsData.filter(question => {
        return question.answer.length != 0 && question.quesBy === props.userId; 
    })

    const allQuestionsAnsweredData = questionsData.filter(question => {
        return question.answer.length != 0
    })

    const questionsAsked = questionsAskedData.map(question => {
        return <div className="questionAsked">
            <h4>{question.ques}</h4>
        </div>
    })

    const questionsAnswered = questionsAnsweredData.map(question => {
        return <div className="questionAnswered">
            <h4>{question.ques}</h4>
            <p>{question.answer}</p>
        </div>
    })

    const allQuestionsAnswered = allQuestionsAnsweredData.map(question => {
        return <DiscussionBox question={question.ques} answerBy={question.answerBy} answer={question.answer} />
    })

    return (
        <div className='discussionContainer'>
            <div className="DCleft">
                <div className="DClheading">
                    <h1>My Questions</h1>
                </div>
        
                <div className="DCRupper">
                    <h1>Questions Asked:</h1>
                    {questionsAsked}
                </div>

                <div className="DCRlower">
                    <h1>Question Answered:</h1>
                    {questionsAnswered}
                </div>
            </div>

            <div className="DCright">
                {allQuestionsAnswered}
            </div>
        </div>
    )
}

export default Discussion