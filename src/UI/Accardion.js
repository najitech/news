import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import PropTypes from "prop-types";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './Accardion.css';
import { makeStyles } from "@material-ui/styles";
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
function Accardion(props) {
    const classes = useStyles();
    return (
      <ExpansionPanel className={props.off ? "acc" : "" , 'margin' , classes.hideBorder} classes={{ expanded: classes.expanded }}>
        <ExpansionPanelSummary className="margin"  expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{props.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={props.off ? "acc" : "" , 'margin'}>
            {props.children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
}
Accardion.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (Accardion);
