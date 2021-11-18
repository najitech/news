import React from 'react'
import './KP_Header.css'
import KP_Header_box from './KP_Header_box'

function KP_Header() {
    return (
        <div className="KP_Header">
            <div className="KP_TopHeader">
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
