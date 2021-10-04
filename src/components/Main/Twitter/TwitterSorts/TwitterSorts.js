import React ,{useState} from 'react'
import './TwitterSorts.css'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {BiSortUp} from 'react-icons/bi'
import {MdSort} from 'react-icons/md'

function TwitterSorts() {
    const [sortType , setSortType] = useState(1);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
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

        <div className="SortsTwitter">
            <MdSort className="sortIconTwitter"/>
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
    )
}

export default TwitterSorts
