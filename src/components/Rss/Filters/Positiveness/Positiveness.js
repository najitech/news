import React from 'react'
import './Positiveness.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Positiveness() {
    return (
        <div className="positiveness">
      <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup aria-label="gender" name="gender1">
        <FormControlLabel value="مثبت" control={<Radio />} label="مثبت" />
        <FormControlLabel value="منفی" control={<Radio />} label="منفی" />
        <FormControlLabel value="هیچ کدام" control={<Radio />} label="هیچ کدام" />
      </RadioGroup>
    </FormControl>  
        </div>
    )
}

export default Positiveness
