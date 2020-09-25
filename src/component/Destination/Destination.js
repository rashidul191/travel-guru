import React from 'react';
import './Destination.css';
import img1 from '../../Images/Image/Rectangle 26.png';
import img2 from '../../Images/Image/Rectangle 27.png';
import img3 from '../../Images/Image/Rectangle 28.png';



const Destination = () => {
    return (
        <div>
            <h2>Stay in Cox's Bazar</h2>
            <div className="destination-style">
            <div className="">
               <div>
                    <img src={img1} alt=""/>
               </div>
               <div>
                   <h3>Light bright airy stylish apt & safe peaceful stay</h3>
                   <p>4 guests 2 bedrooms 2 beds 2baths </p>
                   <p>Wif Air conditioning Kitchen</p> 
                   <p> Cancellation fexibility availiable</p>
                   <p> ⭐ 4.9(20) $34/<span>night $167total</span></p>
               </div>
                <div>
                    <img src={img2} alt=""/>
                </div>
                <div>
                   <h3>Apartment in Lost Panorama</h3>
                   <p>4 guests 2 bedrooms 2 beds 2baths </p>
                   <p>Wif Air conditioning Kitchen</p> 
                   <p> Cancellation fexibility availiable</p>
                   <p> ⭐ 4.9(20) $34/<span>night $167total</span></p>
               </div>
                <div>
                    <img src={img3} alt=""/>
                </div>
                <div>
                   <h3>AR Lounge & Pool (r&r + b&b)</h3>
                   <p>4 guests 2 bedrooms 2 beds 2baths </p>
                   <p>Wif Air conditioning Kitchen</p> 
                   <p> Cancellation fexibility availiable</p>
                   <p> ⭐ 4.9(20) $34/<span>night $167total</span></p>
               </div>
            </div>
            <div>

                <h1>Google Map site....</h1>
            </div>
        </div>
        </div>
    );
};

export default Destination;