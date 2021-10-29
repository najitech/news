import 'date-fns';
import React from 'react';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/red.css"
import './DateFilter.css';
import "react-multi-date-picker/styles/layouts/mobile.css";
import transition from "react-element-popper/animations/transition";
import InputIcon from "react-multi-date-picker/components/input_icon";
import "react-multi-date-picker/styles/colors/purple.css"
function DateFilter(props) {
    return (
        <div className="dateFilter">
            <div className="dateInputPicker">
                <DatePicker
                    className={[props.dark ? "purple" :'red' , props.dark? "" : "" , props.mobile ? "rmdp-mobile" : ''].join(" ")}
                    calendar={persian}
                    locale={persian_fa}
                    mobileLabels={props.mobile ?{
                        OK: "Accept",
                        CANCEL: "Close",
                      } : {}}
                    calendarPosition={props.mobile ? 'bottom-right' :"bottom"}
                    animations={[transition()]} 
                    render={<InputIcon className="inputDatepicker" style={{fontFamily:"shabnam" ,borderBottomColor : props.dark? '#836FE0' : ""  ,color:props.dark ?"white" :'rgb(100, 100, 100)',backgroundColor: props.dark?"#2D2C56" :"" ,fontSize:"12px" , padding:"5px" , width:"100%"}} placeholder="تاریخ شروع"/>}
                /> 
            </div> 
            <div className="dateInputPicker">   
                <DatePicker
                    className={['red' , props.mobile ? "rmdp-mobile" : ''].join(" ")}
                    animations={[transition()]} 
                    calendar={persian}
                    mobileLabels={props.mobile ?{
                        OK: "Accept",
                        CANCEL: "Close",
                      } : {}}
                    calendarPosition={props.mobile ? 'bottom-right' :"bottom"}
                    locale={persian_fa}
                     render={<InputIcon className="inputDatepicker" style={{fontFamily:"shabnam" ,borderBottomColor : props.dark? '#836FE0' : ""  ,color:props.dark ?"white" :'rgb(100, 100, 100)',backgroundColor: props.dark?"#2D2C56" :"" ,fontSize:"12px" , padding:"5px" , width:"100%"}} placeholder="تاریخ پایان"/>}
                />
            </div> 
        </div>
    )
}

export default DateFilter
