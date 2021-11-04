import React , {useState} from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { FaRssSquare, FaTelegram } from 'react-icons/fa';
import './PSR_Feed.css'
import PSR_Posts from './PSR_Posts/PSR_Posts';
import PSR_TopSlider from './PSR_TopSlider/PSR_TopSlider'
import {DiGhostSmall} from 'react-icons/di'
import TempDrawerPS from '../../../../../UI/TempDrawerPS'

function PSR_Feed() {

    const [social , handleSocial] = useState(1);
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
        case 5:
            borderColor= 'telegram_border_color';
            break;
    }
    
    
    return (
        <div className="PSR_Feed">
            <PSR_TopSlider/>
            <div className="PSR_TopFeedContainer"> 
                <TempDrawerPS>

                </TempDrawerPS>    
                <div className={["PSR_toggle" , borderColor].join(" ")}>
                    <div onClick={()=>{handleSelect(5)}} className={["PSR_telegram_proSearch_type" , social ===5  ? "PSR_telegram_active_prosearch" : " "].join(" ")}>
                        <DiGhostSmall className="PSR_socialMediaIconsProSearch"/>
                        <span>همه</span>
                    </div>
                    <div onClick={()=>{handleSelect(1)}} className={["PSR_instagram_proSearch_type",social === 1 ?"PSR_instagram_active_prosearch" : " " ].join(" ")}>
                        <AiFillInstagram className="PSR_socialMediaIconsProSearch"/>
                        <span>اینستاگرام</span>
                    </div>
                    <div onClick={()=>{handleSelect(2)}} className={["PSR_twitter_proSearch_type " ,social===2  ? "PSR_twitter_active_prosearch" :" "].join(" ")}>
                        <AiFillTwitterCircle className="PSR_socialMediaIconsProSearch"/>
                        <span>توییتر</span>
                    </div>  
                    <div onClick={()=>{handleSelect(3)}} className={["PSR_rss_proSearch_type" , social===3 ? "PSR_rss_active_prosearch" : " "].join(" ")}>
                        <FaRssSquare className="PSR_socialMediaIconsProSearch"/>
                        <span>خبرخوان</span>
                    </div>
                    <div onClick={()=>{handleSelect(4)}} className={["PSR_telegram_proSearch_type" , social ===4  ? "PSR_telegram_active_prosearch" : " "].join(" ")}>
                        <FaTelegram className="PSR_socialMediaIconsProSearch"/>
                        <span>تلگرام</span>
                    </div>
                </div>
            </div>  
            <PSR_Posts type={social===1 ? "instagram" : social===2? "twitter" : social===3? "rss" : social ===4? "telegram" : social===5? "all" : ""}/>
        </div>
    )
}

export default PSR_Feed
