import React from 'react';
import './LinearChart.css';
import Chart from "react-apexcharts";
let tempvar = {
  options: {
    chart: {

      id: "basic-bar"
    },
    fill: {
      colors: ['#764ee3']
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999 ,2000 ,2001 , 2002, 2003, 2004 , 2005]
    },
    
    
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91 ,20 , 80 , 60 , 45 , 85 , 100]
    }
  ]
};
let tempvar2 = {
  options: {
    chart: {
    toolbar : {
        show:false
    },
      id: "basic-bar"
    },

    xaxis: {
      categories: [1998, 1999 ,2000 ,2001 , 2002, 2003, 2004 , 2005]
    }
  },
  series: [
    {
      name: "series-1",
      data: [91 ,20 , 80 , 60 , 45 , 85 , 100]
    }
  ]
};

function LinearChart(props) {
    
    return (
        <div>
          <div className="LinearChart1">
              <Chart
                options={tempvar.options}
                series={tempvar.series}
                type={props.type}
                width="103.2%"
                height="150px"
                className="LinearChart_chart"
              />
          </div>
          <div className="LinearChart2">
              <Chart
                options={tempvar2.options}
                series={tempvar2.series}
                type={props.type}
                width="106.5%"
                height="150px"
                className="LinearChart_chart2"
              />
          </div>

        </div>
    )
}

export default LinearChart
