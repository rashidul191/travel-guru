import React from 'react';
import './Home.css';
import { Button, Jumbotron,} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
       
           <div className="body">
               <div className="col-sm-4">
                    <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Jumbotron>
               </div>
               <div className="col-sm-8">
                    <Link to="/coxsbazar"><Button variant="primary">Coxsbazar</Button>{' '}</Link>
                    <Link to="/sreemangal"><Button variant="secondary">Sreemangal</Button>{' '}</Link>
                    <Link to="/sundarbans"><Button variant="success">Sundarbans</Button>{' '}</Link>
               </div>
           </div>
       
    );
};

export default Home;