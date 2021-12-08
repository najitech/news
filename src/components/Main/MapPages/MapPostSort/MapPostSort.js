import React, { useState } from 'react'
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import './MapPostSort.css';
import {MdSort} from 'react-icons/md'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useMediaQuery } from 'react-responsive';
import {BiSortUp} from 'react-icons/bi'
import KP_BF_SortItem from './MapPostSortItem';
function MapPostSort(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const [sortType , setSortType] = useState(1);
    const handleClose = (e) => {
        console.log(e.target.value);
      if(e.target.value === undefined)
      {
          setAnchorEl(null);
          return;
      }
      setSortType(e.target.value);
      setAnchorEl(null);
    };
    const mobileSize = useMediaQuery({query :'(max-width : 580px)'});
    const buttonName = ['نام' , 'جدید ترین' , 'بیشترین داده' , 'پربازدیدترین '];
    return (    
        <div className="PSR_Sort_KP">
            <div className="KP_Sortasas">   
                <MdSort className="KP_sortIconRss" color={props.social===1? "#764ee3" : props.social===2? "#16b8e0" :props.social===3?"#f26522 " :props.social===4?"#4abcf5" :props.social===5?"#4abcf5" : ""}/>
                <p>مرتب سازی بر اساس :  </p>
                {!mobileSize ? 
                <KP_BF_SortItem/>
                :<>
                <Button aria-controls="simple-menu" className="KP_menuButton" aria-haspopup="true" onClick={handleClick}>{buttonName[sortType-1]}<BiSortUp className="PSR_menuButton" style={{fontSize:22 ,paddingRight:'5px' , color:  'rgb(60,60,60)'}} /></Button>
                <Menu
                className="hi10"
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                <MenuItem value={1} className="KP_menuButton" onClick={handleClose}>نام</MenuItem>
                <MenuItem value={2}  className="KP_menuButton" onClick={handleClose}>جدید ترین</MenuItem>
                <MenuItem value={3} className="KP_menuButton" onClick={handleClose}>بیشترین داده</MenuItem>
                <MenuItem value={4} className="KP_menuButton" onClick={handleClose}>پربازدیدترین</MenuItem>
                </Menu>
            </>
                }
               </div>
        </div>
    )
}

export default MapPostSort;
