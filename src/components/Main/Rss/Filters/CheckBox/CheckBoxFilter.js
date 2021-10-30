import { FormControl, FormControlLabel, FormGroup, Switch, Typography } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { withStyles } from '@material-ui/styles';
import React from 'react'
const PurpleSwitch = withStyles({
    switchBase: {
      color: "#764ee3",
      '&$checked': {
        color: "#764ee3",
      },
      '&$checked + $track': {
        backgroundColor:" #764ee3",
      },
    },
    checked: {},
    track: {},
  })(Switch);
function CheckBoxFilter(props) {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: true,
      });
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
      return (
        <FormControl className={"SitesFilter"} component="fieldset">
          <FormGroup className={props.dark ?"siteFilterDarkThem":""}>
            <div className="siteOption">
              <FormControlLabel className={props.dark ? "siteFilterItemDark" : "siteFilterSwitch"}
                label={<Typography className="switchsiteFilterLabel">عکس دار </Typography>}
                control={props.dark ? <PurpleSwitch checked={state.gilad} className="sitesFilterLabel" size="small"  onChange={handleChange} name="gilad"/> :<Switch checked={state.gilad} className="sitesFilterLabel" size="small"  onChange={handleChange} name="gilad" />}
              />
            </div>
            {props.telegram ?  <div className="siteOption">
              <FormControlLabel className={props.dark ? "siteFilterItemDark" : "siteFilterSwitch"}
                control={props.dark ? <PurpleSwitch checked={state.jason} className="sitesFilterLabel" size="small"  onChange={handleChange} name="jason" /> : <Switch checked={state.jason} className="sitesFilterLabel" size="small"  onChange={handleChange} name="jason" />}
                label={<Typography className="switchsiteFilterLabel">{state.jason ? "کانال": "گروه"}</Typography>}
              />
            </div> : null}
          </FormGroup>
        </FormControl>
      );
}

export default CheckBoxFilter
