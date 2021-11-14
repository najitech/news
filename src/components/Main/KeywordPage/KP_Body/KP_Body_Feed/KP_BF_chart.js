import React ,{useState} from 'react'
import './KP_BF_chart.css'
import Chart from 'react-apexcharts'

function KP_BF_chart() {
    const [KP_BF_Chart, setKP_BF_Chart] =useState({
          series: [{
              name: 'Inflation',
              data: [4,8,2,20,14,18,5,32,12,24,3,6,12,8,45,22,7,32,13,1,7,3,24]
            }],
            options: {
              chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: true,
                    tools: {
                      download: false
                    }
                  }
              },
              fill: {
                type: "gradient",
                color: [],
                gradient: {
                    shade: 'light',
                    type: "vertical",
                    shadeIntensity: 0.4,
                    gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 0.8,
                    stops: [0, 100],
                    colorStops: []
                  }
              },
              legend : {
                  show :true,
              },
              plotOptions: {
                bar: {
                  borderRadius: 10,
                  dataLabels: {
                    position: 'top', // top, center, bottom
                  },
                }
              },
              dataLabels: {
                enabled: true,
                formatter: function (val) {
                  return val;
                },
                offsetY: -20,
                style: {
                  fontSize: '12px',
                  colors: ["#304758"]
                }
              },
              
              xaxis: {
                categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                position: 'top',
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                },
                crosshairs: {
                  fill: {
                    type: 'gradient',
                    gradient: {
                      colorFrom: '#D8E3F0',
                      colorTo: '#BED1E6',
                      stops: [0, 100],
                      opacityFrom: 0.4,
                      opacityTo: 0.5,
                    }
                  }
                },
                tooltip: {
                  enabled: true,
                }
              },
              yaxis: {
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false,
                },
                labels: {
                  show: false,
                  formatter: function (val) {
                    return val + "%";
                  }
                }
              
              },
            },
          
          })

    return (
        <div className="KP_BF_chart">
            <Chart options={KP_BF_Chart.options} series={KP_BF_Chart.series} type="bar" height={200} width={"100%"} />
        </div>
    )
}

export default KP_BF_chart
