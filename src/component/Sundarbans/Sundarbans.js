import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sundarbans = () => {
    return (
        <div className="body-style">
             <div className="col-sm-4">
                <h1>SUNDARBANS</h1>
                <p>Sundarbans is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            </div>
            <div className="form-style">
         
                <Form>
                    <Form.Group controlId="formGroup">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control type="text" placeholder="Enter your places name" />
                    </Form.Group>
                    <Form.Group controlId="formGroup">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control type="text" placeholder="Enter your places name" />
                    </Form.Group>
                    <Form.Row>
                        <Col>
                        <Form.Label>Form</Form.Label>
                        <Form.Control placeholder="First name" />
                       
                        </Col>
                        <Col>
                        <Form.Label>To</Form.Label>
                        <Form.Control placeholder="Last name" />
                        </Col>
                        <Link to="/login">
                            <Button className="btn-style" variant="warning" size="sm" block>
                            Start Booking
                            </Button>
                        </Link>
                    </Form.Row>
                </Form>
                
            </div>
        </div>
    );
};

export default Sundarbans;