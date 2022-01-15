import React from 'react'
import './DA5_BoxItem.css'

function DA5_BoxItem(props) {
    return (
        <div className='DA5_BoxItem'>
            <div className='DA5_BoxItemHeader'>
                <span className='DA5_BoxItemTitle'>{props.title}</span>
                <span className='DA5_BoxItemNumber'>{props.number}</span>
            </div>
            <div className='DA5_BoxItemBarContainer'>
                <div className='DA5_BoxItemBar' style={{width : props.percent}}>

                </div>
            </div>
        </div>
    )
}

export default DA5_BoxItem
