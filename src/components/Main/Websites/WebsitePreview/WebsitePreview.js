import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './WebsitePreview.css'
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import RssFeedIcon from '@material-ui/icons/RssFeed';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

function WebsitePreview() {
    const classes = useStyles();
    return (
        <div className="WebsitePreview">
            <Avatar className="WebsitePreview_avatar"  src="https://upload.wikimedia.org/wikipedia/commons/e/e9/ISNA_logo.jpg" className="WebsitePreview_avatar" >R</Avatar>
            <div className="WebsitePreview_header">
                <h4 className="WebsitePreview_title">خبرگزاری ایسنا</h4>
            </div>
            <Button
                variant="contained"
                color="primary"
                className={[classes.button , "WebsitePreview_button"].join(" ")}

            >
                <div className="WebsitePreview_buttonContent">
                    <RssFeedIcon className="WebsitePreview_buttonIcon" />
                    <p>مشاهده ی اخبار {"ایسنا"}</p>
                </div>
            </Button>
            <div className="ٌWebsitePreview_chartContent">
            
            </div>
        </div>
    )
}

export default WebsitePreview
