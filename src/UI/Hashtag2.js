import React from 'react'
import Chip from '@material-ui/core/Chip';
import './Hashtag2.css'
import {HiOutlineHashtag} from 'react-icons/hi'

function Hashtag2(props) {
    return (
        <div className="Hashtag2Container" style = {{marginTop:props.marginTop,backgroundColor:props.backGroundColor ?props.backGroundColor :"rgb(248, 248, 248)", fontSize : props.fontSize ? props.fontSize : "9px" , padding :props.padding ? props.padding:"3px 3px" , margin: props.margin}}>
            <span style={{color:props.color ? props.color:'rgb(133, 133, 133)' , margin:props.marginS , padding : props.paddingS}}># هشتگ</span>
        </div>
    )
}

export default Hashtag2
