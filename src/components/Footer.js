import React from 'react';
import '../css/Footer.css';

const Footer = (props) => {
    const address = "No. 66/1, Bagmane Commerz 02, Bagmane Tech Park, C V Raman Nagar, Bengaluru, Karnataka 560093";
    return(
        <div className='footer' style={props.style} data-testid='footer' >
            <h3>Informatica LLC</h3>
            <p> { address } </p>

        </div>
    );
}

export default Footer;