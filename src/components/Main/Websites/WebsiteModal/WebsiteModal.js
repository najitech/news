import { Fade, Modal } from '@material-ui/core'
import React , {useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import './WebsiteModal.css'
import Backdrop from '@material-ui/core/Backdrop';
import WebsitePreview from '../WebsitePreview/WebsitePreview'
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

function WebsiteModal(props) {
  const classes = useStyles();
    return (
        <div className="websiteModalContainer">
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={[classes.modal ,"ModalPost3"].join(" ")}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableEnforceFocus
      >
        <Fade in={props.open}>
            <WebsitePreview title={props.title} image={props.image}/>
        </Fade>
      </Modal>
        </div>
    )
}

export default WebsiteModal
