import React , {useState} from 'react'
import './DA7.css'
import Chart from 'react-apexcharts'

function DA7() {
    const [TimeFilter,SetTimeFilter] = useState(1)
    let ChartNumbers =[[14, 16, 16, 17, 17, 13, 19, 18, 16, 11, 12, 19, 14, 13, 11, 12,
        17, 18, 11, 14, 19, 12, 11, 19]]
    const handleTimeFilter = (e) => {
        let a=e;
        if (TimeFilter===a) {
          
        }
        else {
          SetTimeFilter(a)
        }
    }
    const [ChartData , setChartData] = useState({
        series: [{
          name: 'کاربران',
          data: ChartNumbers[0]
        },
    ],
    
     options: {

      colors: ['#008FFB','#00E396','#FEB019','#FF4560'],
          chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: false,
                tools: {
                  download: false
                },
              },
          },
          legend: {
            show: false,
          },
          grid: {
            show: true,
            borderColor: 'rgb(238, 238, 238)',
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true,
                    color:"white"
                }
            },
        },
          stroke: {
            width: 1.5,
            curve: 'smooth'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              gradientToColors: [],
              shadeIntensity: 0,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 0.2,
              stops: [90,100]
            },
          },
          grid: {
            show: true,
            borderColor: 'rgb(238, 238, 238)',
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true,
                    color:"white"
                }
            },
        },
          yaxis: {
            tickAmount: 4,
          },
          dataLabels: {
            enabled: false
          },
          xaxis:{
            labels: {
                show: true,
                align: 'right',
                style: {
                    colors: ["#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3",],
                    fontSize: '10px',
                    fontFamily: 'Shabnam',
                    fontWeight: 400,
                    cssClass: 'apexcharts-yaxis-label',
                },
              }
          },
          yaxis: {
            show: true,
            labels: {
              show: true,
              align: 'right',
              tickAmount: 4,
              style: {
                  colors: ['#BEBDC3'],
                  fontSize: '10px',
                  fontFamily: 'Shabnam',
    
                  cssClass: 'apexcharts-yaxis-label',
              },
              offsetX: -10,
            }
        },
          tooltip: {
            enabled: true,
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
              return (
                '<div class="MO_ChartTooltip">' +
                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor"'+
                    "<span class='MO_TooltipNumber'> 12.8K</span>" +
                    '<span class="MO_TooltipTitle"> خبرخوان : </span>' +
                    '<div class="MOrssBack circleMargin"></div>' +
                    '</div>' +

                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor "'+
                    "<span class='MO_TooltipNumber'> 20.5K</span>" +
                    '<span class="MO_TooltipTitle"> تلگرام : </span>' +
                    '<div class="MOtelBack circleMargin"></div>' +
                    '</div>' +
                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor "'+
                    '<span class="MO_TooltipNumber"> 8.3K</span>' +
                    '<span class="MO_TooltipTitle"> روزنامه : </span>' +
                    '<div class="MOpaperBack circleMargin"></div>' +
                    '</div>' +
                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor "'+
                    "<span class='MO_TooltipNumber'> 13.8K</span>" +
                    '<span class="MO_TooltipTitle"> توییتر : </span>' +
                    '<div class="MOtwiBack circleMargin"></div>' +
                    '</div>' +
                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor "'+
                    "<span class='MO_TooltipNumber'> 17.4K</span>" +
                    '<span class="MO_TooltipTitle"> اینستاگرام : </span>' +
                    '<div class="MOInstaBack circleMargin"></div>' +
                    '</div>' +

                "</div>"
              );
            },
          },
        },
      
      
      })
    return (
        <div className='DA7'>
            <div className='DA7_ChartContainer'>
                <div className='DA1_Header DA6_Header'>
                    <span>نگاه کلی</span>
                    <div className='DA1_HeaderFilters'>
                        <div className='DA_CTimeFilters'>
                            <div className={['DA_CTimeFilter' ,TimeFilter===1? 'DA_CTimeFilterActive' : ''].join(' ')} onClick={() => handleTimeFilter(1)}>
                                امروز
                            </div>
                            <div className={['DA_CTimeFilter' ,TimeFilter===2? 'DA_CTimeFilterActive' : ''].join(' ')} onClick={() => handleTimeFilter(2)}>
                                هفته
                            </div>
                            <div className={['DA_CTimeFilter' ,TimeFilter===3? 'DA_CTimeFilterActive' : ''].join(' ')} onClick={() => handleTimeFilter(3)}>
                                ماه
                            </div>
                            <div className='DA_DownloadPng'>
                            ...
                            </div>
                        </div>
                    </div>
                </div>
                <div className='DA7_Chart'>
                <Chart options={ChartData.options} series={ChartData.series} type="line" height={260} />
                </div>
            </div>

            <div className='DA7_Users'>

            </div>
        </div>
    )
}

export default DA7
