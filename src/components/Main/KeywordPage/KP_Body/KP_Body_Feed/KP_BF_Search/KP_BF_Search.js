import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './KP_BF_Search.css'
function KP_BF_Search(props) {
    return (
        <div className="searchBoxKP">
            <input placeholder="جستجو"/>
            <IconButton className="searchBtnKPList"><AiOutlineSearch/></IconButton>
        </div>
    )
}

export default KP_BF_Search
