import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './DateFilter.css'

function DateFilter() {
    return (
        <div className="dateFilter">
            <div>
                <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                    <DatePicker
                    className="datePicker"
                disableToolbar
                variant="inline"
                inputVariant="outlined"
                format="MM/dd/yyyy"
                margin="normal"
                size="small"
                id="date-picker-inline"
                label="تاریخ شروع"
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                /> 
                </MuiPickersUtilsProvider>
            </div> 
            <div>   
                <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                    <DatePicker
                    
                className="datePicker"
                disableToolbar
                size="small"
                variant="inline"
                format="MM/dd/yyyy"
                inputVariant="outlined"
                margin="normal"
                id="date-picker-inline"
                label="تاریخ پایان"
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
