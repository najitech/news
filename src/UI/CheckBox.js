import { Checkbox } from '@material-ui/core'
import React from 'react'

function CheckBox(props) {
    return (
        <Checkbox
        checked={checked}
        onChange={handleChange}
        color={props.color}
        inputProps={{ 'aria-label': props.label }}
      />
    )
}

export default CheckBox
