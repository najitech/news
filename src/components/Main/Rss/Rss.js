import React from 'react';
import './Rss.css';
import Filters from './Filters/Filters';
import Posts from './Posts/Posts';
import Widgets from './Widgets/Widgets';
import Search from './Search/Search';


function Rss() {
    return (
        <div className='Rss'>
            <Filters/>
            <div className="RssContainer">      
                <Search/>
                <Posts/>
            </div>
        </div>
    )
}

export default Rss;
