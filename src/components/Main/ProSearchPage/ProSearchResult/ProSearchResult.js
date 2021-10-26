import React from 'react'
import './ProSearchResult.css'
import PSR_Feed from './PSR_Feed/PSR_Feed'
import PSR_Sidebar from './PSR_Sidebar/PSR_Sidebar'

function ProSearchResult() {
    return (
        <div className="ProSearchResult">
            <PSR_Sidebar/>
            <PSR_Feed/>
        </div>
    )
}

export default ProSearchResult
