import React from 'react'
import './Tag.css'
function Tag(props) {
    return (
        <div className='Tag' style = {{backgroundColor:props.backGroundColor}}>
            <p>{props.text}</p>
        </div>
    )
}

export default Tag
