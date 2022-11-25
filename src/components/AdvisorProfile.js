import React, {useEffect, useState} from 'react'
import "../styles/AdvisorProfile.css"
import AdvisorQuestionComp from './AdvisorQuestionComp'
import PostByAdvisorModal from './PostByAdvisorModal';
import editIcon from "../Images/editIcon.svg"
import AdvisorProfileEditModal from "./AdvisorProfileEditModal.js"
import facebookIcon from "../Images/facebookIcon.png"
import linkedinIcon from "../Images/linkedinIcon.png"
import websiteIcon from "../Images/websiteIcon.png"
import twitterIcon from "../Images/twitterIcon.png"


function AdvisorProfile() {

    const [questionsData, setQuestionsData] = React.useState([]);
    const [advisorInfo, setAdvisorInfo] = React.useState({});

    
    useEffect(() => {
        const getData = async () =>
        {
            await fetch("https://finzeoy.000webhostapp.com/GetQuestionsData.php")
            .then(res => res.json())
            .then(data => setQuestionsData(data))
            
            await fetch("https://finzeoy.000webhostapp.com/GetAdvisorInfo.php?userId="+sessionStorage.getItem("userId")+"")
            .then(res => res.json())
            .then(data => setAdvisorInfo(data))

            await fetch("https://finzeoy.000webhostapp.com/GetUserData.php?userId="+sessionStorage.getItem("userId")+"")
            .then(res => res.json())
            .then(data => setAdvisorInfo(prevState => {
                return {...prevState,
                    "name": data.name,
                    "phno": data.phno,
                    "email": data.email}
                    
                }))
            }
            getData()
        }, [])
        
        const unansweredQuestionsData = questionsData.filter(question => {
            return question.answer === null
        })
        
        const unansweredQuestions = unansweredQuestionsData.map(question => {
            return <AdvisorQuestionComp key={question.quesId} quesId={question.quesId} question={question.ques} author={question.quesBy} />
        })
        
        function showModal() {
            var modal = document.getElementsByClassName('modal')[0];
            var span = document.getElementsByClassName('close')[0];
            
            modal.style.display = "block";
            span.onclick = function() {
                modal.style.display = "none";
            }
    }
    
    function showPostModal(event) {
        var modal = document.getElementById('postModal');
            var span = document.getElementsByClassName('postModalClose')[0];
            
            modal.style.display = "block";
            span.onclick = function() {
                modal.style.display = "none";
            }
    }

    return (
        <div className='APcontainer'>
            <button type="submit" className='postButton' onClick={showPostModal}>+</button>
            <div className="APleft">
                <button className='editProfileButton' onClick={showModal}><img src={editIcon} alt="Edit Icon"/></button>
                <AdvisorProfileEditModal nameP = {advisorInfo.name} ageP = {advisorInfo.age} professionP = {advisorInfo.profession} descP = {advisorInfo.desc} phnoP = {advisorInfo.phno} twitterP = {advisorInfo.twitter} emailP = {advisorInfo.email} facebookP = {advisorInfo.facebook} linkedinP = {advisorInfo.linkedin} websiteP = {advisorInfo.website} />
                {/* <AdvisorProfileEditModal advisorData = {advisorInfo}/> */}


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
                    
                    <div className ="APLTtags">
                        <div className="tags">{advisorInfo.phno}</div>
                        <div className="tags">{advisorInfo.email}</div>
                        <div className='advisorSocialMedia'>
                            <a href={advisorInfo.twitter} target = "_blank" ><img src={twitterIcon} className="advisorProfileSocialMediaIcons" alt="Twitter Id" /></a>
                            <a href={advisorInfo.facebook} target="_blank" ><img src={facebookIcon} className="advisorProfileSocialMediaIcons" alt="Twitter Id" /></a>
                        </div>
                        <div className='advisorSocialMedia'>
                            <a href={advisorInfo.linkedin} target = "_blank" ><img src={linkedinIcon} className="advisorProfileSocialMediaIcons" alt="Twitter Id" /></a>
                            <a href={advisorInfo.website} target = "_blank" ><img src={websiteIcon} className="advisorProfileSocialMediaIcons" alt="Twitter Id" /></a>
                        </div>
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