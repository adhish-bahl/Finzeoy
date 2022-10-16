import React from "react";
import "../styles/TransactionModalStyles.css";

export default function ArticleModal() {
    return (
        <div id="myModal" className="modal">
            <div className="modal--content">
                <div className="modal--header">
                    <span className="close">&times;</span>
                    <h2>Title</h2>
                </div>
                <div className="modal--mainContent">
                    <h3>Content</h3>
                </div>
            </div>
        </div>
    )
}