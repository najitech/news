import React , {useState} from 'react'
import './DA4_Feeling.css'
import Chart from 'react-apexcharts'
import { useMediaQuery } from 'react-responsive';

function DA4_Feeling() {
    let q1143 = useMediaQuery({query :'(max-width : 1143px)'}); 
    let q917 = useMediaQuery({query :'(max-width : 917px)'}); 
    let q700 = useMediaQuery({query :'(max-width : 700px)'}); 
    let q554 = useMediaQuery({query :'(max-width : 554px)'}); 
    let currentHour= new Date().getHours();    
    const tempnum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    const ChartTemp = tempnum.map((number) => (currentHour-number-1)%24 )
    let xChart = ChartTemp.map ((number) => number > 0 ? number : (24+number)%24)
    xChart.reverse()

    if (q700) {
      q917=false;
    }
    if (q554) {
      q917= true;
    }
    if (q917) {
      xChart = xChart.slice(0,12)
    }
    const [TimeFilter,SetTimeFilter] = useState(1)
    const handleTimeFilter = (e) => {
        let a=e;
        if (TimeFilter===a) {
          
        }
        else {
          SetTimeFilter(a)
        }
    }
    let chartNumbers1 = [[14, 16, 16, 17, 17, 13, 19, 18, 16, 11, 12, 19, 14, 13, 11, 12,
      17, 18, 11, 14, 19, 12, 11, 19],
      [12, 17, 15, 14, 19, 14, 11, 16, 16, 17, 20, 17, 20, 12, 14, 14,
        20, 19, 15, 14, 18, 18, 15, 18],
      [20, 21, 12, 19, 21, 20, 20, 20, 13, 21, 18, 20, 17, 17, 18, 20,
          17, 18, 16, 12, 14, 19, 17, 13]
    ]
    const [ChartData2 , setChartData2] = useState({
        series: [44, 55, 15],
        options: {
          chart: {
            type: 'pie',
          },
          legend: {
            show:false,
          },
          plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
            }
          },
          dataLabels: {
            style: {
                fontSize: '10px',
            }
          },
        },
    })
    const [ChartData , setChartData] = useState({
          
            series: [{
              name: 'پست های مثبت',
              data: q917 ? chartNumbers1[0].slice(0,15) : chartNumbers1[0]
            }, {
              name: 'پست های خنثی',
              data: q917  ? chartNumbers1[1].slice(0,15) : chartNumbers1[1]
            }, {
              name: 'پست های منفی',
              data: q917  ? chartNumbers1[2].slice(0,15) : chartNumbers1[2]
            }],
            options: {
                dataLabels: {
                    enabled: false,
                },
                grid: {
                    borderColor: 'rgb(240, 240, 240)',
                },
                tooltip: {
                    enabled: true,
                  },
                  xaxis:{
                    categories:xChart,
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
              chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    show: false,
                    tools: {
                      download: false
                    },
                  },
                zoom: {
                  enabled: true
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                    show: false,
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                  }
                }
              }],
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '30%',
                  borderRadius:q1143? 3 : 5
                },
              },
              legend: {
                show:true,
                position: 'top',
                markers: {
                  width: 12,
                  height: 12,
                  strokeWidth: 0,
                  strokeColor: '#fff',
                  fillColors: ['#4B65E0', '#64D6F8', 'rgb(247, 109, 109)'],
                  radius: 12,
                  customHTML: undefined,
                  onClick: undefined,
                  offsetX: 5,
                  offsetY: 0
              },
              },
              fill: {
                colors: ['#4B65E0', '#64D6F8', 'rgb(247, 109, 109)'],
                opacity: 1,
              }
            },
          
     })
    return (
        <div className='DA4'>
            <div className='DA4_RightChartContainer'>
                <div className='DA1_Header DA4_Header'>
                      <div className='DA1_HeaderTitleDes'>
                          <span className='DA1_HeaderTitle'>حس پست ها</span>
                          <span className='DA1_HeaderDescribe'>توضیحات مربوط به این نمودار</span>
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
                <div className='DA4_RightChart'>
                <Chart options={ChartData.options} series={ChartData.series} type="bar" height={250} />
                </div>
            </div>

            <div className='DA4_LeftChart'>
                <div className='DA1_Header DA4_LeftHeader'>
                        <span>حس پست ها</span>
                        <div className='DA1_HeaderFilters'>
                                <div className='DA_DownloadPng'>
                                ...
                                </div>
                        </div>
                </div>
                <span className='DA4_LeftChartDescribe'>در این بخش میتوانید درصد حس ها را با جزییات مشاهده کنید</span>
                <div className='DA4_LeftChartContainer'> 
                    <Chart options={ChartData2.options} series={ChartData2.series} type="donut" height={320} />
                    <span className='DA4_LeftChartNumber'>481,573</span>
                </div>
                <div className='DA4_LeftChartFooter'>
                    <div className='DA4_LCFooterItem'>
                        <span className='DA4_LCFooterItemTitle'>پست های مثبت</span>
                        <span className='DA4_LCFooterItemNumber'>346,842 , 20%</span>
                    </div>
                    <div className='DA4_LCFooterItem'>
                        <span className='DA4_LCFooterItemTitle'>پست های خنثی</span>
                        <span className='DA4_LCFooterItemNumber'>36,642 , 30%</span>
                    </div>
                    <div className='DA4_LCFooterItem'>
                        <span className='DA4_LCFooterItemTitle'>پست های منفی</span>
                        <span className='DA4_LCFooterItemNumber'>173,859 , 50%</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DA4_Feeling
