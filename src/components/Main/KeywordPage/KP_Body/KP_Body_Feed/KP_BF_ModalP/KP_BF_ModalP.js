import { Avatar, Backdrop, Fade, ListItemAvatar, makeStyles, Modal } from '@material-ui/core'
import { createStyles } from '@material-ui/styles';
import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFillRssFill, BsTelegram } from 'react-icons/bs';
import './KP_BF_ModalP.css';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      height : '100%',
      borderRadius : 5,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
    },
  }),
);

function KP_BF_ModalP(props) {
    const classes = useStyles();
    return (
        <div>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        className={[classes.modal ,"ModalPost2"].join(" ")}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableEnforceFocus
      >
            <Fade in={props.open}>
                <div className={["modalKPPost",props.social === 1 ?"instagramThemeKPPost"  :props.social === 2 ?'twitterThemeKPPost' :props.social===3 ? 'rssThemeKPPost' :"telegramThemeKPPost"].join(" ")}>
                  <div style={{flex:'0.5'}}>
                    <div className="modalPostKPContent_Container">
                      <div className="modalPostContent_KP">
                        <h4>{props.title}
                        <span className="iconPostModalKP">
                {props.social === 1 ? <AiFillInstagram/> : props.social === 2 ? <AiFillTwitterCircle/> : props.social === 3  ? <BsFillRssFill/> : <BsTelegram/>}</span></h4>
                        <p>{props.text}</p>
                      </div>
                    </div>
                  </div>
                  <div style={{flex:'0.5'}}><img width="100%" className="modalPostImage_KP" src={props.image} alt={props.alt}/></div>
                  
                  <div className="modalPostKPUserContainer">
                      <div><Avatar className="modalPostAvatar_KP" src={props.avatar}/></div>
                      <div className="usernamePostModal_KP">
                        <h5>{props.username}</h5>
                      </div>
                    </div>
                </div>
            </Fade>
      </Modal>
        </div>
    )
}

export default KP_BF_ModalP
