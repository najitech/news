import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import './AdvancedPS.css';
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Button, MenuItem, Popover, Select, Slider, Switch } from '@material-ui/core';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import "react-multi-date-picker/styles/colors/red.css"
import "react-multi-date-picker/styles/layouts/mobile.css";
import transition from "react-element-popper/animations/transition";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import TextField from '@material-ui/core/TextField';
const advancedTypeLabel = {
    "likes" : 'تعداد لایک',
    "views" : 'تعداد بازدید',
    "picture" : 'عکس دار',
    "date" : 'تاریخ'
}

function AdvancedPS(props) {
    const {logic, setLogic} = props;
    const [advancedType, setAdvancedType] = React.useState(40);
    const [rule , setRule] = React.useState(20)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value , setValue] = React.useState(null);
    const [between, setBetween] = React.useState({first : null , last :null});
    const handleAlignment = (event, newAlignment) => {
        setLogic(newAlignment);
    };
    const handleChangeAT = (event) => {
        setValue(null);
        setAdvancedType(event.target.value);
    };
    const handleRuleChange = (event) => {
        setRule(event.target.value);
        if(advancedType === 10 || advancedType === 20)
        {
            
        }
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [checkPicture, setCheckPicture] = React.useState(true);
      const handleCheckPicture = (event) => {
        setCheckPicture( event.target.checked );
      };
    const handleAddItemAdvPS = ()=>{
        // adding data to states : 
        switch(advancedType){
            case 10:
                if(props.social !== 3)
                {
                    props.handleAddRule((prev)=>{
                        return {...prev , advanced :{...prev.advanced ,likes : {value  : value , type :1}}}
                    });
                }
                break;
            case 20:
                if(props.social !== 3)
                {
                    props.handleAddRule((prev)=>{
                        return {...prev , advanced :{...prev.advanced ,views : value}}
                    });
                }
                break;
            case 30:
                props.handleAddRule((prev)=>{
                    return {...prev , advanced :{...prev.advanced ,picture : checkPicture}}
                });
                break;
            case 40:
                props.handleAddRule((prev)=>{
                    return {...prev , advanced :{...prev.advanced ,date : value}}
                });
                break;
            default: 
                break;
        }
    }
    
    console.log();
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div className="advancedPS">
            <div>
                <h5 className="advancedPSheader">نمایش &nbsp;<span className="toggleButtonAndOr" style={{direction: 'ltr'}}>
                    <ToggleButtonGroup
                        value={logic}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        >
                        <ToggleButton value="and" aria-label="right aligned">
                            همه
                        </ToggleButton>
                        <ToggleButton value="any" aria-label="left aligned">
                            هر کدام
                        </ToggleButton>
                    </ToggleButtonGroup>    
                </span> نتایج فیلتر ها</h5>
            </div>
                <div className="addRuleContainer">
                    <span>فیلتر جدید : </span>
                    <FormControl className="ruleNameSelect">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={advancedType}
                            onChange={handleChangeAT}
                            >
                            <MenuItem value={10}>تعداد لایک</MenuItem>
                            <MenuItem value={20}> تعداد بازدید</MenuItem>
                            <MenuItem value={30}>عکس دار </MenuItem>
                            <MenuItem value={40}>تاریخ</MenuItem>
                            {props.social === 4 ? <MenuItem value={50}>منبع</MenuItem> : null}
                        </Select>     
                     </FormControl> {advancedType !== 30 ?  
                     <FormControl  className="ruleActionSelect" variant="outlined" >
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={rule}
                            onChange={handleRuleChange}
                            >
                            {advancedType ===10 || advancedType === 20 ?<MenuItem value={10}>برابر با</MenuItem>:null}
                            {advancedType ===10 || advancedType === 20 ?<MenuItem value={50}>کمتر از</MenuItem>:null}
                            {advancedType ===10 || advancedType === 20 ?<MenuItem value={60}>بیشتر از</MenuItem>:null}
                            {advancedType === 10 || advancedType === 20 ? <MenuItem value={20}>بین</MenuItem>: null}
                            {advancedType === 40 ? <MenuItem value={20}>بین</MenuItem>: null}
                            {advancedType === 40  ?<MenuItem value={30}>قبل از</MenuItem>:null}
                            {advancedType === 40  ?<MenuItem value={40}>بعد از</MenuItem>:null}
                            {advancedType === 50 && props.social === 4 ? <MenuItem value={70}>گروه</MenuItem>:null}
                            {advancedType === 50 && props.social === 4 ? <MenuItem value={80}>کانال</MenuItem>:null}
                        </Select>     
                     </FormControl>  : null}
                     <FormControl className="ruleValueSelect">
                         {
                             advancedType ===30 ? 
                             <Switch
                                checked={checkPicture}
                                onChange={handleCheckPicture}
                                name="checkedA"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> :advancedType ===40 ?  
                            <DatePicker
                            className={['red' ,"rmdp-mobile"].join(" ")}
                            value={value}
                            onChange={(d)=>{                            
                                let object = { d,  format: "MM/DD/YYYY"};
                                setValue(new DateObject(object).format());
                            }}
                            calendar={persian}
                            locale={persian_fa}                    
                            mobileLabels={props.mobile ?{
                                OK: "Accept",
                                CANCEL: "Close",
                              } : {}}
                            calendarPosition={props.mobile ? 'bottom-right' :"bottom"}
                            animations={[transition()]} 
                            render={(btvalue, openCal)=>{return <TextField  value={value !== null ? btvalue : "تاریخ"} onClick={openCal}/>}}
                        />  : rule !== 20 ? 
                            <TextField  required value={value !== null ? value : "0"} onChange={(e)=>{setValue(e.target.value)}} onClick={handleClick}/> :
                              <>
                                <TextField  required value={value !== null ? value : "0"} onChange={(e)=>{setBetween()}} onClick={handleClick}/>
                                <span>و</span>
                                <TextField  required value={value !== null ? value : "0"} onChange={(e)=>{setValue(e.target.value)}} onClick={handleClick}/>
                              </>
                        }
                     </FormControl> 
                     <FormControl>
                         <Button onClick={handleAddItemAdvPS}>افزودن
                         <AiOutlinePlus/>
                         </Button>
                     </FormControl>
                </div>
                <div className="advancedPSList">
                    {
                      Object.keys(props.data.advanced).map((item)=>{return
                    })
                    }
                </div>
        </div>
    )
}

export default AdvancedPS;
