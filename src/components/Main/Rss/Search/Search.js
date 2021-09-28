import { Button, TextField } from '@material-ui/core'
import React from 'react'
import Input from '../../../../UI/Input';
import './Search.css'
import {BsSearch} from 'react-icons/bs' 
import TemporaryDrawer from '../../../../UI/TemporaryDrawer';
function Search() {
    return (
        <div className="search">
            
            <input/>
            <Button className="searchButtonRss">
                <BsSearch/>
            </Button>
        </div>
    )
}

export default Search
