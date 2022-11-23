import React, { useState } from "react";
import "../styles/TransactionDetailsStyles.css";

export default function TransactionDetails(props) {

    return (    
        <table className="transaction--table">
            <tr>
                <th className="transaction--data transaction--head">Transaction Id</th>
                <th className="transaction--data transaction--head">Date</th>
                <th className="transaction--data transaction--head">Title</th>
                <th className="transaction--data transaction--head">Category</th>
                <th className="transaction--data transaction--head">Amount</th>
            </tr>
            {props.data.map(transaction => {
                return <tr><td className="transaction--data">{transaction.transactionId}</td><td className="transaction--data">{transaction.date}</td><td className="transaction--data">{transaction.title}</td><td className="transaction--data">{transaction.category}</td><td className="transaction--data">{transaction.amount}</td></tr>
            })}
        </table>
    )
}