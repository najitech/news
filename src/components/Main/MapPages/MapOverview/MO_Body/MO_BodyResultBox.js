import React from 'react'
import './MO_BodyResultBox.css'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
import {ImNewspaper} from 'react-icons/im'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsArrowDownRightCircleFill, BsFillArrowUpRightCircleFill } from 'react-icons/bs'

function MO_BodyResultBox(props) {
    return (
        <div className="MO_BodyResultBox">
            <div className={["MOresult_Icon"].join(" ")}>
                {
                    props.type==="telegram" ?
                    <FaTelegramPlane className="MOresult_telegramIcon"/> :
                    props.type==="instagram" ?
                    <AiFillInstagram className="MOresult_instgramIcon"/> :
                    props.type==="twitter" ? 
                    <AiFillTwitterCircle className="MOresult_twitterIcon"/> :
                    props.type==="rss" ?
                    <BiRss className="MOresult_rssIcon"/> :
                    props.type==="paper" ?
                    <ImNewspaper className="MOresult_paperIcon" /> :
                    null
                }
            </div> 
            <span className="MOresult_Title">موقعیت های مکانی دریافتی هفته</span>
            <div className="MOresult_WeekResultFooter">
                    <span className="MOresult_HeaderBox_dataNumber">{props.weekData}</span>
                    <div className="MOresult_HeaderBox_raise ">
                        <span>{props.weekRaise} </span>
                        {
                            props.weekRaising ?
                            <BsFillArrowUpRightCircleFill className="MOresult_Box_raiseIcon"/>
                            :
                            <BsArrowDownRightCircleFill className="MOresult_Box_raiseIcon KP_Fall "/>
                        }
                    </div>

            </div>
        </div>
    )
}

export default MO_BodyResultBox
