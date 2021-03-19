import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Form, FormControl} from 'react-bootstrap';
import Logo from '../../assets/images/pwr.png'
import { Link } from 'react-router-dom';
import './Header.css'
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant = "dark" expand="lg">
                    <Navbar.Brand href="#home">PWR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link ><Link to ={"/"}>Home</Link></Nav.Link>
                        <Nav.Link><Link to = {"/producer"}>Producer</Link></Nav.Link>
                        <Nav.Link><Link to = {"/wholesaler"}>Wholesaler</Link></Nav.Link>
                        <Nav.Link><Link to = {"/retailer"}>Retailer</Link></Nav.Link>
                        
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    </Navbar>
            </div>
        );
    }
}

export default Header;