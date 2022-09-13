import React, {useState} from "react";
import "../styles/BudgetStyles.css";
import Progress from "./Progress";

export default function Budget() {

    const [budgetItems, setBudgetItems] = useState([
        {
            "Title": "Food and Groceries", 
            "Amount": 20000
        }, 
        {
            "Title": "Miscellaneous", 
            "Amount": 5000
        },
        {
            "Title": "Rent", 
            "Amount": 10000
        }, 
        {
            "Title": "Medicine", 
            "Amount": 1500
        }, 
        {
            "Title": "Electricity Bill", 
            "Amount": 1000
        }
    ])

    return (
        <div className="budget--container">
            <div className="budget--header">
                <h3 className="budget--header--title">BUDGET</h3>
                <div className="budget--buttons">
                    <button className="budget--header--button"><img src="./Images/add_icon.png" className="budget--buttonImage"/></button>
                    <button className="budget--header--button"><img src="./Images/edit_icon.png" className="budget--buttonImage"/></button>
                </div>
            </div>
            {budgetItems.map(item => {
                return <Progress title={item.Title} done={45} amount={item.Amount} />
            })}
        </div>
    )
}