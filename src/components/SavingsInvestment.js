import React from "react";
import Metric from "./Metric";
import ProgressContainer from "./ProgressContainer";
import "../styles/IncomeExpenseStyles.css";

export default function IncomeExpense() {
    return (
        <div className="tracker--container">
            <h2 className="tracker--head">SAVINGS/INVESTMENTS</h2>
            <div className="tracker--metrics">
                <Metric metricName="SAVINGS" amount={20000} />
            </div>
            <ProgressContainer title="SAVINGS" />
            <div className="tracker--metrics">
                <Metric metricName="INVESTMENTS" amount={20000} />
            </div>
            <ProgressContainer title="INVESTMENTS" />
        </div>
    )
}