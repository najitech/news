import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import PropTypes from "prop-types";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './AccardionPS.css';
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  hideBorder: {
    '&.MuiExpansionPanel-root:before': {
        display : 'none',
    },
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
function AccardionPS(props) {
    
    const classes = useStyles();
    return (
      <ExpansionPanel className={[props.off ? "accPS" :props.marg?  "marg" :'' , 'marginPS'  , 'boxShadowAccPS' , classes.hideBorder].join(" ")} classes={{ expanded: classes.expanded }}>
        <ExpansionPanelSummary className="marginPS extentionPSLIne"  expandIcon={<ExpandMoreIcon style={{color: props.instagram ? "#9938A3" :props.telegram? '#1E96D2' : props.twitter ? "#36D8FF" : props.rss ? "#EF824E" : '#36D8FF',fontSize:'21px'}}/>}>
          <Typography className="fontAccardionPS">{props.title}</Typography>
          <hr className={props.instagram ? "extentionPSLIneInstagram" :props.twitter ?  "extentionPSLIneTwitter" : props.rss ? 'extentionPSLIneRss' : 'extentionPSLIneTelegram'}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={props.off ? "accPS" :props.marg ? "marg" : ""}>
            {props.children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
}
AccardionPS.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (AccardionPS);
