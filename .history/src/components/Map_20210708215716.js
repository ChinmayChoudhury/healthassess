//import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from 'react'
//import mapboxgl from '!mapbox-gl'; 
import ReactMapGl, {Marker} from 'react-map-gl';
//import * as parkDate from "./data/skateboard-parks.json"
require('dotenv').config()
 
//mapboxgl.accessToken = 'pk.eyJ1IjoiZWVzaGFuIiwiYSI6ImNrcW1ieHIwczByaHIydm40eDh1cDkxNW0ifQ.aGH-JdFQkurqL5regIdKlg';

const Map = () => {
    require('dotenv').config()
    const [viewport, setViewport] = useState({
        latitude: 23.2599,
        longitude: 77.4126,
        width: "640px",
        height: "510px",
        zoom: 2.5

    });

    return(
        <div className="map-inside">
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