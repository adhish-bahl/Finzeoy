import React from "react";
import Metric from "./Metric";
import Budget from "./Budget";
import "../styles/IncomeExpenseStyles.css";

export default function IncomeExpense() {
    return (
        <div className="tracker--container">
            <h2 className="tracker--head">Income/Expense</h2>
            <div className="tracker--metrics">
                <Metric metricName="Income" amount={20000} />
                <Metric metricName="Expense" amount={10000} />
            </div>
            <p>You have spent X% of your income</p>
            <Budget />
            <div>
                <button className="tracker--show--button">Show All Income</button>
                <button className="tracker--show--button">Show All Income</button>
            </div>
        </div>
    )
}