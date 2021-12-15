import React from 'react'
import './MO_BodyResultBox.css'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
import {ImNewspaper} from 'react-icons/im'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsArrowDownRightCircleFill, BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { useMediaQuery } from 'react-responsive'

function MO_BodyResultBox(props) {
    let q1145 = useMediaQuery({query :'(max-width : 1145px)'}); 
    let q1163 = useMediaQuery({query :'(max-width : 1163px)'}); 
    let q952 = useMediaQuery({query :'(max-width : 952px)'}); 
    let q770 = useMediaQuery({query :'(max-width : 770px)'}); 
    if (q770){
        q952=false;
        q1163=false;
        q1145=false;
    }
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
            <span className="MOresult_Title">{!q1163 ?"موقعیت های مکانی دریافتی هفته" : "دریافتی های هفته"}</span>
            <div className="MOresult_WeekResultFooter">
                    <span className="MOresult_HeaderBox_dataNumber">{!q1145?props.weekData : props.weekData.split('.')[0]}K</span>
                    <div className="MOresult_HeaderBox_raise ">
                        <span>{!q952?props.weekRaise : props.weekRaise.split('.')[0]}K </span>
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
