import React,{useState} from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
import {BsArrowDownRightCircleFill,BsFillArrowUpRightCircleFill} from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import './KP_Header_box.css'
import Chart from "react-apexcharts";

function KP_Header_box(props) {

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
