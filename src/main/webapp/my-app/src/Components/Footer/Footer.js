import React, { Component } from 'react';
import { NavbarBrand, Navbar, Nav, Container } from 'react-bootstrap';
class Footer extends Component {
    render() {
        return (
            <div>
                 <div className="fixed-bottom">  
                    <Navbar color="dark" dark>
                        <Container>
                            <NavbarBrand>Copyright 2020</NavbarBrand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" />
                            <Nav className="mr-auto">
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                            
                        
                        </Nav>
                        </Container>
                    </Navbar>
        </div>
            </div>
        );
    }
}

export default Footer;