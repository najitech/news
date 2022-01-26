import React , {useState} from 'react'
import './DA7_Users.css'
import Chart from 'react-apexcharts'
import DA7_UserBox from './DA7_UserBox'
import img1 from '../../../../ronaldo.jpg'
import img2 from '../../../../dicaprio.jpg'

function DA7_Users() {
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

      colors: ['#8A8FB6'],
          chart: {
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 4,
              color:['#8A8FB6'],
              opacity: 0.2,
            
            },
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
            width: 2,
            curve: 'smooth'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              gradientToColors: ["rgb(255, 255, 255)",'#8A8FB6',"rgb(255, 255, 255)"],
              shadeIntensity: 0,
              type: 'horizontal',
              stops: [0,7,96,100]
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
            axisTicks: {
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
                    "<span class='MO_TooltipNumber'> 20.5K</span>" +
                    '<span class="MO_TooltipTitle"> کاربران : </span>' +
                    '<div class="MOtelBack circleMargin"></div>' +
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
                      <div className='DA1_HeaderTitleDes'>
                          <span className='DA1_HeaderTitle'>کاربران </span>
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
                <div className='DA7_Chart'>
                <Chart options={ChartData.options} series={ChartData.series} type="line" height={260} />
                </div>
            </div>

            <div className='DA7_Users'>
                <DA7_UserBox avatar={img1} name="رونالدو"/>
                <DA7_UserBox avatar={img1} name="رونالدو" />
                <DA7_UserBox avatar={img1} name="رونالدو" />
                <DA7_UserBox avatar={img1} name="رونالدو" />
                
                <DA7_UserBox avatar={img2} name="دیکاپریو" />
                <DA7_UserBox avatar={img2} name="دیکاپریو" />
                <DA7_UserBox avatar={img2} name="دیکاپریو" />
                <DA7_UserBox avatar={img2} name="دیکاپریو" />
                <DA7_UserBox avatar={img1} name="رونالدو"/>
                <DA7_UserBox avatar={img1} name="رونالدو" />
                <DA7_UserBox avatar={img1} name="رونالدو" />
                <DA7_UserBox avatar={img1} name="رونالدو" />
                

            </div>
        </div>
    )
}

export default DA7_Users
