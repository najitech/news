import React from 'react'
import './MapOverview.css'
import Map from '../Map'
import MO_Header from './MO_Header/MO_Header';
import MO_Body from './MO_Body/MO_Body';

function MapOverview(props) {
    return(
        <div className="MapOverview">
            <div className="MapOverviewContainer">
                <MO_Header/>
                <MO_Body/>
                <div className="MO_MapContianer">
                    <div className="fadeTopMap">

                    </div>
                    <Map className="h65" width="1200px" height="600px"/>
                </div>

            </div>

        </div>
    )
}


export default MapOverview;