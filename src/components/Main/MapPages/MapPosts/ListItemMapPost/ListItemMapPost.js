import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, makeStyles, Typography, Button, Avatar } from '@material-ui/core'
import React from 'react'
import './ListItemMapPost.css'
import {AiFillEye, AiFillInstagram, AiFillTwitterCircle, AiOutlinePlusCircle, AiOutlineSearch} from 'react-icons/ai'
import {BsFillRssFill, BsTelegram} from 'react-icons/bs';
import {GoKey} from 'react-icons/go'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { GiTrumpet } from 'react-icons/gi';
import { BiRss } from 'react-icons/bi';
import {IoNewspaperOutline} from 'react-icons/io5'
import { FaTelegramPlane } from 'react-icons/fa';
function nFormatter(num) {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}
const useStyles = makeStyles({
    hideBorder: {
      '&.MuiExpansionPanel-root:before': {
          display : 'none',
      },
        borderRadius : '10px',
        boxShadow : 'none',
        borderBottom : 'none',
        '&:before': {
          display: 'none',
        },
        '&$expanded': {
          margin: 'auto',
        },
      expanded: {},
    },
  })
function ListItemMapPost(props) {
    
    const classes = useStyles();
    return (
        <div className="mapBox_ListItem">
            <ExpansionPanel defaultExpanded={props.first} className={[props.off ? "acc" : "" , 'margin'  , 'boxShadowAcc',props.rad ? "kpACCcoMapBox" : '' , classes.hideBorder, props.first ?'firstRadListItemMapBox' : ''].join(" ")} classes={{ expanded: classes.expanded }}>
                <ExpansionPanelSummary className="margin back">
                <div className="fontAccardion headAccMapPost">
                    <div className="extenKPCo">
                        <div className="keyContainerLP">
                            <div className="holerepeatListKPMapBox">
                                <div className={["locationAvatarListShow", `locationAvatarStyle${props.index%4+1}`].join(" ")}>{props.title[0]}</div><div style={{marginRight:"-20px",display:'flex',textAlign:'right',alignItems:'center',flexDirection:'column'}}><h4 style={{fontWeight:'bold' , textShadow:'1px 1px 1px 1px grey'}}>{props.title}</h4><span>{nFormatter(parseInt(props.sum))}</span></div>
                            </div>
                        </div>
                        <div style={{marginRight:'190px'}} className="HeaderInfListMapPost shaypoorThemePostMapList">
                                <div classNam=""><GiTrumpet className="headIconSocialMapPost"/></div>
                                <div className="headInfSocialMapPost">
                                    <h4>{nFormatter(parseInt(props.instagram))}</h4>
                                    <span>شیپور</span>
                                </div>
                        </div>
                        <div className="HeaderInfListMapPost twitterThemePostMapList">
                                <div classNam=""><AiFillTwitterCircle className="headIconSocialMapPost"/></div>
                                <div className="headInfSocialMapPost">
                                    <h4>{nFormatter(parseInt(props.twitter))}</h4>
                                    <span>تلگرام</span>
                                </div>
                        </div>
                        <div className="HeaderInfListMapPost rssThemePostMapList">
                                <div classNam=""><BiRss className="headIconSocialMapPost"/></div>
                                <div className="headInfSocialMapPost">
                                    <h4>{nFormatter(parseInt(props.rss))}</h4>
                                    <span>خبرخوان</span>
                                </div>
                        </div>
                        <div className="HeaderInfListMapPost telegramThemePostMapList">
                                <div classNam=""><FaTelegramPlane className="headIconSocialMapPost"/></div>
                                <div className="headInfSocialMapPost">
                                    <h4>{nFormatter(parseInt(props.telegram))}</h4>
                                    <span>تلگرام</span>
                                </div>
                        </div>
                        <div className="HeaderInfListMapPost newsPaperThemePostMapList">
                                <div classNam=""><IoNewspaperOutline className="headIconSocialMapPost"/></div>
                                <div className="headInfSocialMapPost">
                                    <h4>{nFormatter(parseInt(props.instagram))}</h4>
                                    <span>روزنامه</span>
                                </div>
                        </div>            
                    </div>
                </div>
                </ExpansionPanelSummary>
                <hr/>
                <ExpansionPanelDetails className={props.off ? "acc" : "" , 'margin'}>
                        {props.children}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

export default ListItemMapPost
