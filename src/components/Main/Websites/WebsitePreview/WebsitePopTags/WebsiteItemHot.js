import React from 'react'
import { AiFillTag } from 'react-icons/ai'
import './WebsiteItemHot.css'
function WebsiteItemHot(props) {
    return (
        <div className="webSiteHotItem">
            <AiFillTag className="hottagIcon"/>
            <span>{props.tag}</span>
        </div>
    )
}

export default WebsiteItemHot
