import React from "react";
import "../styles/TransactionModalStyles.css";

export default function ArticleModal({ question, askedBy, quesId }) {

    const [errorText, setErrorText] = React.useState()

    const [answer, setAnswer] = React.useState("")

    function handleChange(event) {
        setErrorText("")
        const {value} = event.target;
        setAnswer(value);
    }

    async function submitAnswer() {
        if(answer == "") {
            setErrorText("Please enter an answer")
        }
        else {
            await fetch("https://finzeoy.000webhostapp.com/SaveAnswer.php?ansBy="+sessionStorage.getItem("userId")+"&ans="+answer+"&quesId="+quesId+"")
            .then(res => res.json())
            .then(data => data.status === "success" ? setErrorText("Answer posted successfully") : setErrorText("Answer could not be posted"))

            window.location.reload()
        }
    }

    return (
        <div id="myModal" className="modal">
            <div className="modal--content">
                <div className="modal--header">
                    <span className="close">&times;</span>
                    <h2 className="questionInAdvisorModal">{question}</h2>
                    <h5 className="questionAskedByInModal" style={{paddingLeft: "30px", marginTop: "0px", textAlign: "left", fontWeight: "500"}}>Asked by {askedBy}</h5>
                </div>
                <div className="modal--mainContent">
                    <form>
                        <textarea name="answerByAdvisor" id="answerByAdvisor" style={{ width: "100%", height: "20rem", textAlign: "start", padding: "10px", fontSize: "1.2rem", resize: "none" }} onChange={handleChange} />
                        <label className="loginErrorDislayLabel"> {errorText} </label>
                        <button style={{marginTop: "30px", width: "100px", padding: "5px", fontWeight: "bold" }} onClick={submitAnswer} >Answer</button>
                    </form>
                </div>
            </div>
        </div>
    )
}