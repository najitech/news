import { Avatar } from '@material-ui/core'
import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFillRssFill, BsTelegram } from 'react-icons/bs'
import './KP_BF_PostShow.css'
function KP_BF_PostShow(props) {
    return (
        <div className={["KP_PostShow",props.social === 1 ?"instagramThemeKPPost"  :props.social === 2 ?'twitterThemeKPPost' :props.social===3 ? 'rssThemeKPPost' :"telegramThemeKPPost"].join(" ")}>
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
            <div className="postIcon_KP">
                {props.social === 1 ? <AiFillInstagram/> : props.social === 2 ? <AiFillTwitterCircle/> : props.social === 3  ? <BsFillRssFill/> : <BsTelegram/>}
            </div>
        </div>
    )
}

export default KP_BF_PostShow
