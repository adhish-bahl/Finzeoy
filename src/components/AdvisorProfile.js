import React, {useEffect} from 'react'
import "../styles/AdvisorProfile.css"
import AdvisorQuestionComp from './AdvisorQuestionComp'


function AdvisorProfile(props) {

    const [questionsData, setQuestionsData] = React.useState([]);
    const [advisorInfo, setAdvisorInfo] = React.useState({});

    useEffect(() => {
        fetch("https://finzeoy.000webhostapp.com/GetQuestionsData.php")
        .then(res => res.json())
        .then(data => setQuestionsData(data))

        fetch("https://finzeoy.000webhostapp.com/GetAdvisorInfo.php?userId="+props.userId+"")
        .then(res => res.json())
        .then(data => setAdvisorInfo(prevState => {
            return {...prevState,
                    "name": data.name,
                    "email": data.email,
                    "phno": data.phno}
        }))

        fetch("https://finzeoy.000webhostapp.com/GetUserData.php?userId="+props.userId+"")
    }, [])

    const unansweredQuestionsData = questionsData.filter(question => {
        return question.answer.length === 0
    })

    const unansweredQuestions = unansweredQuestionsData.map(question => {
        return <AdvisorQuestionComp question={question.ques} author={question.quesBy} />
    })

    return (
        <div className='APcontainer'>
            <div className="APleft">

                <div className="APLone">
                    <div className="APLOleft">
                        <img className='APLOLprofileimg' src="./Images/default_logo.png" alt="profileImg" />
                    </div>

                    <div className="APLOright">
                        <div className="APadname">{advisorInfo.name}</div>
                        <div className="APadage">{advisorInfo.age}</div>
                        <div className="APadprofession">{advisorInfo.profession}</div>
                    </div>
                </div>

                <div className="APLtwo">
                    <h1 className="APheading">{advisorInfo.desc}</h1>
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
        </div>
    )
}

export default AdvisorProfile