import { Avatar, Backdrop, Fade, ListItemAvatar, makeStyles, Modal } from '@material-ui/core'
import { createStyles } from '@material-ui/styles';
import React from 'react'
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
                <div className="modalKPPost">
                  <div>
                    <div className="modalPostImage_KP"><img src={props.image} alt={props.alt}/></div>
                    <div className="modalPostContent_KP">
                      <h4>{props.title}</h4>
                      <p>{props.text}</p>
                    </div>
                  </div>
                  
                  <div className="modalPostKPUserContainer">
                    <div className="modalPostAvatar_KP"><Avatar src={props.avatar}/></div>
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
