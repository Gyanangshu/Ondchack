import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

const PincodeChart = ({ series }) => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#4285F4", "#00E396", "#693d3d"],
 
    grid: {
      show: false,
    }, 
    stroke: {
        curve: 'smooth'
    },
  
    xaxis: {
      title: { text: "Month: April - May" },
      categories: ["week 1", "week 2", "week 3", "week 4", "week 5", "week 6", "week 7", "week 8"],
      labels: {
        show: true
      }
    },
    yaxis: {
      title: {
        text: "Flights",
      },
      labels: {
        show: false
      },
      style: {
        fontWeight: 400
      }
    },
  });

  useEffect(() => {
    setChartOptions(prev => ({
      ...prev,
      series: series,
    }));
  }, [series]);

  return (
    <div>
      <Chart
        options={chartOptions}
        series={series}
        type="line"
        height={400}
      />
    </div>
  );
}

export default PincodeChart;
