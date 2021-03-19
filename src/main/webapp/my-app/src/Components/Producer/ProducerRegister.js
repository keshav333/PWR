import React, { Component } from 'react';
import {Button, Form, Col, Row} from 'react-bootstrap'
import './Producer.css'
class ProducerRegister extends Component {
    render() {
        return (
            <div className = "register">
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Name
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" placeholder="Full Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                        Email
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Password
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Date of Birth
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="date" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Business
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Description
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" placeholder="Business Description" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        State
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" placeholder="State" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        City
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" placeholder="City" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Pincode
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" placeholder="Pincode" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Level
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" placeholder="Level" />
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