import { Button } from '@material-ui/core'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './KP_BF_Search.css'
function KP_BF_Search(props) {
    return (
        <div className="searchBoxKP">   
            <div class="searchBox">
            <input class="searchInput"type="text" name="" placeholder="Search"/>
                <button class="searchButton" href="#">
                    <i class="material-icons">
                        search
                    </i>
                </button>
            </div>
        </div>
    )
}

export default KP_BF_Search
