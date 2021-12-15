import React,{useState} from 'react'
import './MapOverview.css'
import MapForOverview from '../MapForOverview'
import MO_Header from './MO_Header/MO_Header';
import MO_Body from './MO_Body/MO_Body';
import MapSameLocation from './MapSameLocation';
import MapForPosts from '../MapForPosts';
import { useMediaQuery } from 'react-responsive';

function MapOverview(props) {
    const[ SameLocation , setSameLocation] = useState([
        {
            latitude: 36.2605,
            longitude: 59.6168,
            numbers:32,
            label:"تربت حیدریه",
            TodayData:"342.671K",
            TodayRaise:"8.429K",
            TodayRaising:true,
        },
        {
            latitude: 35.6892,
            longitude: 51.3890,
            numbers:76,
            label:"فردوس",
            TodayData:"342.671K",
            TodayRaise:"8.429K"
        },
        {
            latitude: 32.6539,
            longitude: 51.6660,
            numbers:54,
            label:"سرایان",
            TodayData:"342.671K",
            TodayRaise:"8.429K",
            TodayRaising:true,
        },
        {
            latitude: 38.0962,
            longitude: 46.2738,
            numbers:10,
            label:"نیشابور",
            TodayData:"342.671K",
            TodayRaise:"8.429K"
        },
        {
            latitude: 35.6892,
            longitude: 51.3890,
            numbers:76,
            label:"تربت جام",
            TodayData:"342.671K",
            TodayRaise:"8.429K",
            TodayRaising:true,
        },
        {
            latitude: 32.6539,
            longitude: 51.6660,
            numbers:54,
            label:"کاخک",
            TodayData:"342.671K",
            TodayRaise:"8.429K",
            TodayRaising:true,
        },
        {
            latitude: 38.0962,
            longitude: 46.2738,
            numbers:10,
            label:"طبس",
            TodayData:"342.671K",
            TodayRaise:"8.429K"
        },
    ])
    const q1026 = useMediaQuery({query :'(max-width : 1026px)'}); 
    return(
        <div className="MapOverview">
            <div className="MapOverviewContainer">
                <MO_Header/>
                <MO_Body/>
                <div className="MapOverviewFooter">
                    {!q1026?     
                    <div className="MO_SameLocations">
                            <div className="MO_SameLocationsTitle">
                            <h3>مکان های نزدیک مشهد</h3>
                            </div>
                            {
                                SameLocation.map((loc) => {
                                    return(
                                        <MapSameLocation
                                        latitude={loc.latitude}
                                        longitude={loc.longitude}
                                        numbers={loc.numbers}
                                        location={loc.label}
                                        TodayData={loc.TodayData}
                                        TodayRaise={loc.TodayRaise}
                                        TodayRaising={loc.TodayRaising}
                                        key={loc.longitude}
        
                                        />
                                    )

                                }
                                )
                            }
                    </div> :
                    null
                    }
                    <div className="MO_MapContianer">
                        <div className="fadeTopMap">

                        </div>
                        <div className="fadeLeftMap">

                        </div>
                        <div className="fadeRightMap">

                        </div>
                        <MapForOverview className="h65" width="98%" height="100vh" setSameLocation={setSameLocation}/>
                    </div>
                </div>


            </div>

        </div>
    )
}


export default MapOverview;