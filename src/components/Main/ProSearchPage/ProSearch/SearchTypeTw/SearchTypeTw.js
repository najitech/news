import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import './SearchTypeTw.css';
import {BsCardText, BsFileText, BsHash} from 'react-icons/bs';
import { AiOutlineKey ,AiOutlineUser } from 'react-icons/ai';
import { Badge, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    font1: {
      fontSize: "9px",
      textAlign:'center',
    },
  }));
function SearchTypeTw(props) {
    const classes = useStyles();
    const [alignment, setAlignment] = React.useState('text');
    const {typeTw , setTypeTw} = props;
    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    const handleChangeType= (e)=>{
        setTypeTw(e);
    }
    return (
        <div className="divContainer">
            <ToggleButtonGroup
            value={alignment}
            exclusive
            className="groupTypeSelect"
            onChange={handleAlignment}
            aria-label="text alignment"
            >
            <ToggleButton onClick={()=>{handleChangeType(4)}} className="toggleTypeSelect" value="text" aria-label="left aligned">
                <Badge classes={{badge: classes.font1}} overlap="rectangular" badgeContent={props.data.text.length} color="secondary"/>
                <BsFileText className="reacIconTypeSelect"/>
                <span>متن</span>
            </ToggleButton>
            
            <ToggleButton onClick={()=>{handleChangeType(1)}} className="toggleTypeSelect" value="keyword" aria-label="left aligned">
                <Badge classes={{badge: classes.font1}}  className="badgeStyleSearchType" badgeContent={props.data.keywoard.length} color="secondary"/>
                <AiOutlineKey className="reacIconTypeSelect"/>
                <span>کلیدواژه</span>
            </ToggleButton>
            <ToggleButton onClick={()=>{handleChangeType(2)}} className="toggleTypeSelect" value="hashtag" aria-label="centered">
                <Badge classes={{badge: classes.font1}}  className="badgeStyleSearchType" badgeContent={props.data.hashtags.length} color="secondary"/>
                <BsHash className="reacIconTypeSelect"/>
                <span>هشتگ</span>
            </ToggleButton>
            {props.social !== 3 ? <ToggleButton onClick={()=>{handleChangeType(3)}} className="toggleTypeSelect" value="username" aria-label="right aligned">
                <Badge classes={{badge: classes.font1}}  className="badgeStyleSearchType"  overlap="rectangle"  badgeContent={props.data.username.length} color="secondary"/>
                <AiOutlineUser className="reacIconTypeSelect"/>
                <span>کاربر</span>
            </ToggleButton> : null}
            
            </ToggleButtonGroup>
        </div>
        
    )
}

export default SearchTypeTw
