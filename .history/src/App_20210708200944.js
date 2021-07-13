import React from 'react'
import Dashboard from './Dashboard.js'
import AssessPage from './AssessPage.js'
require('dotenv').config()
export default class App extends React.Component {
  
  
  render(){

    return (
      <div className="parent-div">
          {/* <AssessPage /> */}
          <Dashboard />
      </div>
    );
  }
}



