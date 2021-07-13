import React from "react";
import Plot from "react-plotly.js";



var cityis = [];
var canclist = [];
var typlist = [];

fetch('/piechart').then(res => res.json()).then(data => {
  // const cities = Array.from(data.city)
  // const cancer = 
  // cityis=Array.from(data.city);
  sessionStorage.setItem('city', JSON.stringify(data.city));
  sessionStorage.setItem('typ', JSON.stringify(data.typ));
  // canclist=Array.from(data.canc);
  // typlist=Array.from(data.canc);
  // console.log(cityis);
})
class Piechart extends React.Component {
  constructor(props) {
    super(props);



    let cityData = JSON.parse(sessionStorage.getItem('city'));
    let typData = JSON.parse(sessionStorage.getItem('typ'));


    this.state = {
      data: [{
        values: typData,
        labels: cityData,
        type: 'pie'
      }],
      layout: {
        height: 220,
        width: 400,
        title: "Hepatitis cases",
        margin: {
            l: 60,
            r: 10,
            b: 0,
            t: 50,
            pad: 4
          }
      }
    };
  }
  render() {
    return (
      <div style={{ width: "100%", height: "100%", marginLeft: 100, marginTop: 10 }}>
        <Plot
          data={this.state.data}
          layout={this.state.layout}
          onInitialized={(figure) => this.setState(figure)}
          onUpdate={(figure) => this.setState(figure)}
        />
      </div>
    );
  }
}
export default Piechart;