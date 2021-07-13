import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Plot from 'react-plotly.js';
import Bargraph from './Bargraph';
import Piechart from './Piechart';
import Map from './Map'
import { Grid, Image } from 'semantic-ui-react'

export default class Graphs extends React.Component {
  constructor(){
    super();
    this.state={
        num1 : 1,
        mum2: 2

    };}

// if(this.state.num2 > this.state.num1){ 
fetch('/infographics',
                {
                    method:'GET',
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body: JSON.stringify(this.state)    
                }
            ).then(res=>res.json().then(data=>{
                this.setState({response:data.name});
            }))
          

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
}

export default Graphs