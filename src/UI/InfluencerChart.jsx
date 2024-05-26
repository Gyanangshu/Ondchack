import React, {useState} from 'react'
import Chart from "react-apexcharts";

const InfluencerChart = () => {
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
            colors: ["#4285F4", "#7CD4FD"],
            xaxis: {
                title: { text: "Month" },
                categories: ["Jan", "Mar", "May", "Jul", "Sept", "Nov", "Dec"],
                labels: {
                    show: false
                }
            },

            yaxis: {
                title: {
                    text: "Active Users",
                },
                labels: {
                    show: false
                }
            },
        },
        series: [
            {
                name: "Links Opened",
                data: [0, 1, 0, 3, 0, 5, 0],
            },

            {
                name: "Units Sold",
                data: [0, 0, 2, 0, 0, 1, 0],
            },
        ],
    });
    return (
        <div>
            <Chart
                options={chart.options}
                series={chart.series}
                type="area"
            />
        </div>
    )
}

export default InfluencerChart
