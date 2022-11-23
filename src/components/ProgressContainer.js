import React, {useState} from "react";
import "../styles/ProgressContainerStyles.css";
import Progress from "./Progress";

export default function ProgressContainer(props) { 
    return (
        <div className="budget--container">
            <div className="budget--header">
                <h3 className="budget--header--title">{props.title}</h3>
                <div className="budget--buttons">
                    <button className="budget--header--button"><img src="./Images/add_icon.png" className="budget--buttonImage"/></button>
                    <button className="budget--header--button"><img src="./Images/edit_icon.png" className="budget--buttonImage"/></button>
                </div>
            </div>
            {props.data!==undefined && props.usedData!==undefined ? props.data.map((item) => {
                const {[item.category] : usedAmount} = props.usedData;
                return <Progress key={item.budgetid} title={item.category} done={usedAmount !== undefined ? Math.round(usedAmount/item.amount*100) : 0} amount={item.amount} />
            }) : 0}
        </div>
    )
}