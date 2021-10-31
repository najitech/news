import React from 'react'
import Chip from '@material-ui/core/Chip';
import './Hashtag2.css'
import {HiOutlineHashtag} from 'react-icons/hi'

function Hashtag2(props) {
    return (
        <div className="Hashtag2Container" style = {{marginTop:props.marginTop,backgroundColor:props.backGroundColor ?props.backGroundColor :"rgb(248, 248, 248)", fontSize : props.fontSize ? props.fontSize : "9px" , padding :props.padding ? props.padding:"3px 3px" , margin: props.margin}}>
            <span className="Hashtag2Span" style={{ margin:props.marginS,color : props.color , padding : props.paddingS}}># هشتگ</span>
        </div>
    )
}

export default Hashtag2
