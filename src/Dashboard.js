import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Topinfo from './components/Topinfo'
import Graphs from './components/Graphs'
import $ from 'jquery';
import Popper from 'popper.js';





const Dashboard = () => {
    return (
        <div className="parent-div">
            
            <Navbar />
            <Sidebar />
           
            <div className="topinfo">
            {<Topinfo /> }
            </div>
            <div className="graph">
            {<Graphs />}
            </div>
        </div>
    )
}

export default Dashboard
