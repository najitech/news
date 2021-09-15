import React from 'react';
import './Post.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PostTags from './PostTags'


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function Post(props) {
    const classes = useStyles();
    const postdate = new Date(props.publish_date);
    return (
        <div className="Post">
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
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                    />
                    <PostTags/>
                    <CardContent>
                    <Typography className="Post_title" gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography className="Post_news_text" variant="body2" color="textSecondary" component="p">
                        {props.news_text}
                    </Typography>
                    </CardContent>

                </CardActionArea>

            </Card>           
        </div>
    )
}

export default Post