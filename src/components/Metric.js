import React from "react";
import '../styles/MetricStyles.css';

export default function Metric(props) {
    return (
        <div className="metric--container">
            <h4 className="metric--head">{props.metricName}</h4>
            <h5 className="metric--amount">Rs. {props.amount}</h5>
        </div>
    )
}