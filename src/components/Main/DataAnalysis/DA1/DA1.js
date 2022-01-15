import React ,{useState} from 'react'
import './DA1.css'
import DatePicker from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"
import Chart from 'react-apexcharts'
import DA1_rBox from './DA1_rBox'

function DA1() {
    const [TimeFilter,SetTimeFilter] = useState(1)
    const handleTimeFilter = (e) => {
        let a=e;
        if (TimeFilter===a) {
          
        }
        else {
          SetTimeFilter(a)
        }
    }
    const [Datevalue, setDateValue] = useState(null)
    const handleDateChange = (value) => {
      setDateValue(Datevalue)
    }
    let ChartNumbers =[[14, 16, 16, 17, 17, 13, 19, 18, 16, 11, 12, 19, 14, 13, 11, 12,
        17, 18, 11, 14, 19, 12, 11, 19],
       [12, 17, 15, 14, 19, 14, 11, 16, 16, 17, 20, 17, 20, 12, 14, 14,
        20, 19, 15, 14, 18, 18, 15, 18]]
    const [ChartData , setChartData] = useState({
        series: [{
          name: 'اینستاگرام',
          data: ChartNumbers[0]
        },
        {
            name: 'تلگرام',
            data: ChartNumbers[1]
        },  
    ],
    
     options: {

      colors: ['#7F7ECC','#92CFDB'],
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
            width: 2.5,
            curve: 'smooth'
          },

          fill: {
            
            type: 'gradient',
            gradient: {
              shade: 'light',
              gradientToColors: ['#7F7ECC','#92CFDB'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 0.75,
              stops: [0,100]
            },
          },
          yaxis: {
            tickAmount: 4,
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
        <div >
            <div className='DA_TopContaier'>
                <div className='DA_TopHeader'>
                    <h3>تحلیل دیتا</h3>
                    <p>به بخش تحلیل دیتا وبسایت خوش آمدید. در این بخش میتوانید پست های مربوط به تحلیل دیتا را مشاهده کنید</p>
                    
                </div>
                <div className='DA_FHeader'>

                </div>
                <div className='DA1'>
                    <div className='DA1_Header'>
                        <span>نگاه کلی</span>
                        <div className='DA1_HeaderFilters'>
                            <div className='DA1_HeaderDateFilterC'>
                                <span>بازه تاریخ را انتخاب کنید</span>
                                <DatePicker
                                animations={[
                                opacity(), 
                                transition({ from: 35, duration: 800 })
                                ]} 
                                render={<CustomInput1/>}
                                className="purple DP_DatePick"
                                calendar={persian}
                                locale={persian_fa}
                                value={Datevalue}
                                onChange={handleDateChange}
                                range
                                />
                            </div>

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
                    <div className='DA1_Chart'>
                        <Chart options={ChartData.options} series={ChartData.series} type="line" height={200} />
                    </div>

                    <div className='DA1_Footer'>
                        <DA1_rBox title='کلمات کلیدی هفته' weekData="120.353" weekRaise="10" weekRaising/>
                        <DA1_rBox title='هشتگ های دریافتی هفته' weekData="89" weekRaise="20.8" />
                        <DA1_rBox title='تصاویر دریافتی هفته' weekData="56" weekRaise="15.9" weekRaising/>
                        <DA1_rBox title='موجودیت های دریافتی'  weekData="102" weekRaise="5" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function CustomInput1({ openCalendar, value, handleValueChange }) {
    return (
      <input
        className='DA_DateInput'
        onFocus={openCalendar}
        value={value}
        onChange={handleValueChange}
        placeholder='--/--/--     ,      --/--/--'
      />
    )
  }


export default DA1
