import React from 'react'
import './DataPage.css'
import DP_Chart from './DP_Chart/DP_Chart'
import DP_Footer from './DP_Footer/DP_Footer'

function DataPage() {
    return (
        <div className='DataPage'>
            <DP_Chart/>
            <DP_Footer/>
        </div>
    )
}

export default DataPage
