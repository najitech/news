import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import React from 'react'
import { AiOutlineKey  ,AiFillInstagram ,AiFillTwitterCircle} from 'react-icons/ai';
import {FaTelegram ,FaRssSquare} from 'react-icons/fa'
import './SocialMediaSearch.css';
function SocialMediaSearchType(props) {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    
    return (
        <div className="socialMediaSearch">
            <div className="instagram_proSearch_type">
                <AiFillInstagram/>
                <span>اینستاگرام</span>
            </div>
            <div className="twitter_proSearch_type">
                <AiFillTwitterCircle/>
                <span>توییتر</span>
            </div>
            <div className="telegram_proSearch_type">
                <FaTelegram/>
                <span>تلگرام</span>
            </div>
            <div className="rss_proSearch_type">
                <FaRssSquare/>
                <span>خبرخوان</span>
            </div>
        </div>
    )
}

export default SocialMediaSearchType
