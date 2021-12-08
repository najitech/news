import React from 'react'
import MapPostInfBox from './InformationBox/MapPostInfBox';
import MapPostFeed from './MapPostFeed/MapPostFeed';
import MapPostHeader from './MapPostHeader/MapPostHeader';
import './MapPosts.css'
function MapPosts(props) {
    return (
        <div className="mapPosts">
            <MapPostHeader/>
            <MapPostFeed/>
            <MapPostInfBox/>
        </div>
    )
}

export default MapPosts;
