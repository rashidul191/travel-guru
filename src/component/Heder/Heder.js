import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Heder = () => {
    return (
        
            
            <Navbar bg="dark" variant="dark" >
                    <Navbar.Brand href="/"> Rashidul </Navbar.Brand>
                    <Form inline>
                    <FormControl type="text" placeholder=" Search your Destination..." className="mr-sm-2" />
                    </Form>

                    <Nav className="mr-auto ">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Link to="/login"><Button variant="warning">Login</Button></Link>
                    </Nav>
                </Navbar>
            
        
    );
};

export default Heder;