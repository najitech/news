import React from 'react'
import './DA5_4Categories.css'
import DA5_Box from './DA5_Box'


function DA5_4Categories() {
    let BoxItems = [
        {
            title:"سیاسی",
            number:118682,
            percent:"20%"
        },
        {
            title:"اجتماعی",
            number:18453,
            percent:"17%" 
        },
        {
            title:"هنری",
            number:126934,
            percent:"8%"
        },
        {
            title:"ورزشی",
            number:51573,
            percent:"27%"
        },
        {
            title:"علمی",
            number:8632,
            percent:"21%"
        },
        {
            title:"فرهنگی",
            number:108352,
            percent:"8%"
        },
        {
            title:"هنری",
            number:126934,
            percent:"8%"
        },
        {
            title:"ورزشی",
            number:51573,
            percent:"27%"
        },
    ]
    return (
        <div className='DA5'>
            <DA5_Box type="low" count={45000} title="کم تکرار" BoxItems={BoxItems.slice(0,6)}/>
            <DA5_Box type="medium" count={34263} title="نسبتا پر تکرار" BoxItems={BoxItems.slice(0,3)}/>
            <DA5_Box type="high" count={8352} title="پر تکرار" BoxItems={BoxItems.slice(0,8)} />
            <DA5_Box type="veryHigh" count={13000} title="بسیار پر تکرار" BoxItems={BoxItems.slice(0,6)} />
        </div>
    )
}

export default DA5_4Categories
