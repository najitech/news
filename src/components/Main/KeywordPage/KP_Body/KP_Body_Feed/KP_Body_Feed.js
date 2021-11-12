import React from 'react'
import KP_BF_chart from './KP_BF_chart'
import './KP_Body_Feed.css'

function KP_Body_Feed() {
    return (
        <div className="KP_Body_Feed"> 
            <KP_BF_chart/>
            <div className="KP_BF_list">
                <h2>list</h2>
            </div>
        </div>
    )
}

export default KP_Body_Feed
