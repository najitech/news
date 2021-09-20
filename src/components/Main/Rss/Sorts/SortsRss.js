import React from 'react'
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import './SortsRss.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


function SortsRss() {
    const [view, setView] = React.useState('list');

    const handleChange = (event, nextView) => {
      setView(nextView);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (    
        <div className="SortsRss">
            <ToggleButtonGroup  className="togSort" value={view} exclusive onChange={handleChange}>
            <ToggleButton   size="small" value="list" aria-label="list">
                <ViewListIcon />
            </ToggleButton>
            <ToggleButton  size="small" value="module" aria-label="module">
                <ViewModuleIcon />
            </ToggleButton>
            </ToggleButtonGroup>
            <div>
                <Button className="sortSelectBtn" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Open Menu
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
               </div>
        </div>
    )
}

export default SortsRss
