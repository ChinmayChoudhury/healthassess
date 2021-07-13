import React from "react";
import Plot from "react-plotly.js";

var x = ['Mumbai', 'Chennai', 'Kolkata'];
var hep = [12, 18, 29];
var cov = [20,24,9];
class Bargraph extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          {
            // x: ['Mumbai', 'Chennai', 'Kolkata'],
            // y: [20, 14, 23],
            x: x,
            y: hep,
            name: 'Hepatitis',
            type: 'bar'
          },
          {
            // x: ['Mumbai', 'Chennai', 'Kolkata'],
            // y: [12, 18, 29],
            x: x,
            y: cov,
            name: 'Covid 19',
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

  