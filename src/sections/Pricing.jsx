import React from 'react';
import './../../src/styles/style.css';
import pricingBg from './../assets/images/pricing-bg.jpg'
import pricing1 from './../assets/images/pricing-1.jpg'
import pricing2 from './../assets/images/pricing-2.jpg'
import pricing3 from './../assets/images/pricing-3.jpg'
import pricing4 from './../assets/images/pricing-4.jpg'
import pricing5 from './../assets/images/pricing-5.jpg'
import pricing6 from './../assets/images/pricing-6.jpg'
import pricing7 from './../assets/images/pricing-7.jpg'

const Pricing = () => {
    return <>
        <section className="section pricing has-bg-image has-before" id="pricing" aria-label="pricing" style={{backgroundImage: `url(${pricingBg})`}}>
            <div className="container">
                <h2 className="h2 section-title text-center">Awesome Pricing Plan</h2>
                <p className="section-text text-center">
                    Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua
                    suspendisse
                </p>

                <div className="pricing-tab-container">
                    <ul className="tab-filter">
                        <li>
                            <button className="filter-btn active" data-filter-btn="all">
                                <div className="btn-icon">
                                    <i className="flaticon-beauty-salon" aria-hidden="true"></i>
                                </div>
                                <p className="btn-text">All Pricing</p>
                            </button>
                        </li>

                        <li>
                            <button className="filter-btn" data-filter-btn="beauty-spa">
                                <div className="btn-icon">
                                    <i className="flaticon-relax" aria-hidden="true"></i>
                                </div>
                                <p className="btn-text">Towel and Wash</p>
                            </button>
                        </li>

                        <li>
                            <button className="filter-btn" data-filter-btn="body-treatments">
                                <div className="btn-icon">
                                    <i className="flaticon-massage" aria-hidden="true"></i>
                                </div>
                                <p className="btn-text">Hair Cuts</p>
                            </button>
                        </li>

                        <li>
                            <button className="filter-btn" data-filter-btn="face-washing">
                                <div className="btn-icon">
                                    <i className="flaticon-spa" aria-hidden="true"></i>
                                </div>
                                <p className="btn-text">Children</p>
                            </button>
                        </li>

                        <li>
                            <button className="filter-btn" data-filter-btn="shaving">
                                <div className="btn-icon">
                                    <i className="flaticon-razor-blade" aria-hidden="true"></i>
                                </div>
                                <p className="btn-text">Shaving</p>
                            </button>
                        </li>
                    </ul>

                    <ul className="grid-list">
                        <li data-filter="shaving">
                            <div className="pricing-card">
                                <figure className="card-banner img-holder"
                                        style={{ width: '90px', height: '90px' }}>
                                    <img src={pricing1} width="90" height="90"
                                         alt="Hair Cutting & Fitting"
                                         className="img-cover"/>
                                </figure>
                                <div className="wrapper">
                                    <h3 className="h3 card-title">Hair Cutting & Fitting</h3>
                                    <p className="card-text">Clean & simple 30-40 minutes</p>
                                </div>

                                <data className="card-price" value="89">£50</data>
                            </div>
                        </li>

                        <li data-filter="shaving">
                            <div className="pricing-card">
                                <figure className="card-banner img-holder"
                                        style={{ width: '90px', height: '90px' }}>
                                    <img src={pricing2} width="90" height="90"
                                         alt="Shaving & Facial"
                                         className="img-cover"/>
                                </figure>

                                <div className="wrapper">
                                    <h3 className="h3 card-title">Shaving & Facial</h3>
                                    <p className="card-text">Clean & simple 30-40 minutes</p>
                                </div>
                                <data className="card-price" value="45">£50</data>
                            </div>
                        </li>

                        <li data-filter="face-washing">
                            <div className="pricing-card">
                                <figure className="card-banner img-holder"
                                        style={{ width: '90px', height: '90px' }}>
                                    <img src={pricing3} width="90" height="90"
                                         alt="Hair Color & Wash"
                                         className="img-cover"/>
                                </figure>
                                <div className="wrapper">
                                    <h3 className="h3 card-title">Hair Color & Wash</h3>
                                    <p className="card-text">Clean & simple 30-40 minutes</p>
                                </div>
                                <data className="card-price" value="35">£50</data>
                            </div>
                        </li>

                        <li data-filter="body-treatments">
                            <div className="pricing-card">
                                <figure className="card-banner img-holder"
                                        style={{ width: '90px', height: '90px' }}>
                                    <img src={pricing4} width="90" height="90"
                                         alt="Body Massage"
                                         className="img-cover"/>
                                </figure>
                                <div className="wrapper">
                                    <h3 className="h3 card-title">Body Massage</h3>
                                    <p className="card-text">Clean & simple 30-40 minutes</p>
                                </div>
                                <data className="card-price" value="56">£50</data>
                            </div>
                        </li>

                        <li data-filter="beauty-spa">
                            <div className="pricing-card">
                                <figure className="card-banner img-holder"
                                        style={{ width: '90px', height: '90px' }}>
                                    <img src={pricing5} width="90" height="90"
                                         alt="Beauty & Spa"
                                         className="img-cover"/>
                                </figure>
                                <div className="wrapper">
                                    <h3 className="h3 card-title">Beauty & Spa</h3>
                                    <p className="card-text">Clean & simple 30-40 minutes</p>
                                </div>
                                <data className="card-price" value="27">£50</data>
                            </div>
                        </li>

                        <li data-filter="face-washing">
                            <div className="pricing-card">
                                <figure className="card-banner img-holder"
                                        style={{ width: '90px', height: '90px' }}>
                                    <img src={pricing6} width="90" height="90"
                                         alt="Facial & Face Wash"
                                         className="img-cover"/>
                                </figure>
                                <div className="wrapper">
                                    <h3 className="h3 card-title">Facial & Face Wash</h3>
                                    <p className="card-text">Clean & simple 30-40 minutes</p>
                                </div>
                                <data className="card-price" value="63">£50</data>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    </>;
};

export default Pricing;