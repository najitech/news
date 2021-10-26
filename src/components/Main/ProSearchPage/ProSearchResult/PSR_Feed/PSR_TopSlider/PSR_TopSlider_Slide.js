import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { FaRssSquare, FaTelegram } from 'react-icons/fa'
import {BsTelegram} from 'react-icons/bs'
import './PSR_TopSlider_Slide.css'

function PSR_TopSlider_Slide(props) {
    return (
        <div className="PSR_TopSlider_Slide">
            <div className="TopSlider_top">
            </div>

            <div className="Slide_typeIconContainer">
                {
                    props.type==="telegram" ?
                    <BsTelegram className="Slide_typeIcon"/> :
                    props.type==="instagram" ?
                    <AiFillInstagram className="Slide_typeIcon"/> :
                    props.type==="twitter" ? 
                    <AiFillTwitterCircle className="Slide_typeIcon"/> :
                    props.type==="rss" ?
                    <FaRssSquare className="Slide_typeIcon"/> :
                    null
                }

            </div>
        </div>
    )
}

export default PSR_TopSlider_Slide
