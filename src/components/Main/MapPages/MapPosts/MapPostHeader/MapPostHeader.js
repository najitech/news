import { Button } from '@material-ui/core';
import { IconButton } from 'material-ui';
import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsCalendar4 } from 'react-icons/bs'
import './MapPostHeader.css'
function MapPostHeader(props) {
    let currentDate = new Date();
    return (
        <div className="mapPostHeader">
            <div className="headerContentPostMap">
                <div className="headerTitlesMapPost">
                    <h1>عنوان صفحه</h1>
                    <p>توضیحات مربوط به صفحه در این قسمت قرار میگیرد</p>
                </div>
                <div className="timeAndCalMapPost">
                    <div>
                        <BsCalendar4 className="headerIconPostMap"/>
                        <span>{currentDate.getDay()+"/"+currentDate.getMonth() +"/"+currentDate.getFullYear()}</span>
                    </div>
                    <div>
                        <AiOutlineClockCircle className="headerIconPostMap2"/>
                        <span>{currentDate.getHours()+":"+currentDate.getMinutes()}</span>
                    </div>
                    <div>
                        <button className="buttonStyleMapPost"><BiSearchAlt2/></button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default MapPostHeader
