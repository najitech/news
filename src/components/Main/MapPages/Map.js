import React,{useState} from 'react'
import './Map.css'
import ReactMapGL , {Marker} from 'react-map-gl';
function Map(props) {
    const [viewport, setViewport] = useState({
        width: props.width,
        height: props.height,
        latitude: 32.4279,
        longitude: 53.6880,
        zoom: 4.5
    });
    const Posts = [
        {
            latitude: 36.4279,
            longitude: 50.6880,
            numbers:32.445
        },
        {
            latitude: 32.4279,
            longitude: 57.6880,
            numbers:76.454
        },
        {
            latitude: 33.1000,
            longitude: 52.3532,
            numbers:54.312
        },
        {
            latitude: 29.4643,
            longitude: 53.0000,
            numbers:10.937
        },

    ]
    return (
        <div className="Map">
            <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/morteza80/ckwkt81xo0dhu14qv3wqdquyn"
            attributionControl={false}
            mapboxApiAccessToken="pk.eyJ1IjoibW9ydGV6YTgwIiwiYSI6ImNrd2NkcGlzODFrbWMyb3FtOWtpcWdzZ2YifQ.hkWgCYG9hMPo9IdfTb3cCA"
            onViewportChange={viewport => {
                setViewport(viewport);
              }}
            >
            {
                Posts.map ((post) =>
                <Marker key={post.latitude} latitude={post.latitude} longitude={post.longitude}>
                    <div className="testy">
                    <div className="MapPage_MarkerNumber">
                        {post.numbers}K
                    </div>
                    </div>
                </Marker> 
                )
            }
            </ReactMapGL>
        </div>
    )
}

export default Map
