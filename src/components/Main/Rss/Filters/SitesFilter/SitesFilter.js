import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import './SitesFilter.css';
import { Typography } from '@material-ui/core';

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControl className="SitesFilter" component="fieldset">
      <FormGroup>
        <div className="siteOption">
          <FormControlLabel className="siteFilterSwitch"
            label={<Typography className="switchsiteFilterLabel">خبرآنلاین</Typography>}
            control={<Switch checked={state.gilad} className="sitesFilterLabel" size="small"  onChange={handleChange} name="gilad" />}
          />
        </div>
        <div className="siteOption">
          <FormControlLabel className="siteFilterSwitch"
            control={<Switch checked={state.jason} className="sitesFilterLabel" size="small"  onChange={handleChange} name="jason" />}
            label={<Typography className="switchsiteFilterLabel">باشگاه خبرنگاران جوان</Typography>}
          />
        </div>
        <div className="siteOption">
          <FormControlLabel className="siteFilterSwitch"
            control={<Switch checked={state.antoine} className="sitesFilterLabel" size="small"  onChange={handleChange} name="antoine" />}
            label={<Typography className="switchsiteFilterLabel">مشرق نیوز</Typography>}
          />
        </div>
      </FormGroup>
    </FormControl>
  );
}
