import React ,{useState } from 'react'
import './KP_BF_chart.css'
import Chart from 'react-apexcharts'
import KPchart_Tooltip from './KPchart_Tooltip'
import Timage from '../../../../../Instagram_logo_2016.svg.png'

function KP_BF_chart() {
    let currentHour=0;
    currentHour= new Date().getHours();    
    const tempnum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    const ChartTemp = tempnum.map((number) => (currentHour-number)%24 )
    const xChart = ChartTemp.map ((number) => number > 0 ? number : (24+number)%24)
    xChart.reverse()
    const [KP_BF_Chart, setKP_BF_Chart] =useState({
          series: [{
              name: 'Inflation',
              data: [4,8,2,20,14,18,5,32,12,24,3,6,12,8,45,22,7,32,13,1,7,3,12,21]
            }],
            options: {
              tooltip: {
                enabled: true,
                custom: function({ series, seriesIndex, dataPointIndex, w }) {
                  return (
                    '<div class="arrow_box">' +
                        '<div class="ChartHoverItem ChartHoverInstagram"'+
                        "<span> 2.8K</span>" +
                        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" width="14" height="14">' +
                        '</div>' +
                        '<div class="ChartHoverItem ChartHoverTwitter"'+
                        "<span> 5.4K</span>" +
                        '<img src="https://static.cdnlogo.com/logos/t/96/twitter-icon.svg" alt="" width="14" height="14">' +
                        '</div>' +
                        '<div class="ChartHoverItem ChartHoverRss"'+
                        "<span> 3.2K</span>" +
                        '<img src="https://seeklogo.com/images/R/rss-icon-logo-025B789EB6-seeklogo.com.png" alt="" width="14" height="14">' +
                        '</div>' +
                        '<div class="ChartHoverItem ChartHoverTelegram"'+
                        "<span> 1.6K</span>" +
                        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/640px-Telegram_logo.svg.png" alt="" width="14" height="14">' +
                        '</div>' +
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
                events: {
                  dataPointSelection: function(event, chartContext, config) {
                    console.log(chartContext, config);
                  }
                 },
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
                  return val + 'K';
                },
                offsetY: -20,
                style: {
                  fontSize: '12px',
                  colors: ["white"]
                }
              },
              
              xaxis: {
                categories:xChart,
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
