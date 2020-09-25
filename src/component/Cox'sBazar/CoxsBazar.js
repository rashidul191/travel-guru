import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './CoxsBazar.css';

const CoxsBazar = () => {
    const history = useHistory()

    const handleBooking = () => {
        history.push("/destination");
    }
    return (
       <div className="body">
            <div className="bg-style">
                <div className="body-style">
                    
                    <div className="col-sm-4">
                        <h1>COX's BAZAR</h1>
                        <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                    </div>
                    <div className="form-style">
                            <form action="">
                                <p>Origin</p>
                                <input type="text" placeholder="Enter your places name"/>
                                <p>Destination</p>
                                <input type="text" placeholder="Enter your places name"/>
                                <br/>
                                <label htmlFor="">From</label>
                                <br/>
                                <input type="date" name="" id=""/>
                                <br/>
                                <label htmlFor="">To</label>
                                <br/>
                                <input type="date" name="" id=""/>
                                <br/>
                                <br/>
                                <Button onClick={handleBooking} variant="warning" size="lg" block>
                                    Start Booking
                                </Button>
                            </form>
                    </div>
                </div>
            </div>
       </div>
    
    );
};

export default CoxsBazar;