import { Avatar } from '@material-ui/core'
import React from 'react'
import './MapPostShowItem.css'
import Tag from '../../../../UI/Tag';
function MapPostShowItem(props) {
    return (
        <div className="mapPostItemMapBox">
            <div className="postHeaderItemMap">
                <div className="profilePostItemMap">
                    <div className="avatarPostItemMap"><Avatar src={props.image} alt={props.alt}/></div>
                    <div className="infPostItemMap"><h5>{props.title}</h5><p>{props.text}</p></div>
                </div>
                <div className="typeSocialPostItemMap">
                    <div className="socialMediaPostItem"></div>
                    <div className="typeSocialPostItem"></div>
                    <div className="type2SocialPostItem"></div>
                </div>
            </div>
            <div className="postFeedItemMap">
                <div className="keywoardsPostItemMap"><Tag text="کلمه کلیدی 1"/><Tag text="کلمه کلیدی 2"/><Tag text="کلمه کلیدی 3"/><Tag text="کلمه کلیدی 4"/></div>
                <div className="nerPostItemMap"><Tag text="موجودیت  1"/><Tag text="موجودیت  2"/><Tag text="موجودیت  3"/><Tag text="موجودیت  4"/></div>
                <div className="catPostItemMap"><Tag text=" موضوع 1"/><Tag text=" موضوع 2"/><Tag text="موضوع  3"/><Tag text="موضوع  4"/></div>
            </div>
        </div>
    )
}

export default MapPostShowItem
