import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import './SitesFilter.css';

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
            control={<Switch checked={state.gilad} className="sitesFilterLabel" size="small"  onChange={handleChange} name="gilad" />}
            label="خبر آنلاین"
          />
        </div>
        <div className="siteOption">
          <FormControlLabel className="siteFilterSwitch"
            control={<Switch checked={state.jason} className="sitesFilterLabel" size="small"  onChange={handleChange} name="jason" />}
            label="YJC"
          />
        </div>
        <div className="siteOption">
          <FormControlLabel className="siteFilterSwitch"
            control={<Switch checked={state.antoine} className="sitesFilterLabel" size="small"  onChange={handleChange} name="antoine" />}
            label="مشرق نیوز"
          />
        </div>
      </FormGroup>
    </FormControl>
  );
}
