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
    return (
        <div className="Positive">
            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              showLabels
              className={classes.root , "Positive_nav"}
            >
              <BottomNavigationAction className="bt" icon={<AddCircleIcon className="Positive_item Positive_positive"/>} />
              <BottomNavigationAction  icon={<RadioButtonCheckedIcon className="Positive_item Positive_normal"/>} />
              <BottomNavigationAction icon={<RemoveCircleIcon className="Positive_item Positive_negetive"/>} />
            </BottomNavigation>
        </div>
    )
}

export default Positiveness
