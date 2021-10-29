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
      <ExpansionPanel className={[props.off ? "accPS" : "" , 'marginPS'  , 'boxShadowAccPS' , classes.hideBorder].join(" ")} classes={{ expanded: classes.expanded }}>
        <ExpansionPanelSummary className="marginPS extentionPSLIne"  expandIcon={<ExpandMoreIcon style={{color: '#6442c4',fontSize:'20px'}}/>}>
          <Typography className="fontAccardionPS">{props.title}</Typography>
          <hr className="extentionPSLIne"/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={props.off ? "accPS" : "" , 'marginPS'}>
            {props.children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
}
AccardionPS.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (AccardionPS);
