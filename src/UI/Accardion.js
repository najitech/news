import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import PropTypes from "prop-types";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './Accardion.css'
const styles = theme => ({
  root: {
    width: "100%",
    borderRadius : "50px",
    padding:"0px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    margin : "0px 0px",
  },
  expanded: {
    "&$expanded":{
      margin : "0px 0px",
    }
  },
  hideBorder: {
    '&.MuiExpansionPanel-root:before': {
      display: 'none',
    },
  },
});
function Accardion(props) {
    const {classes} = props;
    return (
      <ExpansionPanel className={props.off ? "acc" : ""} classes={{ expanded: classes.expanded }}>
        <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{props.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={props.off ? "acc" : ""}>
            {props.children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
}
Accardion.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Accardion);
