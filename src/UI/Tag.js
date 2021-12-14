import React from 'react'
import './Tag.css'
function Tag(props) {
    return (
        <div className='Tag' style = {{marginTop:props.marginTop,backgroundColor:props.backGroundColor, fontSize : props.fontSize ? props.fontSize : "9.4px" , padding :props.padding , margin: props.margin,width:props.width ? props.width :''}}>
            <p style={{color:props.color , margin:props.marginP , padding : props.paddingP ,fontSize : props.fontSize ? props.fontSize : "9.4px" }}>{props.text}</p>
        </div>
    )
}

export default Tag
