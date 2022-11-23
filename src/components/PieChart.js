import React from "react";
import { Chart } from "react-google-charts";

export default function PieChart(props) {

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
            data={props.data}
            options={options}
        />
    )
}