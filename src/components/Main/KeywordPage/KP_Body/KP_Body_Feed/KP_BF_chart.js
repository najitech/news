import React ,{useState} from 'react'
import './KP_BF_chart.css'
import Chart from 'react-apexcharts'

function KP_BF_chart() {
    const [KP_BF_Chart, setKP_BF_Chart] =useState({
          series: [{
              name: 'Inflation',
              data: [4,8,2,20,14,18,5,32,12,24,3,6,12,8,45,22,7,32,13,1,7,3,12,21,6]
            }],
            options: {
              tooltip: {

                custom: function({ series, seriesIndex, dataPointIndex, w }) {
                  return (
                    '<div class="arrow_box">' +
                    "<span className='KP_chartNumberTwitter'>" +
                    "Twitter" +
                    ": " +
                    "1.234k" +
                    "</span>" +
                    "<span className='KP_chartNumberTelegram'>" +
                    "Telegram" +
                    ": " +
                    "3.543k" +
                    "</span>" +
                    "<span className='KP_chartNumberInstagram'>" +
                    "Instagram" +
                    ": " +
                    "0.545k" +
                    "</span>" +
                    "<span className='KP_chartNumberRss'>" +
                    "Rss" +
                    ": " +
                    "2.453k" +
                    "</span>" +
                    "</div>"
                  );
                },
              },
             grid: {
                    show: false,
             },
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
                    colorStops: [
                      {
                        offset: 0,
                        color: "#A6E0E2",
                        opacity: 1
                      },
                      {
                        offset: 100,
                        color: "#5EC9D9" ,
                        opacity: 1
                      }
                    ]
                  }
              },
              legend : {
                  show :true,
              },
              plotOptions: {
                bar: {
                  borderRadius: 10,
                  columnWidth: '40%',
                  startingShape: 'rounded',
                  endingShape: 'rounded',
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
                  colors: ["white"]
                }
              },
              
              xaxis: {
                categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
                position: 'bottom',
                colors: ["rgb(255, 255, 255)"],
                axisBorder: {
                  show: false
                },
                labels: {
                  show: true,
                  rotate: -45,
                  rotateAlways: false,
                  hideOverlappingLabels: true,
                  showDuplicates: false,
                  trim: false,
                  minHeight: undefined,
                  maxHeight: 120,
                  style: {
                      colors: ["white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white","white",],
                      fontSize: '12px',
                      fontFamily: 'Helvetica, Arial, sans-serif',
                      fontWeight: 400,
                      cssClass: 'apexcharts-xaxis-label',
                  },
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
            <Chart options={KP_BF_Chart.options} series={KP_BF_Chart.series} type="bar" height={250} width={"100%"} />
            <div className="KP_BF_chart_SourceContainer">
              <div className="KP_BF_chart_Source">
                 <span className="KP_BF_chartSourceNumber KP_chartNumberTelegram">4.453K</span>
                 <span className="KP_BF_chartSourceTitle ">Telegram</span>
              </div>
              <div className="KP_BF_chart_Source Chartborder-right">
                 <span className="KP_BF_chartSourceNumber KP_chartNumberInstagram">6.424K</span>
                 <span className="KP_BF_chartSourceTitle">Instagram</span>
              </div>  
              <div className="KP_BF_chart_Source Chartborder-right">
                 <span className="KP_BF_chartSourceNumber KP_chartNumberTwitter">10.350K</span>
                 <span className="KP_BF_chartSourceTitle">Twitter</span>
              </div>
              <div className="KP_BF_chart_Source Chartborder-right">
                 <span className="KP_BF_chartSourceNumber KP_chartNumberRss">4.981K</span>
                 <span className="KP_BF_chartSourceTitle">Rss</span>
              </div>  
            </div>
        </div>
    )
}

export default KP_BF_chart
