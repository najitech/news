import React from 'react'
import './Positiveness.css'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {FaBalanceScale} from 'react-icons/fa';
import {BsCircle} from 'react-icons/bs';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles({
  root: {
    width: 500,
    "&$selected": {
      color: "white"
    }
  },
  selected: {
    color: "white"
 }
});

function Positiveness() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [alignment, setAlignment] = React.useState('left');
    const handleAlignment = (event, newAlignment) => {
      if (newAlignment !== null) {
        setAlignment(newAlignment);
      }
    };
  
  
    return (
        <div className="Positive">
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            className="Positive_toggle"
          >
            <ToggleButton className="Positive_box" value="left" aria-label="left aligned">
              <RemoveCircleIcon className="Remove"/>
            </ToggleButton>
            <ToggleButton className="Positive_box" value="center" aria-label="centered">
             <RadioButtonCheckedIcon/>
            </ToggleButton>
            <ToggleButton  className="Positive_box" value="right" aria-label="right aligned">
              <AddCircleIcon/>
            </ToggleButton>
          </ToggleButtonGroup>
          {alignment=== "left" ?
            <p className="Positive_negetive"> منفی</p> :
            alignment==="center"?
            <p className="Positive_none"> همه</p> :
            alignment==="right" ?
            <p className="Positive_Positive"> مثبت</p> :
            null
          }
    
        </div>
    )
}

export default Positiveness
