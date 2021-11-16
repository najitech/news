import { Avatar } from '@material-ui/core'
import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFillRssFill, BsTelegram } from 'react-icons/bs'
import KP_BF_ModalP from '../KP_BF_ModalP/KP_BF_ModalP'
import './KP_BF_PostShow.css'
function KP_BF_PostShow(props) {
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
            <KP_BF_ModalP open={open} top={props.top} social={props.social} image={props.image} alt={props.alt} title={props.title} text={props.summary} username={props.username} avatar={props.avatar}  setOpen={setOpen} handleClose={handleClose}/>
            <div onClick={handleOpen} className={["KP_PostShow",props.social === 1 ?"instagramThemeKPPost"  :props.social === 2 ?'twitterThemeKPPost' :props.social===3 ? 'rssThemeKPPost' :"telegramThemeKPPost"].join(" ")}>
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
                <div className="chip_keywoard_post">{props.top[4]}</div>
            </div>
            <div className="postIcon_KP">
                {props.social === 1 ? <AiFillInstagram/> : props.social === 2 ? <AiFillTwitterCircle/> : props.social === 3  ? <BsFillRssFill/> : <BsTelegram/>}
            </div>
        </div>
        </div>
        
    )
}

export default KP_BF_PostShow
