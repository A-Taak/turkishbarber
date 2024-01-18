import React from 'react';
import './../../styles/style.css';
// import './../../assets/js/script.js'


const Header = () => {

    return <>
        <header className="header">

            <div className="header-top">
                <div className="container">
                    <ul className="header-top-list">
                        <li className="header-top-item">
                            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                            <p className="item-title">Call Us :</p>
                            <a href="tel:01214202222" className="item-link">0121 420 2222</a>
                        </li>

                        <li className="header-top-item">
                            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                            <p className="item-title">Opening Hour :</p>
                            <p className="item-text">Monday - Sunday, 09 am - 06 pm</p>
                        </li>

                        <li>
                            <ul className="social-list">
                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                                    </a>
                                </li>
                            </ul>
                        </li>

                    </ul>

                </div>
            </div>

            <div className="header-bottom" data-header>
                <div className="container">

                    <a href="#" className="logo">
                        Best Turkish Barbers
                        <span className="span">Hairdressers</span>
                    </a>

                    <nav className="navbar container" data-navbar>
                        <ul className="navbar-list">

                            <li className="navbar-item">
                                <a href="#home" className="navbar-link" data-nav-link>Home</a>
                            </li>

                            <li className="navbar-item">
                                <a href="#services" className="navbar-link" data-nav-link>Services</a>
                            </li>

                            <li className="navbar-item">
                                <a href="#pricing" className="navbar-link" data-nav-link>Pricing</a>
                            </li>

                            <li className="navbar-item">
                                <a href="#gallery" className="navbar-link" data-nav-link>Gallery</a>
                            </li>

                            <li className="navbar-item">
                                <a href="#contact" className="navbar-link" data-nav-link>Contact</a>
                            </li>

                        </ul>
                    </nav>

                    <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
                        <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <a href="#" className="btn has-before">
                        <span className="span">Appointment</span>

                        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </a>

                </div>
            </div>

        </header>
    </>
};

export default Header;


