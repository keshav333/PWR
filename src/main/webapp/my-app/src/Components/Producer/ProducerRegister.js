import React, { Component } from 'react';
import {Button, Form, Col, Row} from 'react-bootstrap'
import './Producer.css'
class ProducerRegister extends Component {
    render() {
        return (
            <div className = "register">
                <Form>
                    <Form.Group as={Row} >
                        <Form.Label column sm={2}>
                        Name
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control id = "name" type="email" placeholder="Full Name"
                        onChange={() => this.props.getName(document.getElementById('name').value)}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Email
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" id = "email" placeholder="Email" 
                        onChange={() => this.props.getEmail(document.getElementById('email').value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Password
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control id = "pass" type="password" placeholder="Password" 
                        onChange={() => this.props.getPass(document.getElementById('pass').value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Date of Birth
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control id = "dob" type="date" 
                        onChange={() => this.props.getDOB(document.getElementById('dob').value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Business
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" id = "business" placeholder="business" 
                        onChange={() => this.props.getBusiness(document.getElementById('business').value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Description
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" id = "desc" placeholder="Business Description" 
                        onChange={() => this.props.getDesc(document.getElementById('desc').value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        State
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control id = "state" type="email" placeholder="State" 
                        onChange={() => this.props.getState(document.getElementById('state').value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        City
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control id = "city" type="email" placeholder="City" 
                        onChange={() => this.props.getCity(document.getElementById('city').value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Pincode
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control id = "pincode" type="email" placeholder="Pincode" 
                        onChange={() => this.props.getPincode(document.getElementById('pincode').value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Level
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control id = "level" type="email" placeholder="Level" 
                        onChange={() => this.props.getLevel(document.getElementById('level').value)}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default ProducerRegister;