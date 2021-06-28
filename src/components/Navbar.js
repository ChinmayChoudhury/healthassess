// import React from 'react'
import Navbarr from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Navbar = () => {
    return (
        // <text className="navbaritem" >Infographics</text>
        <Navbarr  className="navbarcust">
        <Navbarr.Brand className="navbarbrand" href="#home">Health Assess</Navbarr.Brand>
        <Navbarr.Toggle aria-controls="basic-navbar-nav" />
        <Navbarr.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link className="navbarlinks" href="/">Infographics</Nav.Link>
        <Nav.Link className="navbarlinks" href="/aboutus">About Us</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
        </Nav>  
        </Navbarr.Collapse>
        </Navbarr>
        
    )
}


export default Navbar
