import React from 'react'
import './KP_Header.css'
import KP_Header_box from './KP_Header_box'

function KP_Header() {
    return (
        <div className="KP_Header">
            <div className="KP_TopHeader">
                <h3>کلمات کلیدی</h3>
                <p>به بخش کلمات کلیدی سایت خوش آمدید. در این بخش می توانید کلمات کلیدی در منابع مختلف در ساعات خاص مشاهده کنید</p>
            </div>
            <div className="KP_FooterHeader">
            </div>
            <div className="KP_BottomHeader">
                <KP_Header_box type="instagram"/>
                <KP_Header_box type="telegram"/>
                <KP_Header_box type="rss"/>
                <KP_Header_box type="twitter"/>
                <KP_Header_box type="instagram"/>
            </div>

        </div>
    )
}

export default KP_Header
