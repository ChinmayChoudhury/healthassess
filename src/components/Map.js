//import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from 'react'
//import mapboxgl from '!mapbox-gl'; 
import ReactMapGl, {Marker, Popup} from 'react-map-gl';
import * as diseaseData from "./data/diseases.json"
require('dotenv').config()
 
//mapboxgl.accessToken = 'pk.eyJ1IjoiZWVzaGFuIiwiYSI6ImNrcW1ieHIwczByaHIydm40eDh1cDkxNW0ifQ.aGH-JdFQkurqL5regIdKlg';

const Map = () => {
    const [nameis, setnameis] = useState([]);

    useEffect(() => {
        fetch('/mapbox').then(res => res.json()).then(data => {
        //   const data1 = Array.from(data.name)
          setnameis(data.name);
          
        });
        }, []);
    
    const [viewport, setViewport] = useState({
        latitude: 23.2599,
        longitude: 77.4126,
        width: "640px",
        height: "510px",
        zoom: 3.5

    });

    const [selectedCity, setSelectedCity] = useState(null);

    return(
        <div className="map-inside">
            <ReactMapGl {...viewport} 
            mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle = "mapbox://styles/eeshan/ckqvvn3cb27f818qpxz8bxuk9"
            onViewportChange = {viewport => {
                setViewport(viewport);
            }}
        >
            {nameis.map(dis => (
                <Marker key = {dis.location} latitude={dis.lat}
                 longitude = {dis.long}
                 >
                     {/* <button onClick={(e) => {
                         e.preventDefault();
                         setSelectedCity(dis);
                     }}> */}
                     <div class='pin bounce' onClick={(e) => {
                         e.preventDefault();
                         setSelectedCity(dis);
                     }}></div>
                     <div class='pulse'></div>
                     {/* </button> */}
                 </Marker>
            ))}
            
            {selectedCity ? (
                <Popup latitude={selectedCity.lat} longitude={selectedCity.long} 
                onClose = {() => {
                    setSelectedCity(null);
                }}
                >
                <div>
                    <h3>{selectedCity.location}</h3>
                    <hr></hr>
                    <p>Typhoid cases: {selectedCity.typhoid_count}</p>
                    <p>Cancer cases: {selectedCity.cancer_count}</p>
                    {/* <p>{nameis[0].typhoid_count}</p> */}
                </div>
                </Popup>
            ): null}
            </ReactMapGl>
        </div>
    );

}

export default Map;