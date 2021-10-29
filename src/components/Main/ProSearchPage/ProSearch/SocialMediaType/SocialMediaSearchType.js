import { Badge } from '@material-ui/core';
import React from 'react'
import {   AiFillInstagram ,AiFillTwitterCircle} from 'react-icons/ai';
import {FaTelegram ,FaRssSquare} from 'react-icons/fa'
import './SocialMediaSearch.css';
function SocialMediaSearchType(props) {
    const {social , handleSocial} = props;
    const handleSelect = (e)=>{
        handleSocial(e);
    }
    let borderColor;
    // eslint-disable-next-line default-case
    switch(social)
    {
        case 1:
            borderColor= 'instagram_border_color';
            break;
        case 2:
            borderColor= 'twitter_border_color';
            break;
        case 4:
            borderColor= 'telegram_border_color';
            break;
        case 3:
            borderColor= 'rss_border_color';
    }
    console.log(props.isMark)
    return (
        <div className={["socialMediaSearch" , borderColor].join(" ")}>
            <div onClick={()=>{handleSelect(1)}} className={["instagram_proSearch_type",social === 1 ?"instagram_active_prosearch" : " " ].join(" ")}>
                { !props.isMark[0]  ?<AiFillInstagram className="socialMediaIconsProSearch"/>: 
                <Badge  overlap="circular" variant="dot"  color="secondary">
                <AiFillInstagram className="socialMediaIconsProSearch"/>
                </Badge> }
                
                <span>اینستاگرام</span>
            </div>
            <div onClick={()=>{handleSelect(2)}} className={["twitter_proSearch_type " ,social===2  ? "twitter_active_prosearch" :" "].join(" ")}>
                {!props.isMark[1] ?<AiFillTwitterCircle className="socialMediaIconsProSearch"/>: 
                <Badge  overlap="circular" variant="dot"  color="secondary">
                <AiFillTwitterCircle className="socialMediaIconsProSearch"/>
                </Badge> }
                <span>توییتر</span>
            </div>  
            <div onClick={()=>{handleSelect(3)}} className={["rss_proSearch_type" , social===3 ? "rss_active_prosearch" : " "].join(" ")}>
                { !props.isMark[2] ?<FaRssSquare className="socialMediaIconsProSearch"/>: 
                <Badge overlap="circular" variant="dot" color="secondary">
                <FaRssSquare className="socialMediaIconsProSearch"/>
                </Badge> }
                <span>خبرخوان</span>
            </div>
            <div onClick={()=>{handleSelect(4)}} className={["telegram_proSearch_type" , social ===4  ? "telegram_active_prosearch" : " "].join(" ")}>
                {!props.isMark[3]  ?<FaTelegram className="socialMediaIconsProSearch"/>: 
                <Badge  overlap="circular" variant="dot"  color="secondary">
                <FaTelegram className="socialMediaIconsProSearch"/>
                </Badge> }
                <span>تلگرام</span>
            </div>
        </div>
    )
}

export default SocialMediaSearchType
