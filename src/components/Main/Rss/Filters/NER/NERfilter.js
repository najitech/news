import React  , {useState} from 'react'
import './NERfilter.css';
import { Button, TextField, withStyles } from '@material-ui/core';
import Input from '../../../../../UI/Input';
import { AiFillFileWord } from 'react-icons/ai';
import NERCheckBox from './NERCheckBox/NERCheckBox';
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
function NERfilter(props) {
    const [NERs , setNERs] = useState([]);
    const [inputNER , setINputNER] =  useState("");
    const addNERHandler = ()=>{
        if(inputNER === "")
        {
            return;
        }
        if(NERs.indexOf(inputNER) !== -1)
        {
            return;
        }
        setNERs([...NERs , inputNER]);
    }
    return (
        <div className={["NERfilter",props.dark?"darkInputThem":""].join(" ")}>
             <div className="NERAddContainer"> 
                  {
              props.dark?
              <CssTextDarkInput placeholder="افزودن موجودیت"
                 size="small" 
                 Icon={AiFillFileWord}
                 InputProps={{ disableUnderline: true }} 
                  class="inputFilterStyleDark"
                  value={inputNER}
                  onChange={(e)=>{setINputNER(e.target.value)}}/>:
                  <Input placeholder="افزودن موجودیت"
                  size="small" 
                  Icon={AiFillFileWord}
                   class="inputFilterStyle"
                   value={inputNER}
                   onChange={(e)=>{setINputNER(e.target.value)}}/>
            }
                <Button onClick={addNERHandler}  className={!props.dark ? "addTag" : "addTagDark"}>افزودن</Button>
            </div>
            <div className={props.dark?"listDark":"listOfNER"} >
                <ul>
                    {NERs.map((item)=>{
                        return <NERCheckBox dark={props.dark} label={item}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default NERfilter
