import React, {useEffect, useState} from 'react'
import "../styles/AdvisorProfile.css"
import AdvisorQuestionComp from './AdvisorQuestionComp'
import PostByAdvisorModal from './PostByAdvisorModal';
// import ArticleModal from './ArticleModal';


function AdvisorProfile(props) {

    const [questionsData, setQuestionsData] = React.useState([]);
    const [advisorInfo, setAdvisorInfo] = React.useState({});

    useEffect(() => {
        fetch("https://localhost/Finzeoy/ServerFiles/GetQuestionsData.php")
        .then(res => res.json())
        .then(data => setQuestionsData(data))

        fetch("https://localhost/Finzeoy/ServerFiles/GetAdvisorInfo.php?userId="+sessionStorage.getItem("userId")+"")
        .then(res => res.json())
        .then(data => setAdvisorInfo(data))

        fetch("https://localhost/Finzeoy/ServerFiles/GetUserData.php?userId="+sessionStorage.getItem("userId")+"")
        .then(res => res.json())
        .then(data => setAdvisorInfo(prevState => {
            return {...prevState,
                    "name": data.name,
                    "phno": data.phno,
                    "email": data.email}
        }))
    }, [])

    const unansweredQuestionsData = questionsData.filter(question => {
        return question.answer === null
    })

    const unansweredQuestions = unansweredQuestionsData.map(question => {
        return <AdvisorQuestionComp key={question.quesid} question={question.ques} author={question.quesBy} />
    })

    function showModal() {
        var modal = document.getElementsByClassName('modal')[0];
        var span = document.getElementsByClassName('close')[0];
        
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    return (
        <div className='APcontainer'>
            <button type="submit" className='postButton' onClick={showModal}>+</button>
            <div className="APleft">

                <div className="APLone">

                    <div className="APLOright">
                        <div className="APadname">{advisorInfo.name}</div>
                        <div className="APadage">{advisorInfo.age}</div>
                        <div className="APadprofession">{advisorInfo.profession}</div>
                    </div>
                </div>

                <div className="APLtwo">
                    <h3 className="APheading">{advisorInfo.desc}</h3>
                </div>

                <div className="APLthree">
                    <h1 className="APheading">Contact</h1>
                    
                    <div className="APLTtags">
                        <div className="tags">{advisorInfo.phno}</div>
                        <div className="tags">{advisorInfo.twitter}</div>
                        <div className="tags">{advisorInfo.email}</div>
                        <div className="tags">{advisorInfo.facebook}</div>
                        <div className="tags">{advisorInfo.linkedin}</div>
                        <div className="tags">{advisorInfo.website}</div>
                    </div>
                </div>

            </div>

            <div className="APright">
                {unansweredQuestions}
            </div>

            <PostByAdvisorModal />
        </div>
    )
}

export default AdvisorProfile