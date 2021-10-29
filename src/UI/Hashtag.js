import React from 'react'
import Chip from '@material-ui/core/Chip';
import './Hashtag.css'
function Hashtag(props) {
    return (
        <div className="HashtagDiv" style = {{marginTop:props.marginTop,backgroundColor:props.backGroundColor ?props.backGroundColor :"rgb(248, 248, 248)", fontSize : props.fontSize ? props.fontSize : "7px" , padding :props.padding ? props.padding:"3px 3px" , margin: props.margin}}>
             <span style={{color:props.color ? props.color:'rgb(133, 133, 133)' , margin:props.marginS , padding : props.paddingS}}>افغانستان</span>
        </div>
    )
}

export default Hashtag
