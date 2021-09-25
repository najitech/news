import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import DatePicker from "react-multi-date-picker"
import CustomInputDF from './CustomInputDF';
import "react-multi-date-picker/styles/colors/red.css"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './DateFilter.css'   

import InputIcon from "react-multi-date-picker/components/input_icon"
function DateFilter() {
    return (
        <div className="dateFilter">
            <div>
                <DatePicker
                    className="red"
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom"
                    render={<InputIcon style={{fontFamily:"shabnam" ,color:'rgb(100, 100, 100)', fontSize:"12px" , padding:"5px" , width:"100%"}} placeholder="تاریخ شروع"/>}
                /> 
            </div> 
            <div>   
                <DatePicker
                    className=" red"
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom" render={<InputIcon style={{fontFamily:"shabnam" ,color:'rgb(100, 100, 100)', fontSize:"12px" , padding:"5px" , width:"100%"}} placeholder="تاریخ پایان"/>}
                />
            </div> 
        </div>
    )
}

export default DateFilter
