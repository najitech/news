import { Button, FormControl, TextField } from '@material-ui/core'
import Input from '../../../../../UI/Input';
import {AiFillTag} from "react-icons/ai";
import React , {useState} from 'react'
import Chip from '@material-ui/core/Chip';
import './TagsFilter.css'
function TagsFilter(props) {
    const [tagFilter , setTagFilter] = useState("");
    const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
    return (
        <div className="tagsFilter">    
                <Input placeholder="تگ را وارد کنید" size="small" Icon={AiFillTag} class="inputStyle"/>
                <Button className="addTag">افزودن</Button>
           <div className="tagsFilterDiv">
                <Chip
                    className="chipClass"
                    label="Del"
                    color="secondary"
                    onDelete={handleDelete}
                />
                <Chip
                    className="chipClass"
                    label="secory"
                    color="secondary"   
                    onDelete={handleDelete}
                />
           </div>
        </div>
    )
}

export default TagsFilter;
