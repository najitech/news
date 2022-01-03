import React,{useState} from 'react'
import './DP_Chart.css'
import {IconButton } from '@material-ui/core'
import { AiOutlineSearch } from 'react-icons/ai'
import Chart from 'react-apexcharts'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsCalendarMonthFill, BsFillCalendarWeekFill, BsTelegram } from 'react-icons/bs'
import {ImNewspaper,ImBullhorn} from 'react-icons/im'
import {MdOutlineToday} from 'react-icons/md'
import {IoToday} from 'react-icons/io5'
import Select from 'react-select'
import DatePicker from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"
import TimePicker from 'react-gradient-timepicker'

const options = [
  { value: '0', label: 'بسیار پر تکرار' },
  { value: '1', label: 'پر تکرار' },
  { value: '2', label: 'کم تکرار' },
  { value: '3', label: 'بسیار کم تکرار' }
]

function DP_Chart() {
    let currentHour= new Date().getHours();    
    const tempnum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    const ChartTemp = tempnum.map((number) => (currentHour-number-1)%24 )
    const xChart = ChartTemp.map ((number) => number > 0 ? number : (24+number)%24)
    xChart.reverse()
    let chartNumbers =[[14, 16, 16, 17, 17, 13, 19, 18, 16, 11, 12, 19, 14, 13, 11, 12,
        17, 18, 11, 14, 19, 12, 11, 19],
       [12, 17, 15, 14, 19, 14, 11, 16, 16, 17, 20, 17, 20, 12, 14, 14,
        20, 19, 15, 14, 18, 18, 15, 18],
       [20, 21, 12, 19, 21, 20, 20, 20, 13, 21, 18, 20, 17, 17, 18, 20,
        17, 18, 16, 12, 14, 19, 17, 13],
       [18, 22, 15, 21, 19, 13, 14, 22, 21, 15, 15, 18, 20, 13, 19, 17,
        17, 13, 14, 21, 16, 22, 16, 19],
       [17, 15, 22, 22, 18, 18, 18, 22, 22, 19, 23, 21, 14, 16, 17, 16,
        14, 15, 22, 17, 22, 18, 14, 21]];
    const [ChartData , setChartData] = useState({
          
        series: [{
            name: 'عکس دار ها',
            data: [6, 9, 5, 3, 2, 7, 1, 5, 3, 7, 8, 9, 3, 6, 3, 7, 9, 3, 4, 3, 5, 3,
            8, 5],
            type: 'column',
        },
        {
            name: 'اینستاگرام',
            data: chartNumbers[0]
        },
        {
            name: 'تلگرام',
            data: chartNumbers[1],
            type: 'line',
        },
        {
            name: 'خبرخوان',
            data: chartNumbers[2],
            type: 'line',
        },
        {
            name: 'توییتر',
            data: chartNumbers[3],
            type: 'line',
        },
        {
            name: 'روزنامه',
            data: chartNumbers[4],
            type: 'line',
        },
    ],
        options: {
        colors: ['#2D3653','rgb(233, 51, 233)','#11cbfa','#f38b5b','#00ACEE','rgba(81,214,168,1)'],
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
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '100%',
            }
          },
          stroke: {
            width: 2
          },
          legend : {
            show :false,
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
                  colors: ["#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c","#5f657c",],
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
          fill: {
                
            type: 'gradient',
            gradient: {
              shade: 'light',
              gradientToColors: ['#2D3653','rgb(233, 51, 233)','#11cbfa','#f38b5b','#00ACEE','rgb(0, 255, 166)','rgba(81,214,168,1)'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 0.6,
              stops: [0,100]
            },
          },
          grid: {
            borderColor: '#39446b',
          },
          tooltip: {
            enabled: true,
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
              return (
                '<div class="MO_ChartTooltip">' +
                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor transparentItem"'+
                    "<span class='MO_TooltipNumber'> 12.8K</span>" +
                    '<span class="MO_TooltipTitle"> خبرخوان : </span>' +
                    '<div class="MOrssBack circleMargin"></div>' +
                    '</div>' +

                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor transparentItem"'+
                    "<span class='MO_TooltipNumber'> 20.5K</span>" +
                    '<span class="MO_TooltipTitle"> تلگرام : </span>' +
                    '<div class="MOtelBack circleMargin"></div>' +
                    '</div>' +
                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor transparentItem"'+
                    '<span class="MO_TooltipNumber"> 8.3K</span>' +
                    '<span class="MO_TooltipTitle"> روزنامه : </span>' +
                    '<div class="MOpaperBack circleMargin"></div>' +
                    '</div>' +
                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor transparentItem"'+
                    "<span class='MO_TooltipNumber'> 13.8K</span>" +
                    '<span class="MO_TooltipTitle"> توییتر : </span>' +
                    '<div class="MOtwiBack circleMargin"></div>' +
                    '</div>' +
                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor transparentItem"'+
                    "<span class='MO_TooltipNumber'> 17.4K</span>" +
                    '<span class="MO_TooltipTitle"> اینستاگرام : </span>' +
                    '<div class="MOInstaBack circleMargin"></div>' +
                    '</div>' +
                    '<div class="ChartHoverItem ChartHoverInstagram whitecolor transparentItem"'+
                    "<span class='MO_TooltipNumber'> 17.4K</span>" +
                    '<span class="MO_TooltipTitle"> پست های عکس دار : </span>' +
                    '<div class="MOInstaBack MOPicDataBack circleMargin"></div>' +
                    '</div>' +

                "</div>"
              );
            },
          },
          yaxis: [{
            opposite: true,
            title: {
              text: 'Social Media'
            }
          }]
        }
    }
    )
    const [TimeFilter,SetTimeFilter] = useState(0)
    const handleTimeFilter = (e) => {
        let a=e;
        if (TimeFilter===a) {
          SetTimeFilter(0)
        }
        else {
          SetTimeFilter(a)
        }
    }
    const [ChartGroups,SetChartGroups]=useState(1);
    const customStyles = {
      control: (base, state) => ({
        ...base,
        background: "#313A57",
        borderRadius: "4px",
        boxShadow: state.isFocused ? null : null,
        /*borderColor: state.isFocused ? "yellow" : "green",
        "&:hover": {
          borderColor: state.isFocused ? "red" : "blue"
        }*/
        borderColor :"transparent",
        "&:hover": {
          borderColor: "transparent"
        }
      }),
      singleValue: (provided) => ({
        ...provided,
        color: '#838AA4',
        fontSize:'12px'
      }),
      dropdownIndicator: base => ({
        ...base,
        color: "#838AA4" ,
        "&:hover": {
          color: "white" 
        }
      }),
      menu: base => ({
        ...base,
        // override border radius to match the box
        borderRadius: 0,
        // kill the gap
        marginTop: 0
      }),
      option: (styles, {isFocused, isSelected}) => ({
        ...styles,
        background: isFocused
            ? 'hsla(291, 64%, 42%, 0.5)'
            : isSelected
                ? 'hsla(291, 64%, 42%, 1)'
                : undefined,
        zIndex: 1
    }),
      menuList: base => ({
        ...base,
        // kill the white space on first and last option
        padding: 0,
        backgroundColor:'#838AA4',
        color:'white',
      })
    };
    const [Datevalue, setDateValue] = useState(null)
    const handleDateChange = (value) => {
      setDateValue(Datevalue)
    }
    return (
        <div className='DP_Chart'>
            <div className='DP_ChartFilters'>
              <div className='DP_CTimeFilters'>
                  <div className={['DP_CTimeFilter' ,TimeFilter===1? 'DP_CTimeFilterActive' : ''].join(' ')} onClick={() => handleTimeFilter(1)}>
                      <IoToday/>
                  </div>
                  <div className={['DP_CTimeFilter' ,TimeFilter===2? 'DP_CTimeFilterActive' : ''].join(' ')} onClick={() => handleTimeFilter(2)}>
                      <BsFillCalendarWeekFill/>
                  </div>
                  <div className={['DP_CTimeFilter' ,TimeFilter===3? 'DP_CTimeFilterActive' : ''].join(' ')} onClick={() => handleTimeFilter(3)}>
                      <BsCalendarMonthFill/>
                  </div>
                  <div>
                    ...
                  </div>
              </div>
              <div className='DP_CContentFilter'>
                <Select  className="DP_SelectBox" styles={customStyles} options={options} 
                  components={{
                    IndicatorSeparator: () => null
                  }}
                  placeholder={<div>گروه</div>}
                />
                <Select className="DP_SelectBox" styles={customStyles} options={options} 
                  components={{
                    IndicatorSeparator: () => null
                  }}
                  placeholder={<div>موضوع</div>}
                />
              </div>
            </div>
            <div className='DP_ChartSide'>
                <div className="DP_ChartSidebar">
                  <div className='DP_DatePickContainer'>
                    <span className='DP_DatePickTitle'>بازه ی زمانی مورد نظر را انتخاب کنید</span>
                    <DatePicker
                    animations={[
                      opacity(), 
                      transition({ from: 35, duration: 800 })
                    ]} 
                    render={<CustomInput />}
                    className="purple DP_DatePick"
                    calendar={persian}
                    locale={persian_fa}
                    value={Datevalue}
                    onChange={handleDateChange}
                    range
                      />
                  </div>
                  <TimePicker

                    theme="Bourbon"
                    className="timepicker"
                    placeholder="Start Time"
                    onSet={(val) => {
                      alert('val:' + val.format12);
                    }}
                  />
                  {
                    /*
                  <div className="DP_SideBarSearch">
                      <div className="input-container">
                          <input type="text" required=""/>
                          <label>جست و جو</label>		
                      </div>
                      <AiOutlineSearch  className="DP_SearchIcon"/>
                  </div>
                    */
                  }

                  <div className="DP_SidebarSources">
                      <div className='DP_SidebarSource'>
                        <div className='DP_SidebarSourceTitle'>
                        <BiRss className="DP_Icon"/>
                        <span>خبرها</span>
                        </div>
                        <span className='DP_SourceNumber'>234.642K</span>
                      </div>
                      <div className='DP_SidebarSource'>
                        <div className='DP_SidebarSourceTitle'>
                        <BsTelegram className="DP_Icon DP_TelegramIcon"/> 
                        <span>تلگرام</span>
                        </div>
                        <span className='DP_SourceNumber'>546.321K</span>
                      </div>
                      <div className='DP_SidebarSource'>
                        <div className='DP_SidebarSourceTitle'>
                        <AiFillInstagram className="DP_Icon DP_InstagramIcon"/> 
                        <span>اینستاگرام</span>
                        </div>
                        <span className='DP_SourceNumber'>34.724K</span>
                      </div>
                      <div className='DP_SidebarSource'>
                        <div className='DP_SidebarSourceTitle'>
                        <AiFillTwitterCircle className="DP_Icon DP_TwitterIcon"/> 
                        <span>توییتر</span>
                        </div>
                        <span className='DP_SourceNumber'>200.343K</span>
                      </div>
                      <div className='DP_SidebarSource'>
                        <div className='DP_SidebarSourceTitle'>
                        <ImNewspaper className="DP_Icon DP_PaperIcon" /> 
                        <span>روزنامه</span>
                        </div>
                        <span className='DP_SourceNumber'>127.432K</span>
                      </div>
                      <div className='DP_SidebarSource'>
                        <div className='DP_SidebarSourceTitle'>
                        <ImBullhorn className="DP_Icon DP_SheypoorIcon"/>
                        <span>شیپور</span>
                        </div>
                        <span className='DP_SourceNumber'>56.821K</span>
                      </div>
    
                  </div>
                </div>
                <div className='DP_ChartContainer'>
                    <Chart options={ChartData.options} series={ChartData.series} type="line" height={400} />
                </div>
            </div>
        </div>
    )
}

function CustomInput({ openCalendar, value, handleValueChange }) {
  return (
    <input
      className='DP_DateInput'
      onFocus={openCalendar}
      value={value}
      onChange={handleValueChange}
      placeholder='--/--/--     ,      --/--/--'
    />
  )
}

export default DP_Chart
