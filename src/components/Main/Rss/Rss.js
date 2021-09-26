import React from 'react';
import './Rss.css';
import Filters from './Filters/Filters';
import Search from './Search/Search';
import LinearChart from '../../../UI/LinearChart';
import SortsRss from './Sorts/SortsRss';
import PostLists from './Posts/PostLists/PostLists';
import PostGrids from './Posts/PostGrids/PostGrids'


function Rss() {
    const [view, setView] = React.useState('module');

    const handleChange = (event, nextView) => {
      setView(nextView);
    };
    return (
        <div className='Rss'>
            <Filters/>
            <div className="RssContainer"> 
                <div className="RssContainer_top">
                    <Search/>
                    <LinearChart/> 
                    <div className="filterSearch">
                        <SortsRss view={view} handleChange={handleChange}/>
                    </div>
                </div>  
                <div className="RssContainer_bottom">
                    {view === 'module' ?
                    <PostGrids/>
                    :
                    <PostLists/>
                    }
                </div>
         
            </div>
        </div>
    )
}

export default Rss;
