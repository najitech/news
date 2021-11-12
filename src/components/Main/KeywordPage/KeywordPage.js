import React from 'react'
import './KeywordPage.css'
import KP_Header from './KP_Header/KP_Header'
import KP_Body from './KP_Body/KP_Body'

function KeywordPage() {
    return (
        <div className="KeywordPage">
            <div className="KeywordPageContainter">
                <KP_Header/>
                <KP_Body/>
            </div>

        </div>
    )
}

export default KeywordPage
