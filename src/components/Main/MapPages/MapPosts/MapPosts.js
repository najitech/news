import React from 'react'
import MapPostInfBox from './InformationBox/MapPostInfBox';
import MapPostFeed from './MapPostFeed/MapPostFeed';
import MapPostHeader from './MapPostHeader/MapPostHeader';
import MapForPosts from '../MapForPosts'
import './MapPosts.css'
function MapPosts(props) {
    return (
        <div className="mapPosts">
            <MapPostHeader/>
            <div className="MO_MapContianer">
                        <div className="fadeLeftMap">

                        </div>
                        <div className="fadeRightMap">

                        </div>
                        <MapForPosts className="h65" width="100%" height="800px"/>
                    </div>
            <MapPostFeed/>
            <MapPostInfBox/>
        </div>
    )
}

export default MapPosts;
