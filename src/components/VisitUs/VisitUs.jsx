import React from 'react';
import './VisitUs.css'
import { Container } from 'react-bootstrap';

const VisitUs = () => {
    return (
        <Container>
            <div className="visit-title">
                <h1>Visit Us Online and Offline !!!</h1>
                <p>wanna have fun and if you are hungry and want have delicious food from our master chefs,you can visit us online and offline when ever you want we are open 24 by 7.you are always welcome</p>
            </div>
            <div className="visit-us-section">
            <iframe width="600" height="450" src="https://www.youtube.com/embed/zCuBSUebt1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.9344382215895!2d90.41345705200224!3d23.782138772186503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79eeabe5a93%3A0xbea5f55ccedff8ac!2sWok%20%26%20Fire!5e0!3m2!1sen!2sbd!4v1683008100818!5m2!1sen!2sbd" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> 
        </Container>
    );
};

export default VisitUs;