import React, { useEffect, useState } from 'react'
import "../styles/DiscussionBox.css"

function DiscussionBox({question, author, answerBy, answer}) {

    const [answeredBy, setAnsweredBy] = useState("");

    useEffect(() => {
        fetch("https://localhost/Finzeoy/ServerFiles/GetUserData.php?userId="+answerBy+"")
        .then(res => res.json())
        .then(data => setAnsweredBy(data.name))
    }, [])

    return (
        <div className='DiscussionBoxContainer'>
            <div className="DBquestion">
                {question}
            </div>
            <div className="DBauthor">
                {author}
            </div>
            <div className="DBanswerBy">
                <b>Answered by: </b> {answeredBy}
            </div>
            <div className="DBanswer">
                {answer}
            </div>
        </div>
    )
}

export default DiscussionBox