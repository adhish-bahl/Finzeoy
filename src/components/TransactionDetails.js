import React, { useState } from "react";
import "../styles/TransactionDetailsStyles.css";

export default function TransactionDetails() {

    const [incomeData, setIncomeData] = useState([
        {
            'SNo': 1,
            'Date': '12-02-2022',
            'Title': 'Salary',
            'Category': 'Something',
            'Amount': 40000
        },
        {
            'SNo': 2,
            'Date': '12-02-2022',
            'Title': 'Commission',
            'Category': 'Something',
            'Amount': 5000
        },
        {
            'SNo': 3,
            'Date': '12-02-2022',
            'Title': 'Salary',
            'Category': 'Something',
            'Amount': 40000
        },
        {
            'SNo': 1,
            'Date': '12-02-2020',
            'Title': 'Salary',
            'Category': 'Something',
            'Amount': 40000
        },
        {
            'SNo': 1,
            'Date': '12-02-2020',
            'Title': 'Salary',
            'Category': 'Something',
            'Amount': 40000
        }
    ])

    return (    
        <table className="transaction--table">
            <tr>
                <th className="transaction--data transaction--head">S.No</th>
                <th className="transaction--data transaction--head">Date</th>
                <th className="transaction--data transaction--head">Title</th>
                <th className="transaction--data transaction--head">Category</th>
                <th className="transaction--data transaction--head">Amount</th>
            </tr>
            {incomeData.map(income => {
                return <tr><td className="transaction--data">{income.SNo}</td><td className="transaction--data">{income.Date}</td><td className="transaction--data">{income.Title}</td><td className="transaction--data">{income.Category}</td><td className="transaction--data">{income.Amount}</td></tr>
            })}
        </table>
    )
}