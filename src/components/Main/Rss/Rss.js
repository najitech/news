import React from 'react';
import './Rss.css';
import Filters from './Filters/Filters';
import Search from './Search/Search';
import LinearChart from '../../../UI/LinearChart';
import SortsRss from './Sorts/SortsRss';
import PostLists from './Posts/PostLists/PostLists';
import PostGrids from './Posts/PostGrids/PostGrids'
import { useMediaQuery } from 'react-responsive'

function Rss() {
    const [view, setView] = React.useState('module');
    const ShowModule = useMediaQuery({ query: '(max-width: 760px)' })

    const handleChange = (event, nextView) => {
        if(nextView!==null)
        {
            setView(nextView);
        }

    };
    return (
        <div className='Rss'>
            <Filters/>
            <div className="RssContainer"> 
                <div className="RssContainer_top">
                    <Search/>
                    <div className="Rss_chart">
                    {
                        ShowModule?
                        <LinearChart type="bar"/> 
                        :
                        <LinearChart type="area"/> 
                    }
                    </div>
                    
                    <div className="filterSearch">
                        <SortsRss view={view} handleChange={handleChange}/>
                    </div>
                </div>  
                <div className="RssContainer_bottom">
                    {ShowModule ? 
                    <PostGrids/> :
                    view === 'module' ?
                    <PostGrids/>
                    :
                    view === 'list'?
                    <PostLists/>
                    :
                    <PostGrids/>
                    }
                </div>
         
            </div>
        </div>
    )
}

export default Rss;
