import React ,{useState} from 'react'
import './DA1_OverView.css'
import DatePicker from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"
import Chart from 'react-apexcharts'
import DA1_rBox from './DA1_rBox'
import { useMediaQuery } from 'react-responsive'
import { BsArrowDownRightCircleFill, BsFillArrowUpRightCircleFill } from 'react-icons/bs';

function DA1_OverView(props) {
    let q952 = useMediaQuery({query :'(max-width : 952px)'}); 
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
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 3,
              color:['#7F7ECC','#92CFDB'],
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
            width: 2,
            curve: 'smooth'
          },

          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              gradientToColors: ["rgb(255, 255, 255)","rgb(255, 255, 255)"],
              shadeIntensity: 0,
              type: 'horizontal',
              stops: [0,7,93,100]
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
                    "<span class='MO_TooltipNumber'>" + series[0][dataPointIndex] + "K</span>" +
                    '<span class="MO_TooltipTitle"> مولفه اول : </span>' +
                    '<div class="MOtelBack circleMargin"></div>' +
                    '</div>' +

                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor "'+
                    "<span class='MO_TooltipNumber'>" + series[1][dataPointIndex] + "K</span>" +
                    '<span class="MO_TooltipTitle"> مولفه دوم : </span>' +
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
                        <div className='DA1_HeaderTitleDes'>
                          <span className='DA1_HeaderTitle'>نگاه کلی</span>
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
                    <div className='DA1_Overviews'>
                      <div className='DA1_rBox_Result DA1_PostOverview'>
                          <span className='DA1_ResultTitle'>کل پست های امروز</span>
                          <div>
                              <div className="MOresult_WeekResultFooter DA1_ResultFooter">
                                  <span className="MOresult_HeaderBox_dataNumber DA1_ResultNumber">{props.AllData.split('.')[0]}K</span>
                                  <div className="MOresult_HeaderBox_raise DA1_PostsRaiseContainer ">
                                      <span style={{color : props.AllDataRaising? '#0FA86A' : '#DC595A'}}>{!q952?props.AllDataRaise : props.AllDataRaise.split('.')[0]}% </span>
                                      {
                                          props.AllDataRaising ?
                                          <BsFillArrowUpRightCircleFill className="MOresult_Box_raiseIcon DA1_RaiseIcon"/>
                                          :
                                          <BsArrowDownRightCircleFill className="MOresult_Box_raiseIcon KP_Fall "/>
                                      }
                                  </div>

                              </div>
                          </div>
                      </div>
                      <div className='DA1_ResultFirst'>
                          <div className='DA1_ResultFirstHeader'>
                            <div className='DA1_ResultFirstCircle'>
                                  
                            </div>
                            <span className='DA1_ResultFirstTitle'>  
                                مولفه اول
                            </span>
                          </div>
                          <span className='DA1_ResultFirstCount'>
                              {props.FirstData}K
                          </span>
                      </div>
                      <div className='DA1_ResultSecond'>
                        <div className='DA1_ResultSecondHeader'>
                            <div className='DA1_ResultSecondCircle'>

                            </div>
                            <span className='DA1_ResultSecondTitle'>  
                                  مولفه دوم
                            </span>
                          </div>
                          <span className='DA1_ResultSecondCount'>
                                {props.SecondData}K
                          </span>
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


export default DA1_OverView
