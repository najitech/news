import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import { Calendar } from "react-multi-date-picker"
import './AdvancedPS.css';
import { Button, MenuItem, Popover, Select, Slider, Switch } from '@material-ui/core';
import { GrClose } from 'react-icons/gr';
function AdvancedPS(props) {
    const {logic, setLogic} = props;
    const [advancedType, setAdvancedType] = React.useState(40);
    const [rule , setRule] = React.useState(20)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [age, setAge] = React.useState('');
    const handleAlignment = (event, newAlignment) => {
        setLogic(newAlignment);
    };
    const handleChangeAT = (event) => {
        setAdvancedType(event.target.value);
    };
    const handleRuleChange = (event) => {
        setRule(event.target.value);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const [checkPicture, setCheckPicture] = React.useState({
        checkedA: true,
        checkedB: true,
      });
      const handleCheckPicture = (event) => {
        setCheckPicture({ ...checkPicture, [event.target.name]: event.target.checked });
      };
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
                        </Select>     
                     </FormControl> {advancedType !== 30 ?  
                     <FormControl  className="ruleActionSelect" variant="outlined" >
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={rule}
                            onChange={handleRuleChange}
                            >
                            {advancedType === 40 ? 
                                <div>
                                <MenuItem value={20}>بین</MenuItem>    
                                <MenuItem value={30}>قبل از</MenuItem>
                                <MenuItem value={40}>بعد از</MenuItem>
                                </div>:advancedType ===10 || advancedType === 20 ?    
                                    <MenuItem value={10}>برابر با</MenuItem>
                                    :null
                            }
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
                            /> : <>
                        <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                            مقدار
                        </Button>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                            }}
                        >
                           <div className="valueSelectPopover">
                               {advancedType === 40 ? 
                                    <Calendar 
                                    />
                                : 
                                  advancedType === 10 || advancedType === 20 ? 
                                  <div className="sliderPS">
                                     <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                                  </div>
                                  :
                                  null
                                }
                           </div>  
                        </Popover></>}
                     </FormControl> 
                     <FormControl>
                         <Button>افزودن</Button>
                     </FormControl>
                </div>
                <div className="advancedPSList">
                    <div className="advancedPSlistItem">
                        <Button><GrClose/></Button>
                        <div className="listCardAdvancedPS">تاریخ</div>
                        <div>
                        <FormControl disabled className="ruleActionSelect" variant="outlined" >
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                onChange={()=>{}}
                                >
                                <MenuItem value={10}>قبل از</MenuItem>
                            </Select>     
                        </FormControl> 
                        </div>
                        <div className="listCardAdvancedPS">اردیبهشت 2019</div>
                    </div>
                </div>
        </div>
    )
}

export default AdvancedPS;
