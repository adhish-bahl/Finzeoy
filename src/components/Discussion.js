import React, { useEffect } from 'react'
import "../styles/Discussion.css"
import DiscussionBox from './DiscussionBox'

function Discussion() {

    const [questionsData, setQuestionsData] = React.useState([]);

    useEffect(() => {
        fetch("https://localhost/Finzeoy/ServerFiles/GetQuestionsData.php")
        .then(res => res.json())
        .then(data => setQuestionsData(data))
    }, [])

    const questionsAskedData = questionsData.filter(question => {
        return (question.answer === null && question.quesBy == 4);
    })

    const questionsAnsweredData = questionsData.filter(question => {
        return (question.answer != null && question.quesBy == 4); 
    })

    const allQuestionsAnsweredData = questionsData.filter(question => {
        return question.answer != null;
    })

    const questionsAsked = questionsAskedData.map(question => {
        return <div className="questionAsked" key={question.quesid}>
            <h4>{question.ques}</h4>
        </div>
    })

    const questionsAnswered = questionsAnsweredData.map(question => {
        return <div className="questionAnswered" key={question.quesid}>
            <h4>{question.ques}</h4>
        </div>
    })

    const allQuestionsAnswered = allQuestionsAnsweredData.map(question => {
        return <DiscussionBox key={question.quesid} question={question.ques} answerBy={question.ansBy} answer={question.answer} />
    })

    console.log(questionsData);

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
                <div className="postQuestion">
                    <input type="text" name="questionInput" id="questionInput" placeholder='Write your Question here...' />
                    <button type="submit" className='postQuestionButton'>Post</button>
                </div>
                {allQuestionsAnswered}
            </div>
        </div>
    )
}

export default Discussion