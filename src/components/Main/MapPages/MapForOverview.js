import React,{useState} from 'react'
import './MapForOverview.css'
import ReactMapGL , {Marker,Popup} from 'react-map-gl';
function MapForOverview(props) {
    const [selectedPark, setSelectedPark] = useState(null);
    const [viewport, setViewport] = useState({
        width: props.width,
        height: props.height,
        latitude: 32.4279,
        longitude: 53.6880,
        zoom: 4.5
    });
    const Posts = [
        {
            latitude: 36.2605,
            longitude: 59.6168,
            numbers:32,
            label:"مشهد"
        },
        {
            latitude: 35.6892,
            longitude: 51.3890,
            numbers:76,
            label:"تهران"
        },
        {
            latitude: 32.6539,
            longitude: 51.6660,
            numbers:54,
            label:"اصفهان"
        },
        {
            latitude: 38.0962,
            longitude: 46.2738,
            numbers:10,
            label:"تبریز"
        },

    ]
    return (
        <div className="Map">
            <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/morteza80/ckwsazp2e3o4t15o3g9bqcltn"
            attributionControl={false}
            mapboxApiAccessToken="pk.eyJ1IjoibW9ydGV6YTgwIiwiYSI6ImNrd2NkcGlzODFrbWMyb3FtOWtpcWdzZ2YifQ.hkWgCYG9hMPo9IdfTb3cCA"
            onViewportChange={viewport => {
                setViewport(viewport);
              }}
            >
            {
                Posts.map ((post) =>
                <Marker key={post.latitude} latitude={post.latitude} longitude={post.longitude} >
                    <div  onClick={e => {
                    e.preventDefault();
                    setSelectedPark(post);
                    }} 
                    className="testy">
                    <div className={["MapPage_Marker",post.numbers>20 && post.numbers<40 ? "MarkerBlue" :post.numbers>40? "MarkerRed":""].join(" ")}>
                        <span className="MapPage_MarkerLabel">{post.label}</span>
                        <span className="MapPage_MarkerNumber" >{post.numbers}K</span>
                    </div>
                    </div>
                </Marker> 
                )
            }
            {selectedPark ? (
            <Popup
                latitude={selectedPark.latitude}
                longitude={selectedPark.longitude}
                onClose={() => {
                setSelectedPark(null);
                }}
            >
                <div>
                <h2>{selectedPark.label}</h2>
                </div>
            </Popup>
            ) : null}
            </ReactMapGL>
        </div>
    )
}

export default MapForOverview;
