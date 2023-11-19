import React from 'react';
import './../../styles/style.css';
import footerBg from '../../assets/images/footer-bg.png'
import footerBlog from '../../assets/images/footer-blog-1.jpg'

const Footer = () => {
    return <>
        <footer className="footer has-bg-image" id="contact"
                style={{backgroundImage: `url(${footerBg})`}}>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand"></div>
                    <div className="footer-link-box">
                        <ul className="footer-list">

                            <li>
                                <p className="footer-list-title">Quick Links</p>
                            </li>

                            <li>
                                <a href="#" className="footer-link has-before">Our Services</a>
                            </li>

                            <li>
                                <a href="#" className="footer-link has-before">Meet Our Team</a>
                            </li>

                            <li>
                                <a href="#" className="footer-link has-before">Our Portfolio</a>
                            </li>

                            <li>
                                <a href="#" className="footer-link has-before">Need A Career?</a>
                            </li>

                            <li>
                                <a href="#" className="footer-link has-before">News & Blog</a>
                            </li>

                        </ul>

                        <ul className="footer-list">

                            <li>
                                <p className="footer-list-title">Services</p>
                            </li>

                            <li>
                                <a href="#" className="footer-link has-before">Hair Cutting</a>
                            </li>

                            <li>
                                <a href="#" className="footer-link has-before">Shaving & Design</a>
                            </li>

                            <li>
                                <a href="#" className="footer-link has-before">Hair Colors</a>
                            </li>

                            <li>
                                <a href="#" className="footer-link has-before">Beauty & Spa</a>
                            </li>

                            <li>
                                <a href="#" className="footer-link has-before">Body Massages</a>
                            </li>

                        </ul>

                        <ul className="footer-list">

                            <li>
                                <p className="footer-list-title">Recent News</p>
                            </li>

                            <li>
                                <div className="blog-card">

                                    <figure className="card-banner img-holder"
                                            style={{ width: '70px', height: '75px' }}>
                                        <img src={footerBlog} width="70" height="75"
                                             loading="lazy"
                                             alt="The beginners guide to Henna Brows in Brisbane" className="img-cover"/>
                                    </figure>

                                    <div className="card-content">
                                        <h3>
                                            <a href="#" className="card-title">Hired new Barber</a>
                                        </h3>

                                        <div className="card-date">
                                            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                                            <time datetime="2022-08-25">25 August 2023</time>
                                        </div>
                                    </div>

                                </div>
                            </li>

                        </ul>

                        <ul className="footer-list">

                            <li>
                                <p className="footer-list-title">Contact Us</p>
                            </li>

                            <li className="footer-list-item">
                                <ion-icon name="location-outline" aria-hidden="true"></ion-icon>

                                <address className="contact-link">
                                    Bearwood Highstreet
                                </address>
                            </li>

                            <li className="footer-list-item">
                                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

                                <a href="tel:+0123456789" className="contact-link">0121 420 2222</a>
                            </li>

                            <li className="footer-list-item">
                                <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                                <span className="contact-link">Sun - Friday, 09 am - 06 pm</span>
                            </li>

                            <li className="footer-list-item">
                                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                                <a href="mailto:support@gmail.com" className="contact-link">support@gmail.com</a>
                            </li>

                        </ul>

                    </div>

                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; 2023 <a href="https://ajaytaak.com/" className="copyright-link">ATAAK LTD</a>. All Rights
                        Reserved.
                    </p>
                </div>

            </div>
        </footer>
    </>
;
};

export default Footer;