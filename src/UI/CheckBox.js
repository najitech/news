import { Checkbox } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import React from 'react'
const checkBoxStyles = theme => ({
  root: {
    '&$checked': {
      color: '#3D70B2',
    },
  },
  checked: {},
 })
const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);
function CheckBox(props) {
    return (
        <CustomCheckbox
        color={props.color}
        inputProps={{ 'aria-label': props.label }}
      />
    )
}

export default CheckBox
