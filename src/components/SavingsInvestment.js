import React, { useEffect, useMemo, useState } from "react";
import Metric from "./Metric";
import ProgressContainer from "./ProgressContainer";
import "../styles/IncomeExpenseStyles.css";
import "../styles/ProgressContainerStyles.css";
import Progress from "./Progress";
import AddSavingModal from "./AddSavingModal";
import AddInvestmentModal from "./AddInvestmentModal";
import EditSavingModal from "./EditSavingModal";

export default function IncomeExpense() {

    const [savingsData, setSavingsData] = useState([])
    const [investmentData, setInvestmentData] = useState([])
    let investmentBreakdown = [];
    let totalSavings = 0, totalInvestments=0;


    function showModal(event) {
        var modals = document.getElementsByClassName("modal");
        var spans = document.getElementsByClassName("close");

        if (event.target.id == "addSavingImg") {
            modals[6].style.display = "block";
            spans[6].onclick = function () {
                modals[6].style.display = "none";
            }
        }
        else if (event.target.id == "addInvestmentImg") {
            modals[8].style.display = "block";
            spans[8].onclick = function () {
                modals[8].style.display = "none";
            }
        }
        else if (event.target.id == "editSavingImg") {
            modals[7].style.display = "block";
            spans[7].onclick = function () {
                modals[7].style.display = "none";
            }
        }
    }

    function calculateInvestmentBreakdown(investmentData) {
        const groupByCategory = investmentData.reduce((group, investment) => {
            const { category } = investment;
            group[category] = group[category] ?? [];
            group[category].push(investment.amt);
            return group;
        }, {});
        
        const dataSet = Object.entries(groupByCategory).map(category => {
            let sum = category[1].reduce((prevSum, currentInvestment) => {
                return prevSum + parseInt(currentInvestment)
            }, 0)
            category[1] = sum;
            return category;
        })

        dataSet.forEach(data => investmentBreakdown.push(data))
    } 

    useEffect(() => {
        const getData = async () => {
            await fetch("https://finzeoy.000webhostapp.com/GetSavingsData.php?userId="+sessionStorage.getItem("userId")+"")
            .then(res => res.json())
            .then(data => setSavingsData(data))
            
            await fetch("https://finzeoy.000webhostapp.com/GetInvestmentData.php?userId="+sessionStorage.getItem("userId")+"")
            .then(res => res.json())
            .then(data => setInvestmentData(data))
        }
        getData();
    }, [])

    useMemo(() => calculateInvestmentBreakdown(investmentData), [investmentData])

    return (
        <div className="tracker--container">
            <h2 className="tracker--head">SAVINGS/INVESTMENTS</h2>
            <div className="tracker--metrics">
                <Metric metricName="SAVINGS" amount={totalSavings = savingsData.length > 0 ? savingsData.reduce((total, currentSaving) => { return total + parseInt(currentSaving.amtSaved)},0) : 0} />
            </div>
            <div className="budget--container">
                <div className="budget--header">
                    <h3 className="budget--header--title">SAVINGS</h3>
                    <div className="budget--buttons">
                        <button className="budget--header--button"><img id="addSavingImg" onClick={showModal} src="./Images/add_icon.png"  className="budget--buttonImage"/></button>
                        <AddSavingModal />
                        <button className="budget--header--button"><img id="editSavingImg" onClick={showModal} src="./Images/edit_icon.png"  className="budget--buttonImage"/></button>
                        <EditSavingModal data={savingsData} />
                    </div>
                </div>
                {savingsData!==undefined ? savingsData.map((item) => {
                    return <Progress key={item.savingId} title={item.title} done={Math.round(item.amtSaved/item.goal*100)} amount={item.goal} />
                }) : 0}
            </div>
            <div className="tracker--metrics">
                <Metric metricName="INVESTMENTS" amount={totalInvestments = investmentData.length > 0 ? investmentData.reduce((total, currentInvestment) => { return total + parseInt(currentInvestment.amt)},0) : 0} />
            </div>
            <div className="budget--container">
                <div className="budget--header">
                    <h3 className="budget--header--title">INVESTMENTS</h3>
                    <div className="budget--buttons">
                        <button className="budget--header--button"><img id="addInvestmentImg" onClick={showModal} src="./Images/add_icon.png" className="budget--buttonImage"/></button>
                        <AddInvestmentModal />
                    </div>
                </div>
                {investmentData!==undefined ? investmentData.map((item) => {
                    return <div style={{display: "flex", justifyContent: "space-between"}}><h4>{item.title}</h4><h5>Rs. {item.amt}</h5></div>
                }) : 0}
            </div>
        </div>
    )
}