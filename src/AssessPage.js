import React from 'react'
import {useState, useEffect} from 'react'

import Form from 'react-bootstrap/Form'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {Dropdown} from 'semantic-ui-react'
export default class AssessPage extends React.Component {

    constructor(){
        super();
        this.state={
            name: '',
            email:'',
            age:0,
            s1:0,
            s2:0,
            s3:0,
            s4:0,
            response:'nothing'
        };
        this.handleNameChange  = this.handleNameChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    sympOptions = [
        {key: 'mum', value: 1, text: 'Mumbai'},
        {key: 'bh', value: 2, text: 'Bhopal'},
        {key: 'amh', value: 3, text: 'Ahmedabad'},
        {key: 'nd', value: 4, text: 'New Dehli'},
        {key: 'vr', value: 5, text: 'Varanasi'},
        {key: 'ch', value: 5, text: 'Chennai'},
      ]

    handleNameChange = (event)=>{
        this.setState({name: event.target.value});
        
    }
    handleEmailChange = (event)=>{
        this.setState({email: event.target.value})
    }
    handleAgeChange = (event)=>{
        this.setState({age: event.target.value})
    }
    handleS1Change = (event, {value})=>{
        this.setState({s1: value})
    }
    handleS2Change = (event, {value})=>{
        this.setState({s2: value})
    }
    handleS3Change = (event, {value})=>{
        this.setState({s3: value})
    }
    handleS4Change = (event, {value})=>{
        this.setState({s4: value})
    }
    handlesubmit = (event)=>{
        event.preventDefault();
        // console.log(this.state.name);
        var isvalid = true;
        

        // commented for debugging, uncomment in production
        // if(this.state.name == ""){
        //     alert("Name empty");
        //     isvalid = false;
        // }
        // if(this.state.age == 0 || this.state.age == ""){
        //     alert("invalid age");
        //     isvalid = false;
        // }
        
        // if(this.state.s1 == ""){
        //     alert("Please provide all 5 symptoms");
        //     isvalid = false;
        // }
        // if(this.state.s2 == ""){
        //     alert("Please provide all 5 symptoms");
        //     isvalid = false;
        // }
        // if(this.state.s3 == ""){
        //     alert("Please provide all 5 symptoms");
        //     isvalid = false;
        // }
        // if(this.state.s4 == ""){
        //     alert("Please provide all 5 symptoms");
        //     isvalid = false;
        // }

        if(isvalid===true){
            fetch('/assesshealth',
                {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body: JSON.stringify(this.state)    
                }
            ).then(res=>res.json().then(data=>{
                this.setState({response:data.name});
            }))
        }
        
    }

    getS1Val = (event, {value})=>{
        console.log(value);
        this.setState({s1:value});
    }

    
    
    render(){

        return (
            <div>
                <Navbar />
                <Sidebar />
                <div>
                <div className="pagetitle">
                    Your health assessment
                </div>
                <div className="formdiv mt-5">
                    
                    <Form onSubmit={this.handlesubmit}>
                        <Form.Group as={Row} controlId="name">
                            <Form.Label column lg="3">Name:</Form.Label>
                            <Col lg="9">
                                <FormControl type="text" className="pill" placeholder="Enter name" value ={this.state.name} onChange={this.handleNameChange} />
    
                            </Col>
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group as={Row} controlId="email">
                            <Form.Label column lg="3">Email address:</Form.Label>
                            <Col lg="9">
                                <FormControl type="email" className="pill" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange}/>
                            
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="age">
                            <Form.Label column lg="3">Age:</Form.Label>
                            <Col lg="9">
                                <FormControl type="number" className="pill" placeholder="Enter age" value = {this.state.age} onChange={this.handleAgeChange}/>
                            
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="symptom1">
                            <Form.Label column lg="3">Symptom #1:</Form.Label>
                            <Col lg="9">
                                {/* <FormControl type="text" className="pill" placeholder="Enter a symptom" value = {this.state.s1} onChange={this.handleS1Change} /> */}
                                {/* <FormControl type="text" className="pill" placeholder="Enter a symptom" value = {this.state.s1} onChange={this.handleS1Change} /> */}
                                <Dropdown
                                    placeholder='Symptom'
                                    search selection
                                    options={this.sympOptions}
                                    value = {this.state.s1}
                                    onChange={this.handleS1Change}
                                />
                               
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="symptom2">
                            <Form.Label column lg="3">Symptom #2:</Form.Label>
                            <Col lg="9">
                                {/* <FormControl type="text" className="pill" placeholder="Enter a symptom" value={this.state.s2} onChange={this.handleS2Change}/> */}
                                <Dropdown
                                    placeholder='Symptom'
                                    search selection
                                    options={this.sympOptions}
                                    value = {this.state.s2}
                                    onChange={this.handleS2Change}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="symptom3">
                            <Form.Label column lg="3">Symptom #3:</Form.Label>
                            <Col lg="9">
                                {/* <FormControl type="text" className="pill" placeholder="Enter a symptom" value={this.state.s3} onChange={this.handleS3Change}/> */}
                                <Dropdown
                                    placeholder='Symptom'
                                    search selection
                                    options={this.sympOptions}
                                    value = {this.state.s3}
                                    onChange={this.handleS3Change}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="symptom4">
                            <Form.Label column lg="3">Symptom #4:</Form.Label>
                            <Col lg="9">
                                {/* <FormControl type="text" className="pill" placeholder="Enter a symptom" value={this.state.s4} onChange={this.handleS4Change}/> */}
                                <Dropdown
                                    placeholder='Symptom'
                                    search selection
                                    options={this.sympOptions}
                                    value = {this.state.s4}
                                    onChange={this.handleS4Change}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as ={Row} className="btncustom">
                            <Col lg="12">
                                <Button  type="submit" className="pill " >
                                    Submit
                                </Button>
                                {/* onClick={this.handleClick} */}
                            </Col>
                        </Form.Group>
                    </Form>
                    <p>{this.state.response}</p>
                    

                </div>
            </div>
            </div>
        )
    }
}

// export default AssessPage
