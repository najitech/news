import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './categoryCheckbox.css';
function CategoryCheckbox(props) {
    const Icon  = props.Icon;
    return (
        
            <div>
            <FormGroup row className="catCheck">
                <FormControlLabel
                    className="fontStyle"
                    control={<Checkbox name={props.name} color={props.color}/>}
                    label={props.label}           
                />
                <div className="iconCheck">
                    <Icon/>
                </div>
            </FormGroup>
            </div>
    )
}

export default CategoryCheckbox
