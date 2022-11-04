import React, {useState} from "react";
import IncomeExpense from "./IncomeExpense";
import SavingsInvestment from "./SavingsInvestment";
import '../styles/GeneralUserHomeStyles.css';

export default function GeneralUserHomePage() {

    return (
        <div className="general--homePage">
                <div className="main--content">
                    <IncomeExpense />
                    <SavingsInvestment />
                </div>
        </div>
    )
}