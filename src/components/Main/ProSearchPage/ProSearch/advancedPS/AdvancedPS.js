import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import './AdvancedPS.css';
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Button, IconButton, makeStyles, MenuItem, Popover, Select, Slider, Switch } from '@material-ui/core';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
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
    "date" : 'تاریخ',
    "type" : 'منبع'
}

const useStyles2 = makeStyles({
    select: {
        '&:before': {
            borderColor:'rgba(255, 217, 0, 0.89)',
        },
        '&:after': {
            borderColor: 'rgba(255, 217, 0, 0.89)',
        },
        '&:not(.Mui-disabled):hover::before': {
            borderColor: 'rgba(255, 217, 0, 0.89)',
        },
        color: 'gold',
        fontSize:'13px',
        textAlign:'right'
    },
})

const useStyles3 = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255, 217, 0, 0.89)",

      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255, 217, 0, 0.89)"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255, 217, 0, 0.89)"
      }
      ,
      borderColor:'rgba(255, 217, 0, 0.89)',
      fontSize:'13px'
    }
  });

function AdvancedPS(props) {
    const classes3 = useStyles2()
    const classes4 = useStyles3()
    const {logic, setLogic} = props;
    const [advancedType, setAdvancedType] = React.useState(40);
    const [rule , setRule] = React.useState(20);
    const [value , setValue] = React.useState(null);
    const [between, setBetween] = React.useState({first : null , last :null});
    const [dateRange , setDateRange] = React.useState([new DateObject({ calendar: persian }).subtract(4, "days"),
    new DateObject({ calendar: persian }).add(4, "days")])
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
    };
    const handleDeleteItem = (item)=>{
        props.handleAddRule((prev)=>{
            return {...prev , advanced : {...prev.advanced , [item] : null}}
        })
    }
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
                    if(rule !==20)
                    {
                        props.handleAddRule((prev)=>{
                            return {...prev , advanced :{...prev.advanced ,likes : [value , rule ,new Date()]}}
                        });
                    }else{
                        props.handleAddRule((prev)=>{
                            return {...prev , advanced :{...prev.advanced ,likes : [between , rule ,new Date()]}}
                        });
                    }
                }
                break;
            case 20:
                if(props.social !== 3)
                {
                    if(rule !==20)
                    {
                        props.handleAddRule((prev)=>{
                            return {...prev , advanced :{...prev.advanced ,views : [value,rule , new Date()]}}
                        });
                    }
                    else{
                        props.handleAddRule((prev)=>{
                            return {...prev , advanced :{...prev.advanced ,views : [between,rule , new Date()]}}
                        });
                    }
                }
                break;
            case 30:
                props.handleAddRule((prev)=>{
                    return {...prev , advanced :{...prev.advanced ,picture : [checkPicture, 0 , new Date()]}}
                });
                break;
            case 40:
                if(rule !==20)
                {
                    props.handleAddRule((prev)=>{
                        return {...prev , advanced :{...prev.advanced ,date : [value, rule , new Date()]}}
                    });
                }else{
                    props.handleAddRule((prev)=>{
                        return {...prev , advanced :{...prev.advanced ,date : [{first:dateRange[0] , last : dateRange[1]}, rule , new Date()]}}
                    });
                }
                break;
            case 50:
                    if(props.social ===4)
                    {
                        props.handleAddRule((prev)=>{
                            return {...prev , advanced :{...prev.advanced ,type : [rule, rule , new Date()]}}
                        });
                    }
                break;
            default: 
                break;
        }
    }
    console.log(props.data);
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
                    <div>
                        <span className="addFilterLabelPS">فیلتر جدید : </span>
                    </div>
                    <div>
                        <FormControl className="ruleNameSelect">
                            <Select
                                variant="standard"
                                className={classes3.select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={advancedType}
                                onChange={handleChangeAT}>
                                {props.data.advanced.likes === null ? <MenuItem value={10}>تعداد لایک</MenuItem> :null}
                                {props.data.advanced.views === null ? <MenuItem value={20}> تعداد بازدید</MenuItem> : null}
                                {props.data.advanced.picture === null ? <MenuItem value={30}>عکس دار </MenuItem> : null}
                                {props.data.advanced.date ===null ? <MenuItem value={40}>تاریخ</MenuItem> : null}
                                {props.social === 4 ? props.data.advanced.type ===null? <MenuItem value={50}>منبع</MenuItem> : null :null}
                            </Select>     
                        </FormControl>
                    </div>
                    <div>
                        {advancedType !== 30 ?  
                        <FormControl>  {/*className="ruleActionSelect" variant="outlined" */}
                            <Select
                                className={classes3.select}
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
                    </div>
                    <div>
                        <FormControl className="ruleValueSelect">
                         {
                             advancedType === 50 ?
                                null :
                             advancedType ===30 ? 
                             <Switch
                                checked={checkPicture}
                                onChange={handleCheckPicture}
                                name="checkedA"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> :advancedType ===40 ?  
                            <DatePicker
                            
                            className={['red' ,"rmdp-mobile"].join(" ")}
                            value={rule === 20 ? dateRange :value}
                            range={rule === 20}
                            onChange={(d)=>{  
                                if(rule === 20)
                                {
                                    setDateRange(d);
                                    return;  
                                }                        
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
                            render={(btvalue, openCal)=>{return <TextField  className="t2" value={value !== null ? btvalue : "تاریخ"} onClick={openCal}/>}}
                        />  : rule !== 20 ? 
                            <TextField  required value={value !== null ? value : "0"} onChange={(e)=>{setValue(e.target.value)}} onClick={handleClick}/> :
                              <>
                                <TextField  required value={between.first !== null ? between.first : "0"} onChange={(e)=>{setBetween({...between, first : e.target.value})}} onClick={handleClick}/>
                                <span>و</span>
                                <TextField  required value={between.last !== null ? between.last : between.first? between.first : "0"} onChange={(e)=>{setBetween({...between, last : e.target.value})}} onClick={handleClick}/>
                              </>
                        }
                     </FormControl>
                     </div> 
                     <div>
                        <FormControl className="addPSadvItem">
                            <Button onClick={handleAddItemAdvPS}>افزودن
                            <AiOutlinePlus/>
                            </Button>
                        </FormControl>
                     </div>
                </div>
                <div className="advancedPSList">
                    {
                      Object.keys(props.data.advanced).map((item)=>{
                        console.log(props.data.advanced[item])
                          if(props.data.advanced[item] !== null)
                          {
                                return <div className="advancedPSlistItem">
                                <IconButton size="small" className="advancedPSButton" onClick={()=>handleDeleteItem(item)}><AiOutlineClose className="closeIconListItem"/></IconButton>
                                <div className="listCardAdvancedPS">{advancedTypeLabel[item]}</div>
                                <div>
                                <FormControl disabled className="ruleActionSelect" variant="outlined" >
                                    {
                                        item !=='picture' && item !=="type" ?<Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={props.data.advanced[item][1]} 
                                        >
                                        <MenuItem value={20}>بین</MenuItem>    
                                        <MenuItem value={30}>قبل از</MenuItem>
                                        <MenuItem value={40}>بعد از</MenuItem>
                                        <MenuItem value={10}>برابر با</MenuItem>
                                        <MenuItem value={50}>کمتر از</MenuItem>
                                        <MenuItem value={60}>بیشتر از</MenuItem>
                                    </Select>:<>&nbsp;</>
                                    }
                                </FormControl> 
                                </div>
                                <div className="listResualtPS">
                                    
                                {props.data.advanced[item][1] ===20 ?
                                 props.data.advanced[item][0].first + 
                                 " و " +
                                props.data.advanced[item][0].last:
                                item !== "picture" && item !=='type'? 
                                props.data.advanced[item][0]:
                                item ==='picture' ? 
                                props.data.advanced[item][0] ? "باشد" : "نباشد":
                                props.data.advanced[item][0] ===70 ? "گروه" : "کانال"}
                               </div>
                            </div>
                          } 
                      })
                    }
                </div>
        </div>
    )
}

export default AdvancedPS;
