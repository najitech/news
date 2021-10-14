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
import { useMediaQuery } from 'react-responsive'
import ModalPost from './ModalPost';
import PostHashtags from './PostHashtags';
import {TiKey} from 'react-icons/ti'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import ModalResponsive from './ModalResponsive/ModalResponsive';
import Hashtag2 from '../../../../../../UI/Hashtag2';
import { MdWeb } from 'react-icons/md';
import {IoBookmarkSharp} from 'react-icons/io5'
const theme = createTheme();

theme.typography= {
  fontSize: '15px',
  '@media screen and (min-width:1000px)': {
    fontSize: '10px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      height:360,
      boxShadow : '0.0px 0.3px 2px 0.3px rgb(220 , 220 , 220)'
    },
    media: {
      height: 155,
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
    const isMobileScreen = useMediaQuery({query :'(max-width : 1000px)'});
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
            {!isMobileScreen ? 
                <ModalPost  open={open} setOpen={setOpen} image={props.image} positiveness={10} title={props.title} text={props.news_text} publish_date={props.publish_date} handleClose={handleClose} PostProps={props} />
             :
             <ModalResponsive  open={open} setOpen={setOpen} image={props.image} positiveness={10} title={props.title} text={props.news_text} publish_date={props.publish_date} handleClose={handleClose} PostProps={props} />
             }
             <Card onClick={handleOpen}  className={classes.root ,"Post_card"}>
                <div className="PostGrid_site">  
                        <MdWeb/>
                        <p>خبرگزاری تسنیم</p>
                </div>
                <CardActionArea className="postBody">
                    <CardMedia
                    className={[classes.media , "PostGrid_image"].join(" ") }
                    image={props.image}
                    title={props.title}
                    />
                    <CardContent className="CardContent">
                    <ThemeProvider theme={theme}>
                      <Typography className={["Post_title",bordercolor].join(" ")} gutterBottom>
                          {props.title}
                      </Typography>
                    </ThemeProvider>
                    <Typography className="Post_news_text" variant="body2" color="textSecondary" component="p">
                        {props.news_text}
                    </Typography>
                    </CardContent>
                    <div>
                      <div className="PostGrid_Tag_Date">
     
                      </div>
                      <PostTags/> 
                    <div className="PostGrid_HashtagsContainer">
                      <div className="Post_footer">
                            <p className="Post_footer_title"> کلمات کلیدی : </p>
                            <PostHashtags/>
                        </div>
                        <p className="Post_footer_date"> {postdate.toDateString()}</p>
                    </div>


                    </div>
                    <div className="Hashtags2">
                        <Hashtag2/>
                        <Hashtag2/>
                        <Hashtag2/>
                        <Hashtag2/>
                        <Hashtag2 className="Hashtag2_lastchild"/>
                    </div>

                </CardActionArea>

            </Card>           
        </div>
    )
}

export default Post