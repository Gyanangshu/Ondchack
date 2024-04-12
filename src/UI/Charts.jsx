import React, { useState } from 'react';
import Chart from 'react-apexcharts'

const Charts = () => {
  const [options] = useState({
    chart: {
      type: 'line', 
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], 
    },
    colors: ['#7F56D9', '#F44336'], 
  });

  const [series] = useState([
    {
      name: 'Series 1',
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 140, 110, 70], 
    },
    {
      name: 'Series 2', 
      data: [20, 35, 40, 45, 50, 60, 65, 80, 100, 120, 100, 80], 
    },
  ]);

return (
    <Chart options={options} series={series} type="line" height={250} width={"100%"} />
);
}

export default Charts
