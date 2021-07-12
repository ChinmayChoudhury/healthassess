import React from "react";
import Plot from "react-plotly.js";
import { useRef, useEffect, useState } from 'react'

// var x = ['Mumbai', 'Chennai', 'Kolkata'];
// var hep = [12, 18, 29];
// var cov = [20,24,9];

// const [cityis, setcityis] = useState([]);
// const [canclist, setcanclist] = React.useState([]);
// const [typlist, settyplist] = React.useState([]);

// fetch('/bargraph').then(res => res.json()).then(data => {
//   // const cities = Array.from(data.city)
//   // const cancer = 
//   setcityis(Array.from(data.city));
//   setcanclist(Array.from(data.canc));
//   settyplist(Array.from(data.canc));

//   // this.setState({cancer_count:Array.from(data.canc)});
//   // this.setState({typhoid_count:Array.from(data.typ)});
//   // setnameis(data.name);
    
//   });

const Bargraph = () => {

const [cityis, setcityis] = useState([]);
const [canclist, setcanclist] = React.useState([]);
const [typlist, settyplist] = React.useState([]);

fetch('/bargraph').then(res => res.json()).then(data => {
  // const cities = Array.from(data.city)
  // const cancer = 
  setcityis(Array.from(data.city));
  setcanclist(Array.from(data.canc));
  settyplist(Array.from(data.canc));

class Bargraph extends React.Component {
    constructor(props) {
      super(props);

      this.state={
        cityList: [],
        cancer_count: [],
        typhoid_count: []

      }
      
      
    

      // const [nameis, setnameis] = useState([]);
      // const [citylist, setcitylist] = React.useState([]);
      // const [diseaselist, setdiseaselist] = React.useState([]);

      
        // fetch('/bargraph').then(res => res.json()).then(data => {
        // // const cities = Array.from(data.city)
        // // const cancer = 
        // this.setState({cityList:Array.from(data.city)});
        // this.setState({cancer_count:Array.from(data.canc)});
        // this.setState({typhoid_count:Array.from(data.typ)});
        // // setnameis(data.name);
          
        });
       

      var x = this.state.cityList;
      this.state = {
        data: [
          {
            // x: ['Mumbai', 'Chennai', 'Kolkata'],
            // y: [20, 14, 23],
            x: cityis,
            y: canclist,
            name: 'Cancer',
            type: 'bar'
          },
          {
            // x: ['Mumbai', 'Chennai', 'Kolkata'],
            // y: [12, 18, 29],
            x: cityis,
            y: typlist,
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
        <span>{cityis}</span>
        </div>
        )}
  }
}
  export default Bargraph;

  