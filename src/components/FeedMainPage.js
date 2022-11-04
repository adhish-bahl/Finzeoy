import React, {useState} from "react";
import PageHeader from "./PageHeader";
import IncomeExpense from "./IncomeExpense";
import SavingsInvestment from "./SavingsInvestment";
import '../styles/GeneralUserHomeStyles.css';
import Feed from "./Feed";

export default function GeneralUserHomePage() {

    return (
        <div className="general--homePage">
                <Feed />
        </div>
    )
}