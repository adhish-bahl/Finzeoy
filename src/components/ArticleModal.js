import React from "react";
import "../styles/TransactionModalStyles.css";

export default function ArticleModal(props) {
    return (
        <div id="myModal" className="modal">
            <div className="modal--content">
                <div className="modal--header">
                    <span className="close">&times;</span>
                    <h2>{props.title}</h2>
                </div>
                <div className="modal--mainContent">
                    <p style={{textAlign: "justify"}} >{props.content}</p>
                </div>
            </div>
        </div>
    )
}