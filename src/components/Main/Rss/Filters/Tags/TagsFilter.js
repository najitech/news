import { Button, FormControl, TextField } from '@material-ui/core'
import Input from '../../../../../UI/Input';
import {AiFillTag} from "react-icons/ai";
import React from 'react'
import CategoryCheckbox from '../Categories/CategoryCheckbox';
import './TagsFilter.css'
function TagsFilter(props) {
    return (
        <div className="tagsFilter">    
                <Input placeholder="تگ را وارد کنید" size="small" Icon={AiFillTag} class="inputStyle"/>
                <Button className="addTag">افزودن</Button>
            <ul>
                <li>
                </li>
            </ul>
        </div>
    )
}

export default TagsFilter;
