import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Topinfo from './components/Topinfo'
import Graphs from './components/Graphs'
import { useRef, useEffect, useState } from 'react'
import $ from 'jquery';
import Popper from 'popper.js';





const Dashboard = () => {

    const [nameis, setnameis] = useState([]);

    useEffect(() => {
        fetch('/mapbox').then(res => res.json()).then(data => {
        //   const data1 = Array.from(data.name)
          setnameis(data.name);
          
        });
        }, []);
    return (
        <div className="parent-div">
            
            <Navbar />
            <Sidebar />
           
            <div className="topinfo">
            <Topinfo /> 
            </div>
            <div className="graph">
            <Graphs />
            </div>
        </div>
    )
}

export default Dashboard
