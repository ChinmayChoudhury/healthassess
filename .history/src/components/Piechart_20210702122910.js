import React from "react";
import Plot from "react-plotly.js";
class Piechart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        values: [1900, 2630, 800],
        labels: ['Mumbai', 'Chennai', 'Kolkata'],
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