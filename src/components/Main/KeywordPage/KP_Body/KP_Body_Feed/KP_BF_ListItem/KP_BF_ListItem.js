import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, makeStyles, Typography, Button } from '@material-ui/core'
import React from 'react'
import './KP_BF_ListItem.css'
import {AiFillEye, AiFillInstagram, AiFillTwitterCircle, AiOutlinePlusCircle, AiOutlineSearch} from 'react-icons/ai'
import {BsFillRssFill, BsTelegram} from 'react-icons/bs';
import {GoKey} from 'react-icons/go'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
function KP_BF_ListItem(props) {
    
    const classes = useStyles();
    return (
        <div className="KP_ListItem">
            <ExpansionPanel defaultExpanded={props.first} className={[props.off ? "acc" : "" , 'margin'  , 'boxShadowAcc',props.rad ? "kpACCco" : '' , classes.hideBorder, props.first ?'firstRadListItem' : ''].join(" ")} classes={{ expanded: classes.expanded }}>
                <ExpansionPanelSummary className="margin back" expandIcon={<AiOutlinePlusCircle />}>
                <div className="fontAccardion headAccKP">
                    <div className="extenKPCo">
                        <div className="keyContainerLP">
                            <div className="holerepeatListKP">
                                <h4 style={{fontWeight:'bold' , textShadow:'1px 1px 1px 1px grey'}}>{props.title}</h4>
                            </div>
                        </div>
                        <div className="numShowHList instagram_NumACCHead">
                            
                            <span>{nFormatter(parseInt(props.instagram))}</span>
                        </div>
                        <div className="numShowHList twitter_NumACCHead">
                            
                            <span>{nFormatter(parseInt(props.twitter))}</span>
                        </div>
                        <div className="numShowHList rss_NumACCHead">
                         
                            <span>{nFormatter(parseInt(props.rss))}</span>
                        </div>
                        <div className="numShowHList telegram_NumACCHead">
                           
                            <span>{nFormatter(parseInt(props.telegram))}</span>
                        </div>
                        <div className="sumNumKPlist">
                            <span><span style={{fontWeight:'bold',textAlign:'center' , color:'#764ee3',paddingRight:'15px',paddingLeft:'15px' ,borderBottom:'1px solid #764ee341'}}>{nFormatter(parseInt(props.sum))}</span></span>
                        </div>
                        <div className="openExtentionBtn">
                        </div>
                        <div className="">
                            <Button className="extBtnKP"><AiFillEye style={{fontSize:'22px' , paddingLeft:'3px'}}/>جستجوی پست ها</Button>
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

export default KP_BF_ListItem
