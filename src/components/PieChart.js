import React from "react";
import { Chart } from "react-google-charts";

export default function PieChart() {

    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
        ["Play", 1],
    ];

    const options = {
        pieSliceText: 'none',
        chartArea: {width: '100%', height:'100%'},
        legend: {
            position: 'right',
            alignment: 'center',
            textStyle: {bold: true},
        },
        backgroundColor: 'transparent',
        pieHole: 0.4,
    };

    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
        />
    )
}