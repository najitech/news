import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import './SearchTypeTw.css';
import {BsHash} from 'react-icons/bs'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { AiOutlineKey ,AiOutlineUser } from 'react-icons/ai';
function SearchTypeTw(props) {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    
    return (
        <div className="divContainer">
            <ToggleButtonGroup
            value={alignment}
            exclusive
            className="groupTypeSelect"
            onChange={handleAlignment}
            aria-label="text alignment"
            >
            <ToggleButton className="toggleTypeSelect" value="keyword" aria-label="left aligned">
                <AiOutlineKey className="reacIconTypeSelect"/>
                <span>کلیدواژه</span>
            </ToggleButton>
            <ToggleButton className="toggleTypeSelect" value="hashtag" aria-label="centered">
                <BsHash className="reacIconTypeSelect"/>
                <span>هشتگ</span>
            </ToggleButton>
            <ToggleButton className="toggleTypeSelect" value="username" aria-label="right aligned">
                <AiOutlineUser/>
                <span>کاربر</span>
            </ToggleButton>
            
            </ToggleButtonGroup>
        </div>
        
    )
}

export default SearchTypeTw
