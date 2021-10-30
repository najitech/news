import { Button, Chip, Input, TextField, withStyles } from '@material-ui/core';
import React, { useState } from 'react'
import { AiFillTag } from 'react-icons/ai';
import './UsernameFilter.css'
const CssTextDarkInput = withStyles({
    root: {
      '& label.Mui-focused': {
          borderColor:'rgba(255, 217, 0, 0.89)',
        color: 'rgba(255, 217, 0, 0.89)',
      },'&:after': {
        borderColor: 'rgba(255, 217, 0, 0.89)',
    },
    borderBottomColor : 'rgba(255, 217, 0, 0.89)',
    '&:not(.Mui-disabled):hover::before': {
        borderColor: 'rgba(255, 217, 0, 0.89)',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'rgba(255, 217, 0, 0.89)',
      },
      color:'red',
    },
  })(TextField);
function UsernameFilter(props) {
    const [usernameFilter , setUsernameFilter] = useState("");
    const [users , setUsers] = useState([]);
    const addTagHandler = () =>{
      if(usernameFilter === "")
        {
            return;
        }
        if(users.indexOf(usernameFilter) !== -1)
        {
            return;
        }
      setUsers([...users , usernameFilter]);
    }
    const closeHandler = (e) => ()=>{
      setUsers(prev=>{return prev.filter((chip)=>chip !== e)});
    }
   
    return (
        <div className={["tagsFilter",props.dark ? "darkInputThem": ""].join(" ")}> 
            <div className="addTagContainer"> 
            {
              props.dark?
              <CssTextDarkInput placeholder="تگ را وارد کنید"
                 size="small" 
                 Icon={AiFillTag}
                 InputProps={{ disableUnderline: true }} 
                  class="inputFilterStyleDark"
                  value={usernameFilter}
                  onChange={(e)=>{setUsernameFilter(e.target.value)}}/>:
                  <Input placeholder="تگ را وارد کنید"
                  size="small" 
                  Icon={AiFillTag}
                   class="inputFilterStyle"
                   value={usernameFilter}
                   onChange={(e)=>{setUsernameFilter(e.target.value)}}/>
            }
               
                <Button onClick={addTagHandler} className={!props.dark ? "addTag" : "addTagDark"}>افزودن</Button>
            </div>
           <div className={["tagsContainer", props.dark ?"chipDarkThem" : ""].join(" ")}>
                {users.map((item)=>{
                    return <Chip
                                className ="chipclass"
                                label={item}
                                color="secondary"
                                onDelete = {closeHandler(item)}
                                key={item}
                                />
                })}
           </div>
        </div>
    )
}

export default UsernameFilter
