import { Chip } from '@material-ui/core'
import React from 'react'

function ChipDarkTheme(props) {
    return (
            <Chip
                className ="chipclass"
                label={props.label}
                color="secondary"
                key={props.key}
                />
    )
}

export default ChipDarkTheme
    