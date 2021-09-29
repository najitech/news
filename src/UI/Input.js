import { InputAdornment, TextField } from '@material-ui/core'
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition'
import React from 'react'
import {AiFillTag} from 'react-icons/ai';
import './Input.css'
const styles = {
  container: {
      display: 'flex',
      flexWrap: 'wrap',
  },
  textField: {
      width: 300,
      margin: 100,
  },
  //style for font size
  resize:{
    fontSize:50
  },
  }
function Input(props) {
    const classes = useStyles();
    const Icon  = props.Icon;
    return (
        <TextField size={props.size} 
        className={[classes.textField , props.class].join(" ")} 
        value={props.value} 
        onChange={props.onChange}
        id={props.id} 
        color={props.color}
        label={props.label}
        placeholder={props.placeholder}
        InputProps={{
          style:{fontSize : 14},
          classes: {
            input: classes.resize,
          },
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
