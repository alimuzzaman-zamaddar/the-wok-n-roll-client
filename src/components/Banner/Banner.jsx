import React from 'react';
import './Banner.css'
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container className='banner-section my-5'>

            <div className="banner-info">
               <h1 className='display-4 fw-bolder my-3'>The most praised $ Great Traditions in Chinese cuisine are Here
                 !!</h1>
                 <p> <small>Chinese cuisine encompasses the numerous cuisines originating from China, as well as overseas cuisines created by the Chinese diaspora. Because of the Chinese diaspora and Chinese food staples such as rice, soy sauce, noodles, tea, chili oil, and tofu, and utensils such as chopsticks and the wok, can now be found worldwide</small>  </p>

                 <div className="button mt-3">
                 <button className='btn btn-outline-secondary w-50 text-white'>Feel Free To Call Us</button>
                 </div>
            </div>

            
        </Container>
    );
};

export default Banner;