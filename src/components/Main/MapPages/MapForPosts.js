import React,{useState,useRef} from 'react'
import './MapForPosts.css'
import useSwr from "swr";
import ReactMapGL , {Marker,Popup,FlyToInterpolator} from 'react-map-gl';
import useSupercluster from "use-supercluster";
function MapForPosts(props) {
    const [selectedPark, setSelectedPark] = useState(null);
    const [viewport, setViewport] = useState({/*
        width: props.width,
        height: props.height,
        latitude: 32.4279,
        longitude: 53.6880,
        zoom: 4.5
    */
        latitude: 52.6376,
        longitude: -1.135171,
        width: "100vw",
        height: props.height,
        zoom: 12
    });
    const fetcher = (...args) => fetch(...args).then(response => response.json());
    const mapRef = useRef();

    const url =
      "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
    const { data, error } = useSwr(url, { fetcher });
    const crimes = data && !error ? data.slice(0, 1000) : [];
    const points = crimes.map(crime => ({
      type: "Feature",
      properties: { cluster: false, crimeId: crime.id, category: crime.category },
      geometry: {
        type: "Point",
        coordinates: [
          parseFloat(crime.location.longitude),
          parseFloat(crime.location.latitude)
        ]
      }
    }));
    const bounds = mapRef.current
    ? mapRef.current
        .getMap()
        .getBounds()
        .toArray()
        .flat()
    : null;

    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom: viewport.zoom,
        options: { radius: 75, maxZoom: 20 }
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
            {/*
            <ReactMapGL
            {...viewport}
            ref={mapRef}
            mapStyle="mapbox://styles/morteza80/ckwsazp2e3o4t15o3g9bqcltn"
            maxZoom={10}
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
            */}
    <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/morteza80/ckwsazp2e3o4t15o3g9bqcltn"
        mapboxApiAccessToken="pk.eyJ1IjoibS1oYXNoZW1pODAiLCJhIjoiY2t3ZjB0eDJpMGE2dDJvcnVnMDd0ZzhnciJ9.q-3U7cOXn_9a_AYrRmKATg"
        maxZoom={20}
        onViewportChange={newViewport => {
          setViewport({ ...newViewport });
        }}
        ref={mapRef}
      >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount
          } = cluster.properties;
          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                latitude={latitude}
                longitude={longitude}

              >
                <div
                 onClick={e => {
                        e.preventDefault();
                        setSelectedPark(cluster);
                        console.log(selectedPark);
                    }} 
                  className={["MapPage_Marker",pointCount>10 && pointCount<40 ? "MarkerBlue" :pointCount>40? "MarkerRed":""].join(" ")}
                  style={{
                    width: `${35 + (pointCount / points.length) * 70}px`,
                    height: `${35 + (pointCount / points.length) * 70}px`
                  }}

                >
                  {pointCount}
                </div>
              </Marker>
              
            );
          }
          return (
            <Marker
              key={`crime-${cluster.properties.crimeId}`}
              latitude={latitude}
              longitude={longitude}
            >
              <div className="dead-center">
              <div className="MarkerContainer">
                    <span> مشهد</span>
                    <span class="marker angled-left marker-green">342K</span>
                    <div className="markerpin">
                    </div>
                </div>
              </div >
            </Marker>
          );
        })}
        {selectedPark ? (
            <Popup

                latitude={selectedPark.geometry.coordinates[1]}
                longitude={selectedPark.geometry.coordinates[0]}
                onClose={() => {
                setSelectedPark(null);
                }}
            >
                <div className="MapBoxPopup">
                    <span className="MapBoxPopupTitle">10 نقطه ی فعال این مکان</span>
                    <div className="MapBoxPopupHeader">
                      <div  className="MapPage_Marker MapPage_MarkerPopup zindex1000">
                        <span>مشهد</span>
                        <span>370K</span>
                      </div>
                      <div  className="MapPage_Marker MarkerBlue MapPage_MarkerPopup z-index1001">
                        <span>تربت</span>
                        <span>170K</span>
                      </div>
                      <div  className="MapPage_Marker MarkerRed MapPage_MarkerPopup z-index1002">
                        <span>نیشابور</span>
                        <span>70K</span>
                      </div>
                      <div  className="MapPage_Marker MapPage_MarkerPopup z-index1003">
                        <span>طبس</span>
                        <span>21K</span>
                      </div>
                      <div className="MapPage_Marker_more" >
                        +6
                      </div>
                    </div>
                    
                    <div
                    onClick={() => {
                      const expansionZoom = Math.min(
                        supercluster.getClusterExpansionZoom(selectedPark.id),
                        20
                      );
                      const [longitude, latitude] = selectedPark.geometry.coordinates;
                      setViewport({
                        ...viewport,
                        latitude,
                        longitude,
                        zoom: expansionZoom,
                        transitionInterpolator: new FlyToInterpolator({
                          speed: 2
                        }),
                        transitionDuration: "auto"
                      });
                    }}
                    
                    className="MapBoxPopupbutton">
                      Zoom
                    </div>
                </div>
            </Popup>
        ) : null}
      </ReactMapGL>
        </div>
    )
}

export default MapForPosts;
