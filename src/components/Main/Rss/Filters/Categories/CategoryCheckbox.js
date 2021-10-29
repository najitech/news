import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './categoryCheckbox.css';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core';
import '../../../../../UI/Styles.css'
const useStyles = makeStyles(() => ({
    label: {
         fontSize: '0.85em'
     }
 }));
 const DarkCheckBox = withStyles({
    root: {
      color: "white",
      
    '&$checked': {
        color: "#764ee3",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
function CategoryCheckbox(props) {
    const Icon  = props.Icon;
    const  classes  = useStyles();
    return (
            <div>
            <FormGroup row className="catCheck noselect">
                <FormControlLabel
                 classes={{
                    root: classes.root,
                    label: classes.label, 
                }}
                    className={props.dark? 'darkStyleCat' :"fontStyle"}
                    control={props.dark ? <DarkCheckBox name={props.name} size="small" color={props.color}/> :<Checkbox name={props.name} size="small" color={props.color}/>}
                    label={props.label}          
                    
                />
                <div className={props.dark ? 'iconCheckDark' : "iconCheck"}>
                    <Icon/>
                </div>
            </FormGroup>
            </div>
    )
}

export default CategoryCheckbox;
