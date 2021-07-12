//import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from 'react'
//import mapboxgl from '!mapbox-gl'; 
import ReactMapGl, {Marker, Popup} from 'react-map-gl';
import * as diseaseData from "./data/diseases.json"
require('dotenv').config()
 
//mapboxgl.accessToken = 'pk.eyJ1IjoiZWVzaGFuIiwiYSI6ImNrcW1ieHIwczByaHIydm40eDh1cDkxNW0ifQ.aGH-JdFQkurqL5regIdKlg';

const Map = () => {
    const [nameis, setnameis] = useState(0);

    useEffect(() => {
        fetch('/mapbox').then(res => res.json()).then(data => {
          setnameis(data.name["cancer_count"]);
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
            {diseaseData.entries.map(dis => (
                <Marker key = {dis.name} latitude={dis.latitude}
                 longitude = {dis.longitude}
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
                <Popup latitude={selectedCity.latitude} longitude={selectedCity.longitude} 
                onClose = {() => {
                    setSelectedCity(null);
                }}
                >
                <div>
                    <h3>{selectedCity.city}</h3>
                    <p>{selectedCity.name}</p>
                    <p>{nameis}</p>
                </div>
                </Popup>
            ): null}
            </ReactMapGl>
        </div>
    );

}

export default Map;