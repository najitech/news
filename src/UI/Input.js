import { InputAdornment, TextField } from '@material-ui/core'
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition'
import React from 'react'
import {AiFillTag} from 'react-icons/ai';
import './Input.css'
function Input(props) {
    const Icon  = props.Icon;
    return (
        <TextField size={props.size} 
        className={props.class} 
        value={props.value}
        onChange={props.handler}
        id={props.id} 
        label={props.label}
        placeholder={props.placeholder}
        InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <Icon/>
              </InputAdornment>
            ),
          }} />    
    )
}

export default Input
