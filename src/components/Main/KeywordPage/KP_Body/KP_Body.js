import React from 'react'
import KP_Body_Feed from './KP_Body_Feed/KP_Body_Feed'
import KP_Body_Widgets from './KP_Body_Widgets/KP_Body_Widgets'
import './KP_Body.css'

function KP_Body() {
    return (
        <div className="KP_Body">
            <KP_Body_Widgets/>
            <KP_Body_Feed/>
        </div>
    )
}

export default KP_Body
