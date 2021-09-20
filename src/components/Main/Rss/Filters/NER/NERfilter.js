import React from 'react'
import './NERfilter.css';
import { Button } from '@material-ui/core';
import Input from '../../../../../UI/Input';
import { AiFillTag } from 'react-icons/ai';
function NERfilter(props) {
    return (
        <div className="NERfilter">
             <div className="NERAddContainer"> 
                <Input placeholder="افزودن موجودیت"
                 size="small" 
                 Icon={AiFillTag}
                 class="inputStyle"
                 value="NER"
                 onChange={()=>{}}
                  class="inputStyle"/>
                <Button className="addTag">افزودن</Button>
            </div>
        </div>
    )
}

export default NERfilter
