import React from 'react';
import './LinearChart.css';
import Chart from "react-apexcharts";


let tempvar = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
};

function LinearChart() {
    return (
        <div className="LinearChart">
            <Chart
              options={tempvar.options}
              series={tempvar.series}
              type="bar"
              width="60%"
              height="150px"
            />
        </div>
    )
}

export default LinearChart
