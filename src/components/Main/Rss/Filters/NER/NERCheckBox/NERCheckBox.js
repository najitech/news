import { Checkbox, FormControlLabel, FormGroup, withStyles } from '@material-ui/core'
import React from 'react'
import './NERCheckBox.css'
const DarkCheckBox = withStyles({
    root: {
      color: "white",
      
    '&$checked': {
        color: "#764ee3",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
function NERCheckBox(props) {
    return (
        <li>    
            <div>
                <FormGroup row className={["NERCheckBox", "dNERCheckBoxDark"].join(" ")}>
                    <FormControlLabel
                    classes={{ 
                    }}
                        className={props.dark ? "darkStyleColor":"fontStyle"}
                        control={props.dark ? <DarkCheckBox name={props.name} size="small" color={props.color}/> : <Checkbox name={props.name} size="small" color={props.color}/>}
                        label={props.label}          
                    />
                </FormGroup>
            </div>
        </li>   
    )
}

export default NERCheckBox
