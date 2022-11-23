import React, { useEffect, useState } from "react";
import Metric from "./Metric";
import ProgressContainer from "./ProgressContainer";
import "../styles/IncomeExpenseStyles.css";

export default function IncomeExpense() {

    const [savingsData, setSavingsData] = useState([])
    const [investmentData, setInvestmentData] = useState([])
    let totalSavings = 0;

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

    console.log(savingsData)

    return (
        <div className="tracker--container">
            <h2 className="tracker--head">SAVINGS/INVESTMENTS</h2>
            <div className="tracker--metrics">
                <Metric metricName="SAVINGS" amount={totalSavings = savingsData.length > 0 ? savingsData.reduce((total, currentSaving) => { return total + parseInt(currentSaving.amtSaved)},0) : 0} />
            </div>
            <ProgressContainer title="SAVINGS" data={savingsData} />
            <div className="tracker--metrics">
                <Metric metricName="INVESTMENTS" amount={20000} />
            </div>
            <ProgressContainer title="INVESTMENTS" />
        </div>
    )
}