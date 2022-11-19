import React, { useEffect, useState } from "react";
import Metric from "./Metric";
import ProgressContainer from "./ProgressContainer";
import "../styles/IncomeExpenseStyles.css";
import TransactionModal from "./TransactionModal";
import PieChart from "./PieChart";

export default function IncomeExpense() {

    const [budgetData, setBudgetData] = useState([]);
    const [expenseData, setExpenseData] = useState([]);
    const [incomeData, setIncomeData] = useState([]);

    function showModal(event) {
        var modals = document.getElementsByClassName("modal");
        var spans = document.getElementsByClassName("close");

        if(event.target.id == "incomeBtn") {
            modals[0].style.display = "block";
            spans[0].onclick = function() {
                modals[0].style.display = "none";
            }
        }
        else {
            modals[1].style.display = "block";
            spans[1].onclick = function() {
                modals[1].style.display = "none";
            }
        }
    }

    useEffect(() => {
        fetch("https://finzeoy.000webhostapp.com/GetBudgetData.php?userId = "+sessionStorage.getItem("userId")+"")
        .then(res => res.json())
        .then(data => setBudgetData(data))

        fetch("https://finzeoy.000webhostapp.com/GetExpenseData.php?userId = "+sessionStorage.getItem("userId")+"")
        .then(res => res.json())
        .then(data => setExpenseData(data))

        fetch("https://finzeoy.000webhostapp.com/GetIncomeData.php?userId = "+sessionStorage.getItem("userId")+"")
        .then(res => res.json())
        .then(data => setIncomeData(data))
    })

    return (
        <div className="tracker--container">
            <h2 className="tracker--head">INCOME/EXPENSE</h2>
            <div className="tracker--expensePie">
                <h4>Expense breakdown</h4>
                <PieChart />
            </div>
            <div className="tracker--metrics">
                <Metric metricName="INCOME" amount={20000} />
                <Metric metricName="EXPENSE" amount={10000} />
            </div>
            <p className="tracker--incomePercentage">You have spent 50% of your income</p>
            <ProgressContainer title="BUDGET" />
            <div>
                <button id="incomeBtn" className="tracker--show--button" onClick={showModal}>Show All Incomes</button>
                <TransactionModal key="incomeModal" title="Income" />
                <button id="expenseBtn" className="tracker--show--button" onClick={showModal}>Show All Expenses</button>
                <TransactionModal key="expenseModal" title="Expense" />
            </div>
        </div>
    )
}