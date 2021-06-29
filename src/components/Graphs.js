import React from 'react';

import { Grid, Image } from 'semantic-ui-react'

const Graphs = () => {

    return(
  <Grid>
    <Grid.Row>
      <Grid.Column width={8} className="Linegraph">
        Line Graph
      </Grid.Column>
      <Grid.Column width={8} className="Bargraph">
        Bar Graph
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={8} className="Scatterplot">
        Scatter Plot
      </Grid.Column>
      <Grid.Column width={8} className="Piegraph">
        Pie Chart
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
}

export default Graphs