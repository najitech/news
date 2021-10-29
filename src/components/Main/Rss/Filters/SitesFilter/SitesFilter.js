import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import './SitesFilter.css';
import { Typography, withStyles } from '@material-ui/core';
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
export default function SwitchesGroup(props) {
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
            label={<Typography className="switchsiteFilterLabel">خبرآنلاین</Typography>}
            control={props.dark ? <PurpleSwitch checked={state.gilad} className="sitesFilterLabel" size="small"  onChange={handleChange} name="gilad"/> :<Switch checked={state.gilad} className="sitesFilterLabel" size="small"  onChange={handleChange} name="gilad" />}
          />
        </div>
        <div className="siteOption">
          <FormControlLabel className={props.dark ? "siteFilterItemDark" : "siteFilterSwitch"}
            control={props.dark ? <PurpleSwitch checked={state.jason} className="sitesFilterLabel" size="small"  onChange={handleChange} name="jason" /> : <Switch checked={state.jason} className="sitesFilterLabel" size="small"  onChange={handleChange} name="jason" />}
            label={<Typography className="switchsiteFilterLabel">باشگاه خبرنگاران جوان</Typography>}
          />
        </div>
        <div className="siteOption">
          <FormControlLabel className={props.dark ?"siteFilterItemDark" : "siteFilterSwitch"}
            control={props.dark ? <PurpleSwitch checked={state.antoine} className="sitesFilterLabel" size="small"  onChange={handleChange} name="antoine"/> : <Switch checked={state.antoine} className="sitesFilterLabel" size="small"  onChange={handleChange} name="antoine" />}
            label={<Typography className="switchsiteFilterLabel">مشرق نیوز</Typography>}
          />
        </div>
      </FormGroup>
    </FormControl>
  );
}
