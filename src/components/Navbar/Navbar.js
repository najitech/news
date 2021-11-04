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
import { AiOutlineSearch } from 'react-icons/ai';
import {MdDarkMode} from 'react-icons/md'
import {BsSunFill} from 'react-icons/bs'
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
      path: '/Wesites',
      exact: true
    });
    let item4 = useRouteMatch({
      path :'/ProSearch',
      exact: true
    })
    const myLink = useRef();
    return (
      <div className={[classes.root , 'Navbar' ,'noselect']}>
        <AppBar  position="static">
          <Toolbar className="AppBar" variant="dense">
            <Link className="navLink1" to="/">  
              <div className={[item1 ? 'activeBar1' : "",'divNavRes'].join(" ")}>
                    <MdDashboard className="navIcon" style={{color : "#F50057"}}/>
                    <Link className="navLink1 navlinkres" to="/">داشبورد</Link>
                  </div> 
            </Link>
            <Link className="navLink2" to="/RSS">
              <div className={[item2 ? 'activeBar2' : "",'divNavRes'].join(" ")}>
                    <FaRssSquare className="navIcon" style={{color:"#F38203"}}/>
                    <Link className="navLink2 navlinkres" to="/RSS">خبرخوان</Link>
                </div>  
            </Link>
            <Link className="navLink3" to="/Websites">
              <div className={[item3 ? 'activeBar3' : "" , 'divNavRes'].join(" ")}>
                  <IoNewspaperOutline className="navIcon"  style={{color:"#24E5A4"}}/>
                  <Link className="navLink3 navlinkres" to="/Websites">خبرگزاری ها</Link>
                </div>
            </Link>
            <Link className="navLink4" to="/ProSearch">
              <div className={[item4 ? 'activeBar4' : "",'divNavRes'].join(" ")}>
                  <AiOutlineSearch className="navIcon"  style={{color:"#764ee3"}}/>
                  <Link className="navLink4 navlinkres" to="/ProSearch">جستجوی پیشرفته</Link>
                </div>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Navbar
