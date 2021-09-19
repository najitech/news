import { Button, FormControl, TextField } from '@material-ui/core'
import Input from '../../../../../UI/Input';
import {AiFillTag} from "react-icons/ai";
import React , {useState} from 'react'
import Chip from '@material-ui/core/Chip';
import './TagsFilter.css';
function TagsFilter(props) {
    const [tagFilter , setTagFilter] = useState("");
    const [tags , setTags] = useState([]);
    const addTagHandler = () =>{
      setTags([...tags , tagFilter]);
    }
    const closeHandler = (e) => ()=>{
      setTags(prev=>{return prev.filter((chip)=>chip !== e)});
    }
    return (
        <div className="tagsFilter"> 
            <div className="addTagContainer"> 
                <Input placeholder="تگ را وارد کنید"
                 size="small" 
                 Icon={AiFillTag}
                  class="inputStyle"
                  value={tagFilter}
                  onChange={(e)=>{setTagFilter(e.target.value)}}/>
                <Button onClick={addTagHandler} className="addTag">افزودن</Button>
            </div>
           <div className="tagsContainer">
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
	