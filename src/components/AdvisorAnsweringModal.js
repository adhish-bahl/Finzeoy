import React from "react";
import "../styles/TransactionModalStyles.css";

export default function ArticleModal({ question, askedBy }) {
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
                        <textarea name="answerByAdvisor" id="answerByAdvisor" style={{ width: "100%", height: "20rem", textAlign: "start", padding: "10px", fontSize: "1.2rem", resize: "none" }} />
                    </form>
                </div>
            </div>
        </div>
    )
}