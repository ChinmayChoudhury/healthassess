import React from 'react';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Plot from 'react-plotly.js';
import Bargraph from './Bargraph';
import Piechart from './Piechart';
import Map from './Map'
import { Grid, Image } from 'semantic-ui-react'

        

const Graphs = () => {

    const [nameis, setnameis] = useState(0);

    useEffect(() => {
    fetch('/infographics').then(res => res.json()).then(data => {
      setnameis(data.name);
    });
    }, []);


    return(
      <Container>
      <col>
      <row>
      < Map />
      </row>
      </col>
      <col>
      <row>
      <Bargraph />
      </row>
      <row className="bottom">
      <Piechart /> 
      </row>
      </col>


      {/* <Row>
      <Col>
      < Map />
      </Col>
      <Col>
      <Bargraph />
      </Col>
      </Row>
      <Row>
      <Col className="bottom">
        <Piechart />
      </Col>
      <Col className="bottom">{nameis}</Col>
      </Row> */}
      </Container>

    )

}


export default Graphs