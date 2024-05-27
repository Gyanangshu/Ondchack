import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts';

const AreaGraph = ({ seriesName, seriesData }) => {
    const [chartOptions, setChartOptions] = useState({
        chart: { 
            type: 'area',
            height: 350,
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        grid: {
            show: false,
        },
        // yaxis: {
        //     title: {
        //         text: "Flights",
        //     },
        //     labels: {
        //         show: false
        //     },
        //     style: {
        //         fontWeight: 400
        //     }
        // },
        xaxis: {
            // title: { text: "Month: April - May" },
            categories: ["week 1", "week 2", "week 3", "week 4", "week 5", "week 6", "week 7", "week 8"],
            labels: {
                show: false
            }
        },
        // xaxis: {
        //     labels: {
        //         show: false
        //       }
        // },

        yaxis: {
            labels: {
                show: false
              }
        },

        tooltip: {
            enabled: true,
        },
    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: seriesName,
            data: seriesData,
        }
    ]);

    useEffect(() => {
        setChartSeries([
            {
                name: seriesName,
                data: seriesData,
            }
        ]);
    }, [seriesData, seriesName]);

    return (
        <div>
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="area"
                height={120}
                width={200}
            />
        </div>
    );
}

export default AreaGraph
