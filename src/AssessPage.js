import React from 'react'
import Form from 'react-bootstrap/Form'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
const AssessPage = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div>
            <div className="pagetitle">
                Your health assessment
            </div>
            <div className="formdiv mt-5">
                
                <Form>
                    <Form.Group as={Row} controlId="name">
                        <Form.Label column lg="3">Name:</Form.Label>
                        <Col lg="9">
                            <FormControl type="text" className="pill" placeholder="Enter name" />

                        </Col>
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    <Form.Group as={Row} controlId="email">
                        <Form.Label column lg="3">Email address:</Form.Label>
                        <Col lg="9">
                            <FormControl type="email" className="pill" placeholder="Enter email" />
                        
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="age">
                        <Form.Label column lg="3">Age:</Form.Label>
                        <Col lg="9">
                            <FormControl type="number" className="pill" placeholder="Enter age" />
                        
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="symptom1">
                        <Form.Label column lg="3">Symptom #1:</Form.Label>
                        <Col lg="9">
                            <FormControl type="text" className="pill" placeholder="Enter a symptom" />
                        
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="symptom2">
                        <Form.Label column lg="3">Symptom #2:</Form.Label>
                        <Col lg="9">
                            <FormControl type="text" className="pill" placeholder="Enter a symptom" />
                        
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="symptom3">
                        <Form.Label column lg="3">Symptom #3:</Form.Label>
                        <Col lg="9">
                            <FormControl type="text" className="pill" placeholder="Enter a symptom" />
                        
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="symptom4">
                        <Form.Label column lg="3">Symptom #4:</Form.Label>
                        <Col lg="9">
                            <FormControl type="text" className="pill" placeholder="Enter a symptom" />
                        
                        </Col>
                    </Form.Group>
                    <Form.Group as ={Row} className="btncustom">
                        <Col lg="12">
                            <Button  type="submit" className="pill ">
                                Submit
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
                
            </div>
        </div>
        </div>
    )
}

export default AssessPage
