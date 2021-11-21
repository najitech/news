import React,{useState} from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
import {BsArrowDownRightCircleFill,BsFillArrowUpRightCircleFill} from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import './KP_Header_box.css'
import Chart from "react-apexcharts";

function KP_Header_box(props) {

    const [chartCircle2 , setChartCircle2] = useState({     
        series: [{
          name: 'Sales',
          data: [7, 19, 5, 13, 9, 17, 5]
        }],
        options: {
          fill: {
            colors: ['#764ee3']
          }, 
          chart: {
            offsetY:-50,
          },        
        tooltip: {
            enabled: false,
        },   
          legend : {
              show :false,
          },
          markers: {
            size: 0,
            colors: undefined,
            strokeColors: '#fff',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            showNullDataPoints: true,
            hover: {
              size: undefined,
              sizeOffset: 3
            }
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
            colors: ["#764ee3"],
            width: 2,
            dashArray: 0,      
          },
        },
    });


    let TopKPColor = "KP_TopSlider_instagram"
    let KP_Header_BorderIcon ="KP_Header_TelegrambBorder"
    let header ="اینستاگرام"
    let KP_HeaderBox_color = "KP_Header_box_Instagram";
    if (props.type==="twitter") {
        TopKPColor = "KP_TopSlider_twitter"
        header ="توییتر"
        KP_HeaderBox_color = "KP_Header_box_Twitter";
    }
    else if (props.type==="telegram"){
        TopKPColor = "KP_TopSlider_telegram"
        header ="تلگرام"
        KP_HeaderBox_color = "KP_Header_box_Telegram";
    }
    else if (props.type==="rss") {
        TopKPColor = "KP_TopSlider_rss"
        header ="خبرگزاری"
        KP_HeaderBox_color = "KP_Header_box_Rss";
    }
    return (
        <div className={["KP_Header_box" , KP_HeaderBox_color].join(" ")}>
            <div className="ContainerAbsolute">
            <div className={["KP_typeIconContainer"].join(" ")}>
                <div className={["KP_Icon",TopKPColor].join(" ")}>
                    {
                        props.type==="telegram" ?
                        <FaTelegramPlane className="KP_telegramIcon"/> :
                        props.type==="instagram" ?
                        <AiFillInstagram className="KP_instgramIcon"/> :
                        props.type==="twitter" ? 
                        <AiFillTwitterCircle className="KP_twitterIcon"/> :
                        props.type==="rss" ?
                        <BiRss className="KP_rssIcon"/> :
                        null
                    }
                </div>
                <span className="KP_HeaderBox_TitleSource">
                    {
                        props.type==="telegram" ?
                        "Telegram" :
                        props.type==="instagram" ?
                        "Instagram" :
                        props.type==="twitter" ? 
                        "Twitter" :
                        props.type==="rss" ?
                        "Rss" :
                        null
                    }
                </span>
            </div>

            <div className="KP_HeaderBox_TodayResult">
                <span>کلمات کلیدی دریافتی امروز </span>
                <div className="KP_TodayResultFooter">
                    <span className="KP_HeaderBox_dataNumber">{props.todayData}</span>
                    <div className="KP_HeaderBox_raise">
                        <span>{props.todayRaise} </span>
                        {
                            props.todayRaising ?
                            <BsFillArrowUpRightCircleFill className="KP_Box_raiseIcon"/>
                            :
                            <BsArrowDownRightCircleFill className="KP_Box_raiseIcon  KP_Fall"/>
                        }
                    </div>

                </div>

            </div>
            <div className="KP_HeaderBox_WeekResult">
            <span>کلمات کلیدی دریافتی هفته </span>
            <div className="KP_TodayResultFooter">
                    <span className="KP_HeaderBox_dataNumber">{props.weekData}</span>
                    <div className="KP_HeaderBox_raise ">
                        <span>{props.weekRaise} </span>
                        {
                            props.weekRaising ?
                            <BsFillArrowUpRightCircleFill className="KP_Box_raiseIcon"/>
                            :
                            <BsArrowDownRightCircleFill className="KP_Box_raiseIcon KP_Fall "/>
                        }
                    </div>

            </div>
            </div>
            </div>
        </div>
    )
}

export default KP_Header_box
