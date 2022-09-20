import React, { useState } from "react";
import Metric from "./Metric";
import ProgressContainer from "./ProgressContainer";
import "../styles/IncomeExpenseStyles.css";
import TransactionModal from "./TransactionModal";

export default function IncomeExpense() {

    function showModal() {
        var modal = document.getElementById("myModal");

        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    return (
        <div className="tracker--container">
            <h2 className="tracker--head">INCOME/EXPENSE</h2>
            <div className="tracker--metrics">
                <Metric metricName="INCOME" amount={20000} />
                <Metric metricName="EXPENSE" amount={10000} />
            </div>
            <p className="tracker--incomePercentage">You have spent 50% of your income</p>
            <ProgressContainer title="BUDGET" />
            <div>
                <button className="tracker--show--button" onClick={showModal}>Show All Incomes</button>
                <TransactionModal />
                <button className="tracker--show--button" onClick={showModal}>Show All Expenses</button>
                <TransactionModal />
            </div>
        </div>
    )
}