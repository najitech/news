import React from 'react';
import './PostGrid.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PostTags from './PostTags';
import ModalPost from './ModalPost';
import PostHashtags from './PostHashtags';
import {TiKey} from 'react-icons/ti'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      boxShadow : '0.0px 0.3px 2px 0.3px rgb(220 , 220 , 220)'
    },
    media: {
      height: 140,
    },
  });

function Post(props) {
    const classes = useStyles();
    const postdate = new Date(props.publish_date);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };
      let bordercolor = "Post_border_red";
      if (props.good){
        bordercolor="Post_border_green";
      }

    return (
        <div  className="Post">

            {/*<div className="Post_image">
                <img src={props.image} alt="image" />
            </div>
            <div className="Post_container">
                <h3>
                    <a href={props.link}>{props.title}</a>
                </h3>
                <p>{props.news_text}</p>
            </div>
            <div className="Post_footer">
                {postdate.toLocaleString()}
            </div>
            */}

            <ModalPost  open={open} setOpen={setOpen} image={props.image} title={props.title} text={props.news_text} publish_date={props.publish_date} handleClose={handleClose} PostProps={props} />
            <Card onClick={handleOpen}  className={classes.root ,"Post_card"}>
                <CardActionArea className="postBody">
                    <CardMedia
                    className={[classes.media , "PostGrid_image"].join(" ") }
                    image={props.image}
                    title={props.title}
                    />
                    <CardContent>
                    <Typography className={["Post_title",bordercolor].join(" ")} gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography className="Post_news_text" variant="body2" color="textSecondary" component="p">
                        {props.news_text}
                    </Typography>
                    </CardContent>
                    <div className="PostGrid_Tag_Date">
                      <PostTags/>
                      
                    </div>

                    <div className="Post_footer">
                        <p> کلمات کلیدی : </p>
                        <PostHashtags/>
                    </div>

                </CardActionArea>

            </Card>           
        </div>
    )
}

export default Post