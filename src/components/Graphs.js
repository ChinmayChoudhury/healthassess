import React from 'react';

import { Grid, Image } from 'semantic-ui-react'

const Graphs = () => {

    return(
   
      <Grid className="two column gridcustom ">
        <Grid.Row className="rowcust">
          <Grid.Column  className="Linegraph">
            Line Graph
          </Grid.Column>
          <Grid.Column  className="Bargraph">
            Bar Graph
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="rowcust">
          <Grid.Column  className="Scatterplot">
            Scatter Plot
          </Grid.Column>
          <Grid.Column  className="Piegraph">
            Pie Chart
          </Grid.Column>
        </Grid.Row>
      </Grid>
    
)
}

export default Graphs