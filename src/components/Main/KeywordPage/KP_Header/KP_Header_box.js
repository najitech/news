import React,{useState} from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
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
    if (props.type==="twitter") {
        TopKPColor = "KP_TopSlider_twitter"
        header ="توییتر"
    }
    else if (props.type==="telegram"){
        TopKPColor = "KP_TopSlider_telegram"
        header ="تلگرام"
    }
    else if (props.type==="rss") {
        TopKPColor = "KP_TopSlider_rss"
        header ="خبرگزاری"
    }
    return (
        <div className={["KP_Header_box"].join(" ")}>
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

            </div>

            <div className="KP_HeaderBox_DataResultContainer">
                <div className="KP_HeaderBox_TodayResult">
                    <span>داده ی امروز </span>
                    <span className="KP_HeaderBox_dataNumber">34.324K</span>
                </div>
                <div className="KP_HeaderBox_WeekResult">
                <span>داده های هفته </span>
                <span className="KP_HeaderBox_dataNumber">5434.3K</span>
                </div>
            </div>
            <Chart className="KP_Header_TopSlider_chart" options={chartCircle2.options} series={chartCircle2.series} type="line" height={50} width={190}/>
        </div>
    )
}

export default KP_Header_box
