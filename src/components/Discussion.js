import React, { useEffect } from 'react'
import "../styles/Discussion.css"
import DiscussionBox from './DiscussionBox'
import '../styles/ArticleStyles.css';
import ArticleModal from "./ArticleModal";

function Discussion() {

    const [errorText, setErrorText] = React.useState()

    const [questionsData, setQuestionsData] = React.useState([]);

    useEffect(() => {
        fetch("https://finzeoy.000webhostapp.com/GetQuestionsData.php")
            .then(res => res.json())
            .then(data => setQuestionsData(data))
    }, [])

    const questionsAskedData = questionsData.filter(question => {
        return (question.answer === null && question.quesBy == sessionStorage.getItem("userId"));
    })

    const questionsAnsweredData = questionsData.filter(question => {
        return (question.answer != null && question.quesBy == sessionStorage.getItem("userId"));
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
            <h4 onClick={showModal}>{question.ques}</h4>
            <ArticleModal title={question.ques} content={question.answer} />
        </div>
    })

    const allQuestionsAnswered = allQuestionsAnsweredData.map(question => {
        return <DiscussionBox key={question.quesid} question={question.ques} answerBy={question.ansBy} answer={question.answer} />
    })

    async function submitQuestion() {
        var question = document.getElementById("questionInput").value;

        if(question == "") {
            setErrorText("Enter a valid question")
        } else {            
            await fetch("https://finzeoy.000webhostapp.com/SaveQuestion.php?question=" + question + "&quesBy=" + sessionStorage.getItem("userId") + "&operation=insert&answer=null&userId=null&quesId=null")
            .then(res => res.json())
            .then(data => data.status === "success" ? setErrorText("Question posted successfully") : setErrorText("Question posting failed"))   
            window.location.reload()
        }
    }

    function showModal(event) {
        var modal = event.target.parentElement.children[1];
        var span = modal.children[0].children[0].children[0];

        modal.style.display = "block";
        span.onclick = function () {
            modal.style.display = "none";
        }
    }

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
                    <div className='postQuestionInput'>
                        <input type="text" name="questionInput" id="questionInput" placeholder='Write your Question here...' />
                        <button type="submit" className='postQuestionButton' onClick={submitQuestion}>Post</button>
                    </div>
                    <label className="loginErrorDislayLabel" style={{ width: "100%", textAlign: "left", paddingLeft: "20px" }}> {errorText} </label>
                </div>
                {allQuestionsAnswered}
            </div>
        </div>
    )
}

export default Discussion