import React,{useState} from 'react'
import './MO_Header_box.css'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
import {ImNewspaper} from 'react-icons/im'
import { FaTelegramPlane } from 'react-icons/fa'
import Chart from 'react-apexcharts'
import { BsArrowDownRightCircleFill, BsFillArrowUpRightCircleFill } from 'react-icons/bs'

function MO_Header_box(props) {
    let chartcolor="#e1306c"
    let MO_HeaderBox_color = "MO_Header_box_Instagram";
    let TopMOColor = "MO_TopSlider_instagram"
    if (props.type==="twitter") {
        MO_HeaderBox_color = "MO_Header_box_Twitter";
        TopMOColor = "MO_TopSlider_twitter";
        chartcolor="#00ACEE";
    }
    else if (props.type==="telegram"){
        MO_HeaderBox_color = "MO_Header_box_Telegram";
        TopMOColor = "MO_TopSlider_telegram";
        chartcolor="#11cbfa";
    }
    else if (props.type==="rss") {
        MO_HeaderBox_color = "MO_Header_box_Rss";
        TopMOColor = "MO_TopSlider_rss"
        chartcolor="#EDAA27";
    }
    else if (props.type==="paper") {
        MO_HeaderBox_color = "MO_Header_box_Paper";
        TopMOColor = "MO_TopSlider_paper"
        chartcolor="rgba(81,214,168,1)"
    }
    const [chart , setchart] = useState({
            series: [75],
            options: {
              chart: {
                height: 70,
                type: 'radialBar',
                toolbar: {
                  show: false,
                  tools: {
                    download: false
                  },
                },
              },
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 225,
                   hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                      enabled: true,
                      top: 3,
                      left: 0,
                      blur: 4,
                      opacity: 0.24
                    }
                  },
                  track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                      enabled: true,
                      top: -3,
                      left: 0,
                      blur: 4,
                      opacity: 0.35
                    }
                  },
              
                  dataLabels: {
                    show: true,
                    name: {
                      
                      show: true,
                      color: '#888',
                      fontSize: '9.5px'
                    },
                    value: {
                      formatter: function(val) {
                        return parseInt(val)+'%';
                      },
                      offsetY: -13,
                      color: '#111',
                      fontSize: '10px',
                      show: true,
                    }
                  }
                }
              },
              fill: {
                colors: [chartcolor],
              },
              stroke: {
                lineCap: 'round'
              },
              labels: [''],
            },
    })

    return (
        <div className={["MO_Header_box",MO_HeaderBox_color].join(" ")}>
            <div className="MO_Header_boxMask">

            </div>
            <div className="MO_HeaderboxHeader">
                <div className="MO_HeaderboxChart">
                    <div className="MOChart2">
                      <Chart options={chart.options} series={chart.series} type="radialBar" height={110} />
                    </div>
                </div>          
                <div className={["MO_typeIconContainer"].join(" ")}>
                    <div className={["MO_Icon"].join(" ")}>
                        {
                            props.type==="telegram" ?
                            <FaTelegramPlane className="MO_telegramIcon"/> :
                            props.type==="instagram" ?
                            <AiFillInstagram className="MO_instgramIcon"/> :
                            props.type==="twitter" ? 
                            <AiFillTwitterCircle className="MO_twitterIcon"/> :
                            props.type==="rss" ?
                            <BiRss className="MO_rssIcon"/> :
                            props.type==="paper" ?
                            <ImNewspaper className="MO_paperIcon" /> :
                            null
                        }
                    </div>
                    <span className="MO_HeaderBox_TitleSource">
                        {
                            props.type==="telegram" ?
                            <span className="MO_telegramIcon">تلگرام </span> :
                            props.type==="instagram" ?
                            <span className="MO_instgramIcon">اینستاگرام </span>:
                            props.type==="twitter" ? 
                            <span className="MO_twitterIcon">توییتر </span> :
                            props.type==="rss" ?
                            <span className="MO_rssIcon">خبرخوان </span> :
                            props.type==="paper" ?
                            <span className="MO_paperIcon">روزنامه </span> :
                            null
                        }
                    </span>
                </div>

            </div>
            <div className="MO_Header_BoxFooter">
                  <span className="MO_Header_TodayNumber">
                        345,684
                  </span>
                  <span className="MO_Header_TodayTitle">
                        موقعیت های مکانی دریافتی امروز
                  </span>
            </div>
        </div>
    )
}

export default MO_Header_box
