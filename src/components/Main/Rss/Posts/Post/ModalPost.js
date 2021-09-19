import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './ModalPost.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export default function ModalPost(props) {
  const classes = useStyles();
  const {PostProps} = props ;
  console.log(PostProps)



  return (
    <div className="ModalPost">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal ,"ModalPost" }
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper }>
            <img className="ModalPost_image" src ={PostProps.image}/>
            <h2 className="ModalPost_title" id="transition-modal-title">{PostProps.title}</h2>
            <p className="ModalPost_text" id="transition-modal-description">{PostProps.news_text}</p>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}