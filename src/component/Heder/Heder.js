import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Heder.css';
import logo from '../../Images/Logo.png';

const Heder = () => {
    return (

                <Navbar className="navbar-style" variant="dark" >
                    <Link to="/"> <img className="logo" src={logo} alt=""/> </Link>
                    <Form inline>
                    <FormControl type="text" placeholder=" Search your Destination..." className="mr-sm-2" />
                    </Form>

                    <Nav className="ml-auto ">
                        <Link className="style-nav" to="/home">News</Link>
                        <Link className="style-nav" to="/destination">Destination</Link>
                        <Link className="style-nav" to="">Blog</Link>
                        <Link className="style-nav" to="">Contact</Link>
                        <Link className="style-nav" to="/login"><Button variant="warning">Login</Button></Link>
                    </Nav>
                </Navbar>

    );
};
export default Heder;