//import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from 'react'
//import mapboxgl from '!mapbox-gl'; 
import ReactMapGl, {Marker} from 'react-map-gl';
//import * as parkDate from "./data/skateboard-parks.json"

 
//mapboxgl.accessToken = 'pk.eyJ1IjoiZWVzaGFuIiwiYSI6ImNrcW1ieHIwczByaHIydm40eDh1cDkxNW0ifQ.aGH-JdFQkurqL5regIdKlg';

const Map = () => {

    const [viewport, setViewport] = useState({
        latitude: 23.2599,
        longitude: 77.4126,
        width: "500px",
        height: "250px",
        zoom: 2.5

    });

    return(
        <div>
            <ReactMapGl {...viewport} 
            mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange = {viewport => {
                setViewport(viewport);
            }}
        >
            
            </ReactMapGl>
        </div>
    );

}

export default Map;