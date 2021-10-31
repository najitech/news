import React from 'react'
import './ProSearchResult.css'
import PSR_Feed from './PSR_Feed/PSR_Feed'
import PSR_Sidebar from './PSR_Sidebar/PSR_Sidebar'

function ProSearchResult(props) {
    return (
        <div className="ProSearchResult">
            <PSR_Sidebar setTheme={props.setTheme}/>
            <PSR_Feed/>
        </div>
    )
}

export default ProSearchResult
