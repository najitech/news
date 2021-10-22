import React from 'react'

import Button from "react-multi-date-picker/components/button"
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/red.css"
import "react-multi-date-picker/styles/layouts/mobile.css";
import transition from "react-element-popper/animations/transition";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
function DateAdvancedPs() {
    return (
        <DatePicker
                            className={['red' , props.mobile ? "rmdp-mobile" : ''].join(" ")}
                            calendar={persian}
                            locale={persian_fa}
                            mobileLabels={props.mobile ?{
                                OK: "Accept",
                                CANCEL: "Close",
                              } : {}}
                            calendarPosition={props.mobile ? 'bottom-right' :"bottom"}
                            animations={[transition()]} 
                            render={<Button/>
    )
}

export default DateAdvancedPs
