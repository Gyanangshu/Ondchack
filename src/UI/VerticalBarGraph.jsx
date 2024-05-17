import React from 'react';
import ReactApexChart from 'react-apexcharts';

const VerticalBarGraph = ({ data, colors  }) => {
    const options = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false
              }
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                horizontal: false,
            },
        },
        xaxis: {
            categories: ['Searches', 'Add to Carts', 'Purchases'],
            labels: {
                show: true,
                style: {
                    fontSize: '16px', 
                    color: '#4a4948',
                  },
            },
        },
        yaxis: {
            labels: {
                show: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            show: false,
        },
        colors: colors ,
    };

    const series = [
        {
            name: 'count',
            data: data,
        },
    ];

    return (
        <ReactApexChart options={options} series={series} type="bar" height={350} />
    );
}

export default VerticalBarGraph
