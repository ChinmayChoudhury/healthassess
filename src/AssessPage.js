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
import Symptoms from './components/symptoms.json'
import Confetti from 'react-confetti'
export default class AssessPage extends React.Component {

    constructor(){
        super();
        this.state={
            name: '',
            email:'',
            age:0,
            s1:'',
            s2:'',
            s3:'',
            s4:'',
            s5:'',
            response:'Please provide details to predict the disease',
            location:'',
            predicted: false,
            results:''
        };
        this.handleNameChange  = this.handleNameChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    sympOptions = new Array();
    componentWillMount(){
        Object.keys(Symptoms).forEach((k)=>{
            // let temp = 
            // this.setState(prevstate =>(
            //     {sympOptions:[...prevstate.sympOptions, {key:k, value:Symptoms[k][0],text:k}]}
            // )
            //     );
            this.sympOptions.push({key:k, value:k, text: Symptoms[k][0]})
        });
        console.log(this.state.sympOptions)
    }


    handleNameChange = (event)=>{
        this.setState({name: event.target.value});
        
    }
    handleLocChange = (event)=>{
        this.setState({location: event.target.value});
        
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

    handleS5Change = (event, {value})=>{
        this.setState({s5: value})
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
                this.setState({predicted:true});
            }))
        }
        
    }


    getS1Val = (event, {value})=>{
        console.log(value);
        this.setState({s1:value});
    }

    componentDidMount(){
        console.log(this.state.sympOptions)
    }
    
    onConfettiDone(){
        this.setState({confettirecycle: false});
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
                        <Form.Group as={Row} controlId="loc">
                            <Form.Label column lg="3">Location:</Form.Label>
                            <Col lg="9">
                                <FormControl type="text" className="pill" placeholder="Enter location" value ={this.state.location} onChange={this.handleLocChange} />
    
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
                        <Form.Group as={Row} controlId="symptom4">
                            <Form.Label column lg="3">Symptom #5:</Form.Label>
                            <Col lg="9">
                                {/* <FormControl type="text" className="pill" placeholder="Enter a symptom" value={this.state.s4} onChange={this.handleS4Change}/> */}
                                <Dropdown
                                    placeholder='Symptom'
                                    search selection
                                    options={this.sympOptions}
                                    value = {this.state.s5}
                                    onChange={this.handleS5Change}
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
                    
                            
                </div>
                <div className="resultDiv">
            <p className="divTitle">Your results: <span className="cheapMessage">{this.state.response}</span></p>  
            {/* <Confetti
                width = {window.width}
                height = {window.height}
                recycle = {false}
                numberOfPieces = {700}
                // tweenDuration = {2000}
                />   */}
        </div>
            </div>
            </div>
        )
    }

}
// export default AssessPage
