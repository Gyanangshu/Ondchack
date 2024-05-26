import React, { useState } from 'react'
import Chart from 'react-apexcharts';

const AreaGraph = () => {
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
        yaxis: {
            labels: {
                show: false
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: false
            },
            categories: [
                '2022-01-01T00:00:00.000Z',
                '2022-01-02T00:00:00.000Z',
                '2022-01-03T00:00:00.000Z',
                '2022-01-04T00:00:00.000Z',
                '2022-01-05T00:00:00.000Z',
                '2022-01-06T00:00:00.000Z',
                '2022-01-07T00:00:00.000Z',
            ],
        },
        tooltip: {
            enabled: false,
        },

    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: 'Series 1',
            data: [31, 40, 28, 51, 42, 109, 100],
        },
    ]);

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
