import { Button, Drawer, TextField } from '@material-ui/core'
import React from 'react'
import Input from '../../../../UI/Input';
import './Search.css'
import {BsSearch} from 'react-icons/bs' 
import Filters from '../Filters/Filters';
import TemporaryDrawer from '../../../../UI/TemporaryDrawer';
import PSRSidebar from '../../ProSearchPage/ProSearchResult/PSR_Sidebar/PSR_Sidebar';
import PSR_Sidebar_Filters from '../../ProSearchPage/ProSearchResult/PSR_Sidebar/PSR_Sidebar_Filters';
function Search() {
    return (
        <div className="search">
            <TemporaryDrawer class="toggleBtnFilter">
                <div className="drawerRssFilter">
                    <Filters mobile/>
                </div>
            </TemporaryDrawer>
            <input/>
            <Button className="searchButtonRss">
                <BsSearch/>
            </Button>
        </div>
    )
}

export default Search
