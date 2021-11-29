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
                <KP_Header_box type="instagram" todayRaising todayData="12.543K" todayRaise="1.482K" weekData="90.426K" weekRaise="5.921K"/>
                <KP_Header_box type="telegram" todayRaising todayData="16.294K" todayRaise="4.983K" weekData="120.256K" weekRaise="12.742K"/>
                <KP_Header_box type="rss" todayData="18.327K" todayRaise="4.532K" weekRaising weekData="88.216K" weekRaise="7.319K"/>
                <KP_Header_box type="twitter" weekRaising todayData="9.342K" todayRaise="1.321K" weekData="70.326K" weekRaise="3.471K"/>
                <KP_Header_box type="instagram"todayRaising todayData="20.935K" todayRaise="3.429K" weekData="128.866K" weekRaise="8.439K"/>
            </div>

        </div>
    )
}

export default KP_Header
