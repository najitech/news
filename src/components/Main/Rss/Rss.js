import React from 'react';
import './Rss.css';
import Filters from './Filters/Filters';
import Posts from './Posts/Posts';
import Widgets from './Widgets/Widgets';
import Search from './Search/Search';
import LinearChart from '../../../UI/LinearChart';
import SortsRss from './Sorts/SortsRss';


function Rss() {
    return (
        <div className='Rss'>
            <Filters/>
            <div className="RssContainer">
                <div className="Header">
                     <LinearChart/> 
                    <div className="filterSearch">
                        <Search/>
                        <SortsRss/>
                    </div> 

                </div>
                <Posts/>
            </div>
        </div>
    )
}

export default Rss;
