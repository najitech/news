import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
import React from 'react'
import './NERCheckBox.css'
function NERCheckBox(props) {
    return (
        <li>    
            <div>
                <FormGroup row className="NERCheckBox">
                    <FormControlLabel
                    classes={{ 

                    }}
                        className="fontStyle"
                        control={<Checkbox name={props.name} size="small" color={props.color}/>}
                        label={props.label}          
                    />
                </FormGroup>
            </div>
        </li>   
    )
}

export default NERCheckBox
