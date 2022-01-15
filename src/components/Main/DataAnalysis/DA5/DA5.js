import React from 'react'
import './DA5.css'
import DA5_Box from './DA5_Box'

function DA5() {
    return (
        <div className='DA5'>
            <DA5_Box type="low" count={45000} title="کم تکرار"/>
            <DA5_Box type="medium" count={34263} title="نسبتا پر تکرار" />
            <DA5_Box type="high" count={8352} title="پر تکرار" />
            <DA5_Box type="veryHigh" count={13000} title="بسیار پر تکرار" />
        </div>
    )
}

export default DA5
