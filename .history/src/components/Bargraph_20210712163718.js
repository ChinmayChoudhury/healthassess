import React from "react";
import Plot from "react-plotly.js";
import { useRef, useEffect, useState } from 'react'

// var x = ['Mumbai', 'Chennai', 'Kolkata'];
// var hep = [12, 18, 29];
// var cov = [20,24,9];

// const [cityis, setcityis] = useState([]);
// const [canclist, setcanclist] = React.useState([]);
// const [typlist, settyplist] = React.useState([]);

var cityis = [];
var canclist = [];
var typlist = [];

fetch('/bargraph').then(res => res.json()).then(data => {
  // const cities = Array.from(data.city)
  // const cancer = 
  // cityis=Array.from(data.city);
  sessionStorage.setItem('city', JSON.stringify(data.city));
  sessionStorage.setItem('canc', JSON.stringify(data.canc));
  sessionStorage.setItem('typ', JSON.stringify(data.typ));
  // canclist=Array.from(data.canc);
  // typlist=Array.from(data.canc);
  // console.log(cityis);
})




class Bargraph extends React.Component {
    constructor(props) {
      super(props);
      let cityData = JSON.parse(sessionStorage.getItem('city'));
      let cancData = JSON.parse(sessionStorage.getItem('canc'));
      let typData = JSON.parse(sessionStorage.getItem('typ'));
      console.log(cityData)
      console.log(cancData)
    
      this.state = {
        data: [
          {
            // x: ['Mumbai', 'Chennai', 'Kolkata'],
            // y: [20, 14, 23],
            x: cityData,
            y: cancData,
            name: 'Cancer',
            type: 'bar'
          },
          {
            // x: ['Mumbai', 'Chennai', 'Kolkata'],
            // y: [12, 18, 29],
            x: cityData,
            y: typData,
            name: 'Typhoid',
            type: 'bar'
          }],
        
        layout: {
          height: 235,
          width: 600,
          title: "Disease distribution in major cities",
          
          margin: {
            l: 60,
            r: 10,
            b: 15,
            t: 50,
            //pad: 4
          }
        }
      };
    }

    
    render() {
        return (
        <div style={{ width: "100%", height: "100%" }}>
        <Plot
          data={this.state.data}
     
          layout={this.state.layout}
          onInitialized={(figure) => this.setState(figure)}
          onUpdate={(figure) => this.setState(figure)}
        />
        
        </div>
        )}
  }



export default Bargraph;

  