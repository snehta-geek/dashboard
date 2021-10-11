import React from 'react'
import InputDashboard from './inputPart'
import  '../assets/dashboard.css'
import ColourPicker from './colorPicker'
import LiveCard from './livePart'


function Dashboard() {
    return (
        
        <div>
            <div className="header">
                <h2>Dashboard</h2></div>
            <div className="d-body">
                <div className="sidebar"></div>
                <div className="container">
                    <div className="inputs-section">
                <InputDashboard/>
                <ColourPicker/>
                </div>
                <LiveCard/> 
                </div>
            </div>
            
            </div>
            
    )
}

export default Dashboard
