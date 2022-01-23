import React , {useState} from 'react'
import { BsCalendarMonthFill, BsFillCalendarWeekFill } from 'react-icons/bs'
import { FaRegClock } from 'react-icons/fa'
import DatePicker from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"
import DA1 from './DA1/DA1'
import './DataAnalysis.css'
import DA2 from './DA2/DA2';
import DA3 from './DA3/DA3';
import DA4 from './DA4/DA4';
import DA5 from './DA5/DA5';
import DA6 from './DA6/DA6';
import DA7 from './DA7/DA7';
import DA8 from './DA8/DA8';
import DA9 from './DA9/DA9';
import DA10 from './DA10/DA10';
import DA11 from './DA11/DA11';
import DA12 from './DA12/DA12';

function DataAnalysis() {
    const [TimeFilter,SetTimeFilter] = useState(1)
    const handleTimeFilter = (e) => {
        let a=e;
        if (TimeFilter===a) {
          
        }
        else {
          SetTimeFilter(a)
        }
    }
    const [Datevalue, setDateValue] = useState(null)
    const handleDateChange = (value) => {
      setDateValue(Datevalue)
    }
    return (
        <div className='DataAnalysis'>
                <DA1 AllData="120.353" FirstData="65.351" SecondData="48.261" AllDataRaise="8.2" AllDataRaising/>
            <div className='DA_Body'>
                <DA2/>
                <DA3/>
                <DA4/>
                <DA5/>
                <DA6/>
                <DA7/>
                <DA9/>
                <DA10/>
                <DA11/>
                <DA12/>
                <div className='justforscroll'>

                </div>
            </div>
        </div>
    )
}

function CustomInput1({ openCalendar, value, handleValueChange }) {
    return (
      <input
        className='DA_DateInput'
        onFocus={openCalendar}
        value={value}
        onChange={handleValueChange}
        placeholder='--/--/--     ,      --/--/--'
      />
    )
  }

export default DataAnalysis
