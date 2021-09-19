import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

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
    <FormControl component="fieldset">
      <FormGroup>
        <FormControlLabel className="siteFilterSwitch"
          control={<Switch checked={state.gilad}  onChange={handleChange} name="gilad" />}
          label="www.khabaronline.ir"
        />
        <FormControlLabel className="siteFilterSwitch"
          control={<Switch checked={state.jason}  onChange={handleChange} name="jason" />}
          label="www.yjc.news"
        />
        <FormControlLabel className="siteFilterSwitch"
          control={<Switch checked={state.antoine}  onChange={handleChange} name="antoine" />}
          label="www.mashreghnews.ir"
        />
      </FormGroup>
    </FormControl>
  );
}
