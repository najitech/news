import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './DateFilter.css'

function DateFilter() {
    return (
        <div className="dateFilter">
            <div>
                <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                    <KeyboardDatePicker
                    className="datePicker"
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label=""
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                /> 
                </MuiPickersUtilsProvider>
            </div> 
            <div>   
                <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                    <KeyboardDatePicker
                className="datePicker"
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label=""
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />  
                </MuiPickersUtilsProvider>
            </div>
        </div>
    )
}

export default DateFilter
