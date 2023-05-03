import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <Container className='py-5 footer'>
           
           <div className='text-center'>
            <h3>Opening Hours</h3>
            <h5>monday : 11 : 00 To 20 : 00</h5>
            <h5>Tuesday : 11 : 00 To 20 : 00</h5>
            <h5>wednesday : 11 : 00 To 20 : 00</h5>
            <h5>Thursday : 11 : 00 To 20 : 00</h5>
            <h5>Friday : 11 : 00 To 20 : 00</h5>
            <h5>Sun day  : closed</h5>
    
           </div>
           <div className='text-center'>
            <h3>Follow Us</h3>
            <span className='fs-1'> <FaTwitter></FaTwitter> </span>
            <span className='fs-1'> <FaInstagram></FaInstagram> </span>
            <span className='fs-1'> <FaFacebook></FaFacebook> </span>
            <span className='fs-1'> <FaYoutube></FaYoutube> </span>
            <p>address</p>
            <p>road: 23 /house: 55</p>
            <p>gulshan Dhaka 1212</p>
           </div>
           <div className='text-center'>
            <h3>Contact Us Us</h3>
            <input className='form-control mb-3' type="text" placeholder='Name' />
            <input className='form-control mb-3' type="text" placeholder='email' />
            <input className='form-control mb-3' type="text" placeholder='phone' />
            <button className='form-control btn btn-outline-info'>send</button>
           
           </div>

            
        </Container>
    );
};

export default Footer;