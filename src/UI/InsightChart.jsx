import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";

const InsightChart = ({ seriesName, seriesData }) => {
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
    grid: {
      show: false,
    },
    colors: ["#4285F4"],
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
        height={400}
      />
    </div>
  );
}

export default InsightChart;
