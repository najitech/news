import { InputAdornment, TextField } from '@material-ui/core'
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition'
import React from 'react'
import {AiFillTag} from 'react-icons/ai';
import './Input.css'
const styles = theme => ({
  textField: {
      fontSize: '10px',
  },
  input: {
      color: 'white',
      fontSize:'5px'
  }
});
function Input(props) {
    const classes = useStyles();
    const Icon  = props.Icon;
    return (
        <TextField size={props.size} 
        className={classes.textField} 
        value={props.value} 
        onChange={props.onChange}
        id={props.id} 
        color={props.color}
        label={props.label}
        placeholder={props.placeholder}
        InputProps={{
          className: classes.input,
            startAdornment: (
              <InputAdornment position="end">
                <Icon/>
              </InputAdornment>
            ),
          }} />    
    )
}

export default Input
