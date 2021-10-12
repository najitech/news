import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import './PostList.css'
import PostHashtags from '../../PostGrids/Post/PostHashtags';
import PostListTags from './PostListTags';
import PostListHashtags from './PostListHashtags';
import ModalPost from '../../PostGrids/Post/ModalPost';
import Hashtag2 from '../../../../../../UI/Hashtag2';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '10px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: "70%"
  },
  content: {
  
  },
  cover: {
    width: '30%',

  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent : 'space-between',
    marginTop:'18px',
    alignItems:'center',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const publishDate = new Date(props.publish_date);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
    };

  const handleClose = () => {
      setOpen(false);
    };
  return (
    <div className="PostList">
      <ModalPost open={open} setOpen={setOpen} image={props.image} title={props.title} text={props.news_text} publish_date={props.publish_date} handleClose={handleClose} PostProps={props} />
      <Card className={[classes.root ,'PostListCard'].join(" ") } onClick={handleOpen}>
      <CardMedia
          className={[classes.cover , "PostList_image"].join(" ")}
          image={props.image}
          title="Live from space album cover"
        />

        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className="PostList_header">
              <Typography className="PostList_title" >
                  {props.title}
              </Typography>
              <PostListTags/>
            </div>
            <Typography variant='string' className="PolstList_news_text ">
              {props.news_text}
            </Typography>
            <div className={classes.controls}>
              <div className="PostList_keywords">
                <p className="PostList_keywords_title">کلمات کلیدی :</p>
                <PostListHashtags/>
              </div>
              <p className="PostList_date">{publishDate.toDateString()}</p>
            </div>
            <div className="Ner">
                        <div className="Ner_Persons Ner_box">
                          <span>اشخاص : </span>
                          <span> علی، حسین، حسین، تقی</span>
                        </div>
                        <div className="Ner_locations Ner_box">
                          <span>اماکن :</span>
                          <span>مشهد، تهران ، تبریز، اصفهان</span>
                        </div>
                        <div className="Ner_times Ner_box">
                           <span>زمان :</span>
                           <span> اربعین، روز معلم،روز زن</span>
                        </div>
            </div>
            <div className="Postlist_Hashtags2">
                  <Hashtag2/>
                  <Hashtag2/>
                  <Hashtag2/>
                  <Hashtag2/>
                  <Hashtag2/>
            </div>
          </CardContent>


        </div>
  
      </Card>
    </div>
  );
}