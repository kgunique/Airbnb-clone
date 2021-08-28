import { useState } from 'react';
import ReactMapGL ,{Marker,Popup}from 'react-map-gl';
import  getCenter  from 'geolib/es/getCenter';

function Map({searchResults}) {
const [selectedLocation, setSelectedLocation] = useState({});
    // transforming the searchResults into lat lon objects

    const coordinates = searchResults.map((result) => ({
        latitude:result.lat,
        longitude:result.long
    }))

    // the latitude and the longitude of the center of locations coordinates

    const center = getCenter(coordinates)

    const [viewport , setViewport] = useState({
        height:"100%",
        width:"100%",
        latitude:center.latitude,
        longitude:center.longitude,
        zoom:11,
    });
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/kgblog/cksuksi1a08zi17qn46pizppe"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport)=>setViewport(nextViewport)}
        >
            {
                searchResults.map(result=>(
                    <div key ={result.long}>
                        <Marker
                            longitude={result.long}
                            latitude={result.lat}
                            offsetLeft={-20}
                            offsetTop={-10}
                        >
                        <p 
                            role="img"
                            onClick={()=>setSelectedLocation(result)}
                            className="cursor-pointer text-2xl animate-bounce"
                            aria-label="push-pin">📌</p>
                        </Marker>
                        
                        {/* this is the pop up to show locartion if we click on the marker */}

                        {
                            selectedLocation.long === result.long ? (
                                    <Popup
                                    onClose={()=>setSelectedLocation({})}
                                        closeOnClick={true}
                                        latitude={result.lat}
                                        longitude={result.long}
                                    >{result.title}</Popup>
                            ):(
                                false
                            )
                        }
                    </div>
                ))
            }
        </ReactMapGL>
    )
}

export default Map
