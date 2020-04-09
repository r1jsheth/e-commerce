import React from 'react';
import '../css/Footer.css';

const Footer = (props) => {

    return(
        <div className='footer' style={props.style} >
            <h3>Informatica LLC</h3>
            <p>No. 66/1, Bagmane Commerz 02, Bagmane Tech Park, C V Raman Nagar, Bengaluru, Karnataka 560093</p>

        </div>
    );
}

export default Footer;