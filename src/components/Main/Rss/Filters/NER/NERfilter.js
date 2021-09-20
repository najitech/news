import React  , {useState} from 'react'
import './NERfilter.css';
import { Button } from '@material-ui/core';
import Input from '../../../../../UI/Input';
import { AiFillFileWord } from 'react-icons/ai';
import NERCheckBox from './NERCheckBox/NERCheckBox';
function NERfilter(props) {
    const [NERs , setNERs] = useState([]);
    const [inputNER , setINputNER] =  useState("");
    const addNERHandler = ()=>{
        setNERs([...NERs , inputNER]);
    }
    return (
        <div className="NERfilter">
             <div className="NERAddContainer"> 
                <Input placeholder="افزودن موجودیت"
                 size="small" 
                 Icon={AiFillFileWord}
                 class="inputStyle"
                 value={inputNER}
                 onChange={(e)=>{setINputNER(e.target.value)}}
                  class="inputStyle"/>
                <Button onClick={addNERHandler} className="addTag">افزودن</Button>
            </div>
            <div className="listOfNER">
                <ul>
                    {NERs.map((item)=>{
                        return <NERCheckBox label={item}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default NERfilter
