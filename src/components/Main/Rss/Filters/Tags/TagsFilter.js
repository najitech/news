import { Button, FormControl, TextField, withStyles } from '@material-ui/core'
import Input from '../../../../../UI/Input';
import {AiFillTag} from "react-icons/ai";
import React , {useState} from 'react'
import Chip from '@material-ui/core/Chip';
import './TagsFilter.css';
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
function TagsFilter(props) {
    const [tagFilter , setTagFilter] = useState("");
    const [tags , setTags] = useState([]);
    const addTagHandler = () =>{
      if(tagFilter === "")
        {
            return;
        }
        if(tags.indexOf(tagFilter) !== -1)
        {
            return;
        }
      setTags([...tags , tagFilter]);
    }
    const closeHandler = (e) => ()=>{
      setTags(prev=>{return prev.filter((chip)=>chip !== e)});
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
                  value={tagFilter}
                  onChange={(e)=>{setTagFilter(e.target.value)}}/>:
                  <Input placeholder="تگ را وارد کنید"
                  size="small" 
                  Icon={AiFillTag}
                   class="inputFilterStyle"
                   value={tagFilter}
                   onChange={(e)=>{setTagFilter(e.target.value)}}/>
            }
               
                <Button onClick={addTagHandler} className={!props.dark ? "addTag" : "addTagDark"}>افزودن</Button>
            </div>
           <div className={["tagsContainer", props.dark ?"chipDarkThem" : ""].join(" ")}>
                {tags.map((item)=>{
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

export default TagsFilter;
	