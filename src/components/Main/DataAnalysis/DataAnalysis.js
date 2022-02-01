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
import DA1_OverView from './DA1_OverView/DA1_OverView'
import './DataAnalysis.css'
import DA2_Behaviors from './DA2_Behaviors/DA2_Behaviors';
import DA3_NER from './DA3_NER/DA3_NER';
import DA4_Feeling from './DA4_Feeling/DA4_Feeling';
import DA5_4Categories from './DA5_4Categories/DA5_4Categories';
import DA6_4Categories from './DA6_4Categories/DA6_4Categories';
import DA7_Users from './DA7_Users/DA7_Users';
import DA8 from './DA8/DA8';
import DA9_Keys_Hashtags from './DA9_Keys_Hashtags/DA9_Keys_Hashtags';
import DA10_5KeysContainer from './DA10_5KeysContainer/DA10_5KeysContainer'
import DA11_Cloud from './DA11_Cloud/DA11_Cloud';
import DA12_Hashtags from './DA12_Hashtags/DA12_Hashtags';

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
                <DA1_OverView AllData="120.353" FirstData="65.351" SecondData="48.261" AllDataRaise="8.2" AllDataRaising/>
            <div className='DA_Body'>
                <DA2_Behaviors/>
                <div className='DA3_Container'>
                  <div className='DAS_LeftMask'>
                  </div>
                  <DA3_NER/>
                </div>

                <DA4_Feeling/>
                <div className='DA5_Container'>
                  <div className='DAS_LeftMask'>
                  </div>
                  <DA5_4Categories/>
                </div>
                
                <DA6_4Categories/>
                <DA7_Users/>
                <DA9_Keys_Hashtags/>
                <DA10_5KeysContainer/>
                <DA11_Cloud/>
                <DA12_Hashtags/>
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
