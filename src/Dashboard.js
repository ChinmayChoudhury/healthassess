import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const Dashboard = () => {
    return (
        <div>
            <div className="navbar">
            <Navbar />
            </div>
            <div className="sidebar">
            <Sidebar />
            </div>
            <div className="topinfo">
                hello1
            </div>
            <div className="linegraph">
                hell2
            </div>
            <div className="piechart">
                hell3
            </div>
            <div className="bargraph">
                hell4
            </div>
            <div className="scatterchart">
                hell5
            </div>
        </div>
    )
}

export default Dashboard
