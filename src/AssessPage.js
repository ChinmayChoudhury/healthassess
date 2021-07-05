import React from 'react'
import {useState, useEffect} from 'react'

import Form from 'react-bootstrap/Form'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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
        this.handleClick = this.handleClick.bind(this);
    }

    // const [ress, setRess];

    // const [name,email,age,s1,s2,s3,s4,handlesubmit,sendrequest]=useState();
    // const [name,setName] = useState('');
    // const [email, setEmail] = useState();
    // const [age, setAge] = useState(0);
    // const [s1,setS1] = useState(0);
    // const [s2,setS2] = useState(0);
    // const [s3,setS3] = useState(0);
    // const [s4,setS4] = useState(0);
    // const [] = useState();

    handleNameChange = (event)=>{
        this.setState({name: event.target.value});
        // console.log(this.state.name);
        // name = event.target.value
        // setName(event.target.value);
        // this.setState({name:})
    }
    handleEmailChange = (event)=>{
        this.setState({email: event.target.value})
        // setEmail(event.target.value)
    }
    handleAgeChange = (event)=>{
        this.setState({age: event.target.value})
        // setAge(event.target.value)
    }
    handleS1Change = (event)=>{
        this.setState({s1: event.target.value})
        // setS1(event.target.value)
    }
    handleS2Change = (event)=>{
        this.setState({s2: event.target.value})
        // setS2(event.target.value)
    }
    handleS3Change = (event)=>{
        this.setState({s3: event.target.value})
        // setS3(event.target.value)
    }
    handleS4Change = (event)=>{
        this.setState({s4: event.target.value})
        // setS4(event.target.value)
    }
    handlesubmit = (event)=>{
        // console.log("submit"+this.state.name)
        fetch('/assesshealth').then(res=>res.json().then(data=>{
            this.setState({response: data.disease})
        }))
    }

    // componentDidMount(){
    //     this.handleClick();
    // }

    handleClick= (event)=>{
        console.log(this.state.name);
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
                                <FormControl type="text" className="pill" placeholder="Enter a symptom" value = {this.state.s1} onChange={this.handleS1Change} />
                            
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="symptom2">
                            <Form.Label column lg="3">Symptom #2:</Form.Label>
                            <Col lg="9">
                                <FormControl type="text" className="pill" placeholder="Enter a symptom" value={this.state.s2} onChange={this.handleS2Change}/>
                            
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="symptom3">
                            <Form.Label column lg="3">Symptom #3:</Form.Label>
                            <Col lg="9">
                                <FormControl type="text" className="pill" placeholder="Enter a symptom" value={this.state.s3} onChange={this.handleS3Change}/>
                            
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="symptom4">
                            <Form.Label column lg="3">Symptom #4:</Form.Label>
                            <Col lg="9">
                                <FormControl type="text" className="pill" placeholder="Enter a symptom" value={this.state.s4} onChange={this.handleS4Change}/>
                            
                            </Col>
                        </Form.Group>
                        <Form.Group as ={Row} className="btncustom">
                            <Col lg="12">
                                <Button  type="submit" className="pill " onClick={this.handleClick}>
                                    Submit
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                    <p>{this.state.response}</p>
                    <Button  type="submit" className="pill " onClick={this.handleClick}>
                                    Submit
                                </Button>

                                <p>data from pyserver: {this.response} </p>

                </div>
            </div>
            </div>
        )
    }
}

// export default AssessPage
