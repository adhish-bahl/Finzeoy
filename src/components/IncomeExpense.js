import React, { useState } from "react";
import Metric from "./Metric";
import Budget from "./Budget";
import "../styles/IncomeExpenseStyles.css";

export default function IncomeExpense() {

    return (
        <div className="tracker--container">
            <h2 className="tracker--head">INCOME/EXPENSE</h2>
            <div className="tracker--metrics">
                <Metric metricName="INCOME" amount={20000} />
                <Metric metricName="EXPENSE" amount={10000} />
            </div>
            <p className="tracker--incomePercentage">You have spent 50% of your income</p>
            <Budget />
            <div>
                <button className="tracker--show--button">Show All Incomes</button>
                <button className="tracker--show--button">Show All Expenses</button>
            </div>
        </div>
    )
}