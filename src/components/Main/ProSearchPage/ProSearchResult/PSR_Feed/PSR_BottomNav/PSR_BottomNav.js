import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { FaRssSquare, FaTelegram } from 'react-icons/fa';
import './PSR_BottomNav.css'
import { DiGhostSmall } from 'react-icons/di';
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
      }} className={[classes.root , "PSR_navigationBottomPS"].join(" ")}>
      <BottomNavigationAction className="PSR_telegramNavBottom" value={5} label="همه" icon={<DiGhostSmall className="PSR_iconNavBottom"/>} />
      <BottomNavigationAction className="PSR_instagramNavBotton" value={1} label="Instagram" icon={<AiFillInstagram className="PSR_iconNavBottom"/>} />
      <BottomNavigationAction className="PSR_twitterNavBottom" value={2} label="Twitter" icon={<AiFillTwitterCircle className="PSR_iconNavBottom"/>} />
      <BottomNavigationAction className="PSR_rssNavBottom" value={3} label="Rss" icon={<FaRssSquare className="PSR_iconNavBottom"/>} />
      <BottomNavigationAction className="PSR_telegramNavBottom" value={4} label="Telegram" icon={<FaTelegram className="PSR_iconNavBottom"/>} />
    </BottomNavigation>
  );
}