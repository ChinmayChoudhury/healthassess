//import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from 'react'
//import mapboxgl from '!mapbox-gl'; 
import ReactMapGl, {Marker} from 'react-map-gl';
import * as diseaseData from "./data/diseases.json"
require('dotenv').config()
 
//mapboxgl.accessToken = 'pk.eyJ1IjoiZWVzaGFuIiwiYSI6ImNrcW1ieHIwczByaHIydm40eDh1cDkxNW0ifQ.aGH-JdFQkurqL5regIdKlg';

const Map = () => {
    
    const [viewport, setViewport] = useState({
        latitude: 23.2599,
        longitude: 77.4126,
        width: "640px",
        height: "510px",
        zoom: 3.5

    });

    return(
        <div className="map-inside">
            <ReactMapGl {...viewport} 
            mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange = {viewport => {
                setViewport(viewport);
            }}
        >
            {diseaseData.entries.map(dis => (
                <Marker key = {dis.name} latitude={dis.latitude}
                 longitude = {dis.longitude}
                 >
                     <button>
                     <div class='pin'></div>
                     <div class='pulse'></div>
                     </button>
                 </Marker>
            ))}
            
            
            </ReactMapGl>
        </div>
    );

}

export default Map;