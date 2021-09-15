import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
function CategoryCheckbox(props) {
    return (
        <div>
            <FormGroup row>
                <FormControlLabel
                    className="fontStyle"
                    control={<Checkbox name={props.name} color={props.color}/>}
                    label={props.label}           
                />
            </FormGroup>
        </div>
    )
}

export default CategoryCheckbox
