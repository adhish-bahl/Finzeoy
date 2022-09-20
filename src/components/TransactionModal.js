import React from "react";
import "../styles/TransactionModalStyles.css";
import PieChart from "./PieChart";

export default function TransactionModal(props) {
    return (
        <div id="myModal" className="modal">
            <div className="modal--content">
                <div className="modal--header">
                    <span className="close">&times;</span>
                    <h1>Income</h1>
                </div>
                <div className="modal--pieChart">
                    <h3>Division of Income by categories</h3>
                    <PieChart />
                </div>
                <div className="modal--mainContent">
                    <p>Some text here</p>
                </div>
                <div className="modal--footer">
                    <h6>Footer</h6>
                </div>
            </div>
        </div>
    )
}