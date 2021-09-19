import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
  
function Navbar() {
    const classes = useStyles();
    return (
      <div className={classes.root , 'Navbar'}>
        <AppBar className="AppBar" position="static">
          <Toolbar className="AppBar" variant="dense">
              <div>
                <Link className="navLink" to="/">Home</Link>
              </div>
              <div>
                <Link className="navLink" to="/RSS">RSS</Link>
              </div>
              <div>
                <Link className="navLink" to="/Twitter">Twitter</Link>
              </div>
          </Toolbar>
          
        </AppBar>
      </div>
    )
}

export default Navbar
