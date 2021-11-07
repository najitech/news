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
import { Badge } from '@material-ui/core';
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
        
        
      <BottomNavigationAction className="instagramNavBotton" value={1} label="Instagram" icon={<Badge overlap="circular" badgeContent={props.isMark[0]} color="secondary"><AiFillInstagram className="iconNavBottom"/> </Badge>} />
      <BottomNavigationAction className="twitterNavBottom" value={2} label="Twitter" icon={<Badge overlap="circular" badgeContent={props.isMark[1]}  color="secondary"><AiFillTwitterCircle className="iconNavBottom"/> </Badge>}/>
      <BottomNavigationAction className="rssNavBottom" value={3} label="Rss" icon={<Badge overlap="circular" badgeContent={props.isMark[2]}  color="secondary"><FaRssSquare className="iconNavBottom"/> </Badge> } />
      <BottomNavigationAction className="telegramNavBottom" value={4} label="Telegram" icon={<Badge overlap="circular" badgeContent={props.isMark[3]}  color="secondary"><FaTelegram className="iconNavBottom"/></Badge>} />
    </BottomNavigation>
  );
}