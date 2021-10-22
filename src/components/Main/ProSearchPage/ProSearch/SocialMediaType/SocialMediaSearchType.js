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
    return (
        <div className={["socialMediaSearch" , borderColor].join(" ")}>
            <div onClick={()=>{handleSelect(1)}} className={["instagram_proSearch_type",social === 1 ?"instagram_active_prosearch" : " " ].join(" ")}>
                <AiFillInstagram className="socialMediaIconsProSearch"/>
                <span>اینستاگرام</span>
            </div>
            <div onClick={()=>{handleSelect(2)}} className={["twitter_proSearch_type " ,social===2  ? "twitter_active_prosearch" :" "].join(" ")}>
                <AiFillTwitterCircle className="socialMediaIconsProSearch"/>
                <span>توییتر</span>
            </div>  
            <div onClick={()=>{handleSelect(3)}} className={["rss_proSearch_type" , social===3 ? "rss_active_prosearch" : " "].join(" ")}>
                <FaRssSquare className="socialMediaIconsProSearch"/>
                <span>خبرخوان</span>
            </div>
            <div onClick={()=>{handleSelect(4)}} className={["telegram_proSearch_type" , social ===4  ? "telegram_active_prosearch" : " "].join(" ")}>
                <FaTelegram className="socialMediaIconsProSearch"/>
                <span>تلگرام</span>
            </div>
        </div>
    )
}

export default SocialMediaSearchType
