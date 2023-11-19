import React from 'react';
import './../../src/styles/style.css';
import bg from './../assets/images/hero-banner.jpg'


const Hero = () => {
    return <>
        <section className="section hero has-before has-bg-image" id="home" aria-label="home" style={{backgroundImage: `url(${bg})`}}>
            <div className="container">

                <h1 className="h1 hero-title">Barbers & Hair Cutting</h1>

                <p className="hero-text">
                    Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                    suspendisse
                    ultrices gravida
                </p>

                <a href="#appointment" className="btn has-before">
                    <span className="span">Book Now</span>

                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>

            </div>
        </section>
    </>;
};

export default Hero;