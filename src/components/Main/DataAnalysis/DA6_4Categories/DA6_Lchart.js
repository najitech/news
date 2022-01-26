import React , {useState} from 'react'
import './DA6_Lchart.css'
import Chart from 'react-apexcharts'

function DA6_Lchart() {
    const [TimeFilter,SetTimeFilter] = useState(1)
    let ChartNumbers =[[14, 16, 16, 17, 17, 13, 19, 18, 16, 11, 12, 19, 14, 13, 11, 12,
        17, 18, 11, 14, 19, 12, 11, 19],
       [12, 17, 15, 14, 19, 14, 11, 16, 16, 17, 20, 17, 20, 12, 14, 14,
        20, 19, 15, 14, 18, 18, 15, 18],
       [20, 21, 12, 19, 21, 20, 20, 20, 13, 21, 18, 20, 17, 17, 18, 20,
        17, 18, 16, 12, 14, 19, 17, 13],
       [18, 22, 15, 21, 19, 13, 14, 22, 21, 15, 15, 18, 20, 13, 19, 17,
        17, 13, 14, 21, 16, 22, 16, 19]]
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
          name: 'کم تکرار',
          data: ChartNumbers[0]
        },
        {
            name: 'نسبتا پر تکرار',
            data: ChartNumbers[1]
        },  
        {
            name: 'پر تکرار',
            data: ChartNumbers[2]
        }, 
        {
            name: 'بسیار پر تکرار',
            data: ChartNumbers[3]
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
            show:true,
            position: 'top',
            markers: {
              width: 8,
              height: 8,
              strokeWidth: 0,
              strokeColor: '#fff',
              fillColors: ['#008FFB','#00E396','#FEB019','#FF4560'],
              radius: 12,
              customHTML: undefined,
              onClick: undefined,
              offsetX: 5,
              offsetY: 0
          },
          },

          grid: {
            show: false,
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
            curve: 'straight'
          },
          markers: {
            size: 3,
            hover: {
              size: 6
            }
          },
          fill: {
            gradient: {
                shade: 'dark',
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.3,
                opacityTo: 0,
                stops: [0,70, 100],
                colorStops: []
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
              },
              axisBorder: {
                show: false,
            },

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
                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor "'+
                    "<span class='MO_TooltipNumber'> 13.8K</span>" +
                    '<span class="MO_TooltipTitle"> کم تکرار : </span>' +
                    '<div class="MOtwiBack circleMargin"></div>' +
                    '</div>' +
                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor "'+
                    '<span class="MO_TooltipNumber"> 8.3K</span>' +
                    '<span class="MO_TooltipTitle"> نسبتا پر تکرار : </span>' +
                    '<div class="MOpaperBack circleMargin"></div>' +
                    '</div>' +
                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor"'+
                    "<span class='MO_TooltipNumber'> 12.8K</span>" +
                    '<span class="MO_TooltipTitle"> پر تکرار : </span>' +
                    '<div class="MOrssBack circleMargin"></div>' +
                    '</div>' +
                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor "'+
                    "<span class='MO_TooltipNumber'> 17.4K</span>" +
                    '<span class="MO_TooltipTitle"> بسیار پر تکرار : </span>' +
                    '<div class="MOrssBack DA6_VeryHighBack circleMargin"></div>' +
                    '</div>' +

                "</div>"
              );
            },
          },
        },
      
      
      })
    return (
        <div className='DA6_Lchart'>
            <div className='DA1_Header DA6_Header'>
                    <div className='DA1_HeaderTitleDes'>
                          <span className='DA1_HeaderTitle'>کتگوری ها</span>
                          <span className='DA1_HeaderDescribe DA1_HeaderDescribeIm'>توضیحات مربوط به این نمودار</span>
                        </div>

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
            <div className='DA1_Chart DA6_LchartContainer'>
                <Chart options={ChartData.options} series={ChartData.series} type="area" height={260} />
            </div>
        </div>
    )
}

export default DA6_Lchart
