import React from 'react'
import './Tag.css'
function Tag(props) {
    return (
        <div className='Tag' style = {{backgroundColor:props.backGroundColor, fontSize : props.fontSize ? props.fontSize : "9.4px" , padding :props.padding , margin: props.margin}}>
            <p>{props.text}</p>
        </div>
    )
}

export default Tag
