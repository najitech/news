import React, { useState } from 'react'
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import './SortsRss.css';
import {MdSort} from 'react-icons/md'
import SortItems from './SortItems';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useMediaQuery } from '@material-ui/core';
import {BiSortUp} from 'react-icons/bi'
function SortsRss(props) {
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
    const buttonName = ['جدید ترین' , 'قدیمی ترین' , 'پربازدید ترین' , 'کم بازدید ترین'];
    return (    
        <div className="SortsRss">

            <ToggleButtonGroup  className="togSort" value={props.view} exclusive onChange={props.handleChange}>
            <ToggleButton   size="small" value="list" aria-label="list">
                <ViewListIcon />
            </ToggleButton>
            <ToggleButton  size="small" value="module" aria-label="module">
                <ViewModuleIcon />
            </ToggleButton>
            </ToggleButtonGroup>

            <div className="barAsasRss">   
                <MdSort className="sortIconRss"/>
                <p>مرتب سازی بر اساس :  </p>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>{buttonName[sortType-1]}<BiSortUp style={{fontSize:22 ,paddingRight:'5px' , color:  'rgb(60,60,60)'}} /></Button>
                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem value={1} onClick={handleClose}>جدید ترین</MenuItem>
                <MenuItem value={2} onClick={handleClose}>قدیمی ترین</MenuItem>
                <MenuItem value={3} onClick={handleClose}>پربازدید ترین</MenuItem>
                <MenuItem value={4} onClick={handleClose}>کم بازدید ترین</MenuItem>
            </Menu>
               </div>
        </div>
    )
}

export default SortsRss
