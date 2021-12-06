import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './MapPostSearch.css'
function MapPostSearch(props) {
    return (
        <div className="searchBoxKP">
            <input placeholder="جستجو"/>
            <IconButton className="searchBtnKPList"><AiOutlineSearch/></IconButton>
        </div>
    )
}

export default MapPostSearch
