import React from 'react'
import ReactApexChart from 'react-apexcharts'

const BarGraph = ({ value, maxValue, color }) => {
    const options = {
        chart: {
            type: 'bar',
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '50%',
                borderRadius: 5,
                distributed: true,
               
            },
        },
        tooltip: {
            enabled: false,
        },
        xaxis: {
            max: maxValue,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        colors: [color],
    };

    const series = [
        {
            data: [value],
        },
    ];

    return <ReactApexChart options={options} series={series} type="bar" height={20} />;
}

export default BarGraph
