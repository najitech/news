import React,{useState} from 'react'
import { BsArrowDownRightCircleFill, BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { IoLocationOutline,IoLocationSharp } from 'react-icons/io5'
import './MapSameLocation.css'
import Chart from 'react-apexcharts'

function MapSameLocation(props) {
    const [ChartData , setChartData] = useState({     
        series: [{
          name: 'Sales',
          data: [4, 3, 10, 9, 29, 19, 22]
        }],
        options: {
          fill: {
            colors: ['#764ee3']
          },    
          tooltip: {
            enabled: false,
          },
          grid: {
            show: true,
            borderColor: '#90A4AE',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },   
            yaxis: {
                lines: {
                    show: false
                }
            },  
            row: {
                colors: undefined,
                opacity: 0.1
            },  
            column: {
                colors: undefined,
                opacity: 0.1
            },  
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, 
          },
          chart: {
            height: 350,
            type: 'line',
            sparkline: {
                enabled: true
              }
          },
          stroke: {
            width: 2,
            curve: 'smooth',
            show: true,
            curve: 'smooth',
            colors: ["#72D2CF"],
            width: 2,
            dashArray: 0,      
          },
          xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000'],
            tickAmount: 10,
          },
        },
    })
    return (
        <div className="MapSameLocation">
            <div className="MO_Header_boxMaskTexture MapSameLocation_boxMask ">

            </div>
            <div className="MOSameLocation_Header">
                <div className={["MOSameLocation_FirstChar",props.numbers>20 && props.numbers<40 ? "MapSameMarkerBlue" :props.numbers>40? "MapSameMarkerRed":"" ].join(" ")}>
                    {props.location.charAt(0)}
                </div>
                <div className="MOSameLocation_TitleLoc">
                    <span>{props.location}</span>
                    <div className="MOSameLocation_Loc">
                        <div className="MOSameLocation_locIcon">
                        <IoLocationOutline />
                        </div>

                        <span>{props.latitude}°N , {props.longitude}°E</span>
                    </div>

                </div>

            </div>
            <div className="MOSameLocation_result">
                    <div className="MOSameLocation_NumberContainer">
                        <span>تکرار امروز</span>
                        <span className="MOSameLocation_dataNumber">{props.TodayData}</span>
                    </div>
                    {/*
                    <div className="MOSameLocation_raise ">
                        <span>{props.TodayRaise} </span>
                        {
                            props.TodayRaising ?
                            <BsFillArrowUpRightCircleFill className="MOSameLocation_raiseIcon"/>
                            :
                            <BsArrowDownRightCircleFill className="MOSameLocation_raiseIcon KP_Fall "/>
                        }
                    </div>
                  */}
                  <div className="MOSameLocation_raiseBox">
                        <div className="MOSameLocation_raiseNumberBox">
                            <span className="MOSameLocation_raiseTitle">رشد</span>
                            <span className={["MOSameLocation_raiseNumber",!props.TodayRaising? "MOSameLocation_raiseNumberRed":""].join(" ")}>{props.TodayRaise}</span>
                        </div>
                        <div className="MOSameLocation_raiseChart">
                            <Chart options={ChartData.options} series={ChartData.series} type="line" height={"100%"} />
                        </div>
                  </div>
            </div>
        </div>
    )
}

export default MapSameLocation
