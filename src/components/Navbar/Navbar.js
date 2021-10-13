import React, {useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './Navbar.css'
import {Link ,useRouteMatch} from 'react-router-dom'
import {MdDashboard} from 'react-icons/md'
import {FaRssSquare ,FaTwitter} from 'react-icons/fa'
import {IoNewspaperOutline} from 'react-icons/io5'
import '../../UI/Styles.css';
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
    let item1 = useRouteMatch({
      path: '/',
      exact: true
    });
    let item2 = useRouteMatch({
      path: '/RSS',
      exact: true
    });
    let item3 = useRouteMatch({
      path: '/Twitter',
      exact: true
    });
    const myLink = useRef();
    return (
      <div className={[classes.root , 'Navbar' ,'noselect']}>
        <AppBar  position="static">
          <Toolbar className="AppBar" variant="dense">
            <Link className="navLink1" to="/">  
              <div className={item1 ? 'activeBar1' : ""}>
                    <MdDashboard className="navIcon" style={{color : "#F50057"}}/>
                    <Link className="navLink1 navlinkres" to="/">داشبورد</Link>
                  </div> 
            </Link>
            <Link className="navLink2" to="/RSS">
              <div className={item2 ? 'activeBar2' : ""}>
                    <FaRssSquare className="navIcon" style={{color:"#F38203"}}/>
                    <Link className="navLink2 navlinkres" to="/RSS">خبرخوان</Link>
                </div>  
            </Link>
            <Link className="navLink3" to="/Twitter">
              <div className={item3 ? 'activeBar' : ""}>
                  <IoNewspaperOutline className="navIcon"  style={{color:"#24E5A4"}}/>
                  <Link className="navLink3 navlinkres" to="/Twitter">خبرگزاری ها</Link>
                </div>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Navbar
