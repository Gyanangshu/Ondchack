import React, {useState} from 'react';
import Chart from "react-apexcharts";

const InsightChart = () => {
    const [chart, setChart] = useState({
        options: {
            chart: {
                id: "basic-bar",
                toolbar: {
                    show: false
                  }
            },
            dataLabels: {
                enabled: false,
            },
            grid: {
                show: false,
            },
            colors: ["#4285F4", "#7CD4FD", '#53389E'],
            xaxis: {
                title: { text: "Month" },
                categories: ["Jan", "Mar", "May", "Jul", "Sept", "Nov", "Dec"],
                labels: {
                    show: true
                }
            },

            yaxis: {
                title: {
                    text: "Active Users",
                },
                labels: {
                    show: false
                },
                style: {
                    fontWeight: 400
                }
            },
        },
        series: [
            {
                name: "Series 1",
                data: [5, 1, 2, 3, 8, 5, 10],
            },

            {
                name: "Series 2",
                data: [8, 1, 5, 7, 4, 1, 6],
            },

            {
                name: "Series 3",
                data: [2, 8, 4, 6, 5, 7, 3],
            },
        ],
    });
    return (
        <div>
            <Chart
                options={chart.options}
                series={chart.series}
                type="area"
                height={400}
            />
        </div>
    )
}

export default InsightChart
