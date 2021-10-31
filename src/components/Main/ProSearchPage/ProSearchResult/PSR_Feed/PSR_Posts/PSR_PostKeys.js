import React, {useContext} from 'react'
import Hashtag from '../../../../../../UI/Hashtag'
import './PSR_PostKeys.css'
import ThemeColorContext from '../../../../../../UI/ThemeColorContext'

function PSR_PostKeys() {
    const ThemeColor = useContext(ThemeColorContext)
    return (
        <div className="PSR_PostKeys">
            <Hashtag backGroundColor={ThemeColor==="darkTheme" ? "#EFEFEF" : "#4b46aa"} color={ThemeColor==="darkTheme" ? "#808080" : "white"}/>
            <Hashtag backGroundColor={ThemeColor==="darkTheme" ? "#EFEFEF" : "#4b46aa"} color={ThemeColor==="darkTheme" ? "#808080" : "white"}/>
            <Hashtag backGroundColor={ThemeColor==="darkTheme" ? "#EFEFEF" : "#4b46aa"} color={ThemeColor==="darkTheme" ? "#808080" : "white"}/>
        </div>
    )
}

export default PSR_PostKeys
