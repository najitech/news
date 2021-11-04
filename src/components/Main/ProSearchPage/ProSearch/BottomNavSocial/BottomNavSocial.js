import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { FaRssSquare, FaTelegram } from 'react-icons/fa';
import './BottomNavSocial.css'
const useStyles = makeStyles({
});

export default function BottomNavSocial(props) {
  const classes = useStyles();
  const {social , handleSocial} = props;
  const handleSelect = (e)=>{
      handleSocial(e);
  }
  return (
    <BottomNavigation
      value={social}
      onChange={(event, newValue) => {
        handleSelect(newValue);
      }} className={[classes.root , "navigationBottomPS"].join(" ")}>
      <BottomNavigationAction className="instagramNavBotton" value={1} label="Instagram" icon={<AiFillInstagram className="iconNavBottom"/>} />
      <BottomNavigationAction className="twitterNavBottom" value={2} label="Twitter" icon={<AiFillTwitterCircle className="iconNavBottom"/>} />
      <BottomNavigationAction className="rssNavBottom" value={3} label="Rss" icon={<FaRssSquare className="iconNavBottom"/>} />
      <BottomNavigationAction className="telegramNavBottom" value={4} label="Telegram" icon={<FaTelegram className="iconNavBottom"/>} />
    </BottomNavigation>
  );
}