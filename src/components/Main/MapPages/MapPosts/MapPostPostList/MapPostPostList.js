import { Avatar } from '@material-ui/core'
import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
import { BsFillRssFill, BsTelegram } from 'react-icons/bs'
import './MapPostPostList.css'
function MapPostPostList(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        console.log('hiee');
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };
    return (
        <div>
            <div onClick={handleOpen} className={["KP_PostShowMapBox",props.social === 1 ?"instagramThemeKPPostMapBox"  :props.social === 2 ?'twitterThemeKPPostMapBox' :props.social===3 ? 'rssThemeKPPostMapBox' :"telegramThemeKPPostMapBox"].join(" ")}>
            <div className="PostCo_KP">
                <div className="imageContainerKP_Post"><Avatar className="postImageAvatarKP" src={props.image} alt={props.alt}/></div>
                <div className="postContent_KP">
                    <h5>{props.title}</h5>
                    <p>{props.summary}</p>
                </div>
            </div>
            <div className="poster_KP_Post">
                <div classNam="poster_KP_avatar"><Avatar className="postUserAvatarKP" src={props.avatar} alt={props.alt}/></div>
                <div className="poster_KP_Content">
                    <h4>{props.username}</h4>
                </div>
            </div>
            <div className="post_KP_topFive">
                <div className="chip_keywoard_post">{props.top[0]}</div>
                <div className="chip_keywoard_post">{props.top[1]}</div>
                <div className="chip_keywoard_post">{props.top[2]}</div>
                <div className="chip_keywoard_post">{props.top[3]}</div>
            </div>
            <div className="postIcon_KP">
                {props.social === 1 ? 
                    <AiFillInstagram className="KPWidget_shaypoorIconMapBox "/>  : props.social === 2 ? 
                    <AiFillTwitterCircle className="KPWidget_twitterIconMapBox "/>  : props.social === 3  ? 
                    <BiRss className="KPWidget_rssIconMapBox "/>: <BsTelegram className="KPWidget_telegramIconMapBox" style={{fontSize:'22px'}}/>}
            </div>
        </div>
        </div>
        
    )
}

export default MapPostPostList
