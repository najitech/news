import React , {useState} from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { FaRssSquare, FaTelegram } from 'react-icons/fa'
import './PSR_Sidebar.css'
import PSR_Sidebar_Filters from './PSR_Sidebar_Filters'

function PSRSidebar() {
    const [SideBarIcon , SetSideBarIcon] = useState(1)
    return (
        <div className="PSR_Sidebar">
            <div className="PSR_Sidebar_Icons">
                <div className={`PSR_Sidebar_Icon PSR_instagram ${SideBarIcon===1? "PSR_icon_select" : ""}`} onClick={() => SetSideBarIcon(1)}>
                 <AiFillInstagram/>
                </div>
                <div className={`PSR_Sidebar_Icon PSR_twitter ${SideBarIcon===2? "PSR_icon_select" : ""}`} onClick={() => SetSideBarIcon(2)}>
                 <AiFillTwitterCircle/>
                </div>
                <div className={`PSR_Sidebar_Icon PSR_rss ${SideBarIcon===3? "PSR_icon_select" : ""}`} onClick={() => SetSideBarIcon(3)}>
                 <FaRssSquare/>
                </div>
                <div className={`PSR_Sidebar_Icon PSR_telegram ${SideBarIcon===4? "PSR_icon_select" : ""}`} onClick={() => SetSideBarIcon(4)}>
                 <FaTelegram/>
                </div>
            
            </div>
            <PSR_Sidebar_Filters type={SideBarIcon}/>
        </div>
    )
}

export default PSRSidebar
