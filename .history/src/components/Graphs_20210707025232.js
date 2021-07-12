import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Plot from 'react-plotly.js';
import Bargraph from './Bargraph';
import Piechart from './Piechart';
import Map from './Map'
import { Grid, Image } from 'semantic-ui-react'

const Graphs = () => {

    return(
      <Container>
      <Row>
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
      <Col className="bottom">2 of 3</Col>
      </Row>
      </Container>

    )

}


export default Graphs