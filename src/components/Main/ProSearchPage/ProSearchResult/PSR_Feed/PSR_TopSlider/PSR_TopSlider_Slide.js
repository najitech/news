import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import {FaRss, FaRssSquare, FaTelegram,FaTelegramPlane } from 'react-icons/fa'
import {SiRss} from 'react-icons/si'
import TelegramIcon from '@material-ui/icons/Telegram';
import {BiRss} from 'react-icons/bi'
import {FiRss} from 'react-icons/fi'
import './PSR_TopSlider_Slide.css'

function PSR_TopSlider_Slide(props) {
    let TopSliderColor = "PSR_TopSlider_instagram"
    if (props.type==="twitter") {
        TopSliderColor = "PSR_TopSlider_twitter"
    }
    else if (props.type==="telegram"){
        TopSliderColor = "PSR_TopSlider_telegram"
    }
    else if (props.type==="rss") {
        TopSliderColor = "PSR_TopSlider_rss"
    }
    return (
        <div className="PSR_TopSlider_Slide">
            <div className={["TopSlider_top" , TopSliderColor].join(" ")}>
            </div>

            <div className="Slide_typeIconContainer">
                {
                    props.type==="telegram" ?
                    <FaTelegramPlane className="Slide_telegramIcon"/> :
                    props.type==="instagram" ?
                    <AiFillInstagram className="Slide_instgramIcon"/> :
                    props.type==="twitter" ? 
                    <AiFillTwitterCircle className="Slide_twitterIcon"/> :
                    props.type==="rss" ?
                    <BiRss className="Slide_rssIcon"/> :
                    null
                }

            </div>
        </div>
    )
}

export default PSR_TopSlider_Slide
