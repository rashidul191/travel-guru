import React from 'react';
import './Home.css';

import { Button, Jumbotron,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sajek from './Images/Sajek.png';
import Sreemongol from './Images/Sreemongol.png';
import Sundorbon from './Images/sundorbon.png';

const Home = () => {
    return (
           <div className="body">
               <div className="bg-style">
                    <div className="col-sm-4 color-body">
                        <h1>COX'S BAZAR</h1>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it.....</p>
                        <Link to="/coxsbazar"><Button variant="warning">Booking</Button>{' '}</Link>
                    </div>
                    <div className="col-sm-8 img-body">
                            <Link to="/coxsbazar"><img className="img-style" src={Sajek} alt=""/></Link>
                            <Link to="/sreemangal"><img className="img-style" src={Sreemongol} alt=""/></Link>
                            <Link to="/sundarbans"> <img className="img-style" src={Sundorbon} alt=""/> </Link>
                    </div>
                </div>
           </div>
    );
};

export default Home;