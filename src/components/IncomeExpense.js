import React, { useEffect, useMemo, useState } from "react";
import Metric from "./Metric";
import "../styles/ProgressContainerStyles.css";
import Progress from "./Progress";
import "../styles/IncomeExpenseStyles.css";
import TransactionModal from "./TransactionModal";
import PieChart from "./PieChart";
import AddIncomeModal from "./AddIncomeModal";
import AddExpenseModal from "./AddExpenseModal";
import AddBudgetModal from "./AddBudgetModal";
import EditBudgetModal from "./EditBudgetModal"

export default function IncomeExpense() {

    const [budgetData, setBudgetData] = useState([]);
    const [expenseData, setExpenseData] = useState([]);
    const [incomeData, setIncomeData] = useState([]);
    let expenseBreakdown = [["Category", "Amount"]];
    let incomeBreakdown = [["Category", "Amount"]];
    let expenseTotal = 0, incomeTotal = 0;
    
    function showModal(event) {
        var modals = document.getElementsByClassName("modal");
        var spans = document.getElementsByClassName("close");

        if (event.target.id == "addIncomeBtn") {
            modals[0].style.display = "block";
            spans[0].onclick = function() {
                modals[0].style.display = "none";
            }
        }
        else if (event.target.id == "addExpenseBtn") {
            modals[1].style.display = "block";
            spans[1].onclick = function() {
                modals[1].style.display = "none";
            }
        }
        else if (event.target.id == "addBudgetBtnImg") {
            modals[2].style.display = "block";
            spans[2].onclick = function() {
                modals[2].style.display = "none";
            }
        }
        else if (event.target.id == "incomeBtn") {
            modals[4].style.display = "block";
            spans[4].onclick = function () {
                modals[4].style.display = "none";
            }
        }
        else if (event.target.id == "expenseBtn") {
            modals[5].style.display = "block";
            spans[5].onclick = function () {
                modals[5].style.display = "none";
            }
        }
        else if (event.target.id == "editBudgetImg") {
            modals[3].style.display = "block";
            spans[3].onclick = function () {
                modals[3].style.display = "none";
            }
        }
    }
    
    function calculateExpenseBreakdown(expensesData) {
        const groupByCategory = expensesData.reduce((group, expense) => {
            const { category } = expense;
            group[category] = group[category] ?? [];
            group[category].push(expense.amount);
            return group;
        }, {});
        
        const dataSet = Object.entries(groupByCategory).map(category => {
            let sum = category[1].reduce((prevSum, currentExpense) => {
                return prevSum + parseInt(currentExpense)
            }, 0)
            category[1] = sum;
            return category;
        })
        
        dataSet.forEach(data => expenseBreakdown.push(data))
    }
    
    function calculateIncomeBreakdown(incomesData) {
        var incomeBreakdown = [["Category", "Amount"]];
        const groupByCategory = incomesData.reduce((group, income) => {
            const { category } = income;
            group[category] = group[category] ?? [];
            group[category].push(income.amount);
            return group;
        }, {});
        
        const dataSet = Object.entries(groupByCategory).map(category => {
            let sum = category[1].reduce((prevSum, currentIncome) => {
                return prevSum + parseInt(currentIncome)
            }, 0)
            category[1] = sum;
            return category;
        })

        dataSet.forEach(data => incomeBreakdown.push(data))

        return incomeBreakdown;
    }   

    useEffect(() => {
        const getData = async () => {
            await fetch("https://finzeoy.000webhostapp.com/GetBudgetData.php?userId="+sessionStorage.getItem("userId")+"")
            .then(res => res.json())
            .then(data => setBudgetData(data))

            await fetch("https://finzeoy.000webhostapp.com/GetIncomeData.php?userId="+sessionStorage.getItem("userId")+"")
            .then(res => res.json())
            .then(data => setIncomeData(data))
            
            await fetch("https://finzeoy.000webhostapp.com/GetExpenseData.php?userId="+sessionStorage.getItem("userId")+"")
            .then(res => res.json())
            .then(data => setExpenseData(data))
        }
        getData();
    }, [])
    
    useMemo(() => calculateExpenseBreakdown(expenseData), [expenseData])

    return (
        <div className="tracker--container">
            <h2 className="tracker--head">INCOME/EXPENSE</h2>
            <div className="tracker--expensePie">
                <h4>Expense breakdown</h4>
                <PieChart data={expenseBreakdown} />
            </div>
            <div className="tracker--metrics">
                <Metric metricName="INCOME" amount={incomeTotal = incomeData.length > 0 ? incomeData.reduce((total, currentIncome) => { return total + parseInt(currentIncome.amount)},0) : 0} />
                <Metric metricName="EXPENSE" amount={expenseTotal = expenseData.length > 0 ? expenseData.reduce((total, currentExpense) => { return total + parseInt(currentExpense.amount)},0) : 0} />
            </div>
            <p className="tracker--incomePercentage">You have spent {Math.round((incomeTotal - expenseTotal)/incomeTotal*100)}% of your income</p>

            <div>
                <button id="addIncomeBtn" className="tracker--show--button" onClick={showModal}>Add Incomes</button>
                <AddIncomeModal />
                <button id="addExpenseBtn" className="tracker--show--button" onClick={showModal}>Add Expenses</button>
                <AddExpenseModal />

            </div>

            <div className="budget--container">
                <div className="budget--header">
                    <h3 className="budget--header--title">BUDGET</h3>
                    <div className="budget--buttons">
                        <button id="addBudgetBtn" className="budget--header--button" onClick={showModal}><img id="addBudgetBtnImg" src="./Images/add_icon.png" className="budget--buttonImage" onClick={showModal} /></button>
                        <AddBudgetModal />
                        <button className="budget--header--button"><img id="editBudgetImg" onClick={showModal} src="./Images/edit_icon.png" className="budget--buttonImage" /></button>
                        <EditBudgetModal />
                    </div>
                </div>
                {budgetData!==undefined && expenseBreakdown!==undefined ? budgetData.map((item) => {
                    const {[item.category] : usedAmount} = Object.fromEntries(expenseBreakdown);
                    return <Progress key={item.budgetid} title={item.category} done={usedAmount !== undefined ? Math.round(usedAmount/item.amount*100) : 0} amount={item.amount} />
                }) : 0}
            </div>
            <div>
                <button id="incomeBtn" className="tracker--show--button" onClick={showModal}>Show All Incomes</button>
                <TransactionModal key="incomeModal" title="Income" data={incomeData} breakdown={incomeBreakdown=calculateIncomeBreakdown(incomeData)} />
                <button id="expenseBtn" className="tracker--show--button" onClick={showModal}>Show All Expenses</button>
                <TransactionModal key="expenseModal" title="Expense" data={expenseData} breakdown={expenseBreakdown} />
            </div>
            
        </div>
    )
}