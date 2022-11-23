import React from "react";
import "../styles/TransactionModalStyles.css";
import PieChart from "./PieChart";
import TransactionDetails from "./TransactionDetails";

export default function TransactionModal(props) {
    return (
        <div id="myModal" className="modal">
            <div className="modal--content">
                <div className="modal--header">
                    <span className="close">&times;</span>
                    <h1>{props.title}</h1>
                </div>
                <div className="modal--pieChart">
                    <h3>Division of {props.title} by categories</h3>
                    <PieChart data={props.breakdown} />
                </div>
                <div className="modal--mainContent">
                    <h3>All {props.title}s</h3>
                    <TransactionDetails data={props.data} />
                </div>
            </div>
        </div>
    )
}