import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './categoryCheckbox.css';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(() => ({
    label: {
         fontSize: '0.85em'
     }
 }));
function CategoryCheckbox(props) {
    const Icon  = props.Icon;
    const  classes  = useStyles();
    return (
            <div>
            <FormGroup row className="catCheck">
                <FormControlLabel
                 classes={{
                    label: classes.label, 
                }}
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

export default CategoryCheckbox;
