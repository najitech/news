import React from 'react'
import './Twitter.css'
import LinearChart from '../../../UI/LinearChart'
import Filters from '../Rss/Filters/Filters'
import PostLists from '../Rss/Posts/PostLists/PostLists'
import Search from '../Rss/Search/Search'
import SortsRss from '../Rss/Sorts/SortsRss'
import TwitterWidgets from './TwitterWidgets/TwitterWidgets'
import { useMediaQuery } from 'react-responsive'
import TwitterSorts from './TwitterSorts/TwitterSorts'

function Twitter() {
    const ShowModule = useMediaQuery({ query: '(max-width: 760px)' })
    return (
        <div className='Twitter'>
            <Filters/>
            <div className="TwitterContainer"> 
                <div className="RssContainer_top">
                    <Search/>
                    <div className="Rss_chart">
                    {
                        ShowModule?
                        <LinearChart type="bar"/> 
                        :
                        <LinearChart type="bar"/> 
                    }
                    </div>
                    
                    <div className="TwitterfilterSearch">
                        <TwitterSorts/>
                    </div>
                </div>  
                <div className="RssContainer_bottom">
                    <PostLists/>
                </div>
            </div>
            <TwitterWidgets/>
        </div>
    )
}

export default Twitter
