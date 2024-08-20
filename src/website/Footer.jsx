import React from 'react'
import footerImg1 from '../assets/images/footer/shape-1.svg'
import footerImg2 from '../assets/images/footer/shape-2.svg'
import footerImg3 from '../assets/images/footer/shape-3.svg'
import verdeBook from '../assets/images/logo/verdebook.png'
import caiif from '../assets/images/logo/caiif.png'
import sstrack from '../assets/images/logo/sstrack.png'
import clickHr from '../assets/images/logo/image (16).png'




const Footer = () => {

    return (
        <>
            <footer className="ud-footer wow fadeInUp" data-wow-delay=".15s">
                <div className="shape shape-1">
                    <img src={footerImg1} alt="shape" />
                </div>
                <div className="shape shape-2">
                    <img src={footerImg2} alt="shape" />
                </div>
                <div className="shape shape-3">
                    <img src={footerImg3} alt="shape" />
                </div>
                <div className="ud-footer-widgets">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="ud-widget">
                                    <a href="index.html" className="ud-footer-logo" style={{ textDecoration: 'none', color: 'black' }}>
                                        <h4 style={{ color: 'aliceblue', textDecoration: 'none' }}>
                                            INFINITI SUITE
                                        </h4>
                                    </a>
                                    <p className="ud-widget-desc">
                                        We create digital experiences for brands and companies by using technology.
                                    </p>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                                <div className="ud-widget">
                                    <h5 className="ud-widget-title">About Us</h5>
                                    <ul className="ud-widget-links">
                                        <li>
                                            <a href="#Home">Home</a>
                                        </li>
                                        <li>
                                            <a href="#About">About</a>
                                        </li>
                                        <li>
                                            <a href="#Pricing">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="#Contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                                <div className="ud-widget">
                                    <h5 className="ud-widget-title">Features</h5>
                                    <ul className="ud-widget-links">
                                        <li>
                                            <a href="howworks.html">How it works</a>
                                        </li>
                                        <li>
                                            <a href="privacy.html">Privacy policy</a>
                                        </li>
                                        <li>
                                            <a href="term.html">Terms of service</a>
                                        </li>
                                        <li>
                                            <a href="refund.html">Refund policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                                <div className="ud-widget">
                                    <h5 className="ud-widget-title">Our Products</h5>
                                    <ul className="ud-widget-links">
                                        <li>
                                            <a href="https://sstrack.com/" rel="nofollow noopener" target="_blank">SS-Track</a>
                                        </li>
                                        <li>
                                            <a href="https://click-hr.com/" rel="nofollow noopener" target="_blank">Click HR</a>
                                        </li>
                                        <li>
                                            <a href="https://verdebooks.com/" rel="nofollow noopener" target="_blank">Verdebooks</a>
                                        </li>
                                        <li>
                                            {/* <a href="https://caiif.ca/" rel="nofollow noopener" target="_blank">CAIIF</a> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-8 col-sm-10">
                                <div className="ud-widget">
                                    <h5 className="ud-widget-title">Partners</h5>
                                    <ul className="ud-widget-brands">
                                        <li>
                                            <a href="https://click-hr.com/" rel="nofollow noopener" target="_blank">
                                                <img style={{ width: '40px' }} src={clickHr} alt="ayroui" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://sstrack.com/" rel="nofollow noopener" target="_blank">
                                                <img style={{ width: '40px' }} src={sstrack} alt="ecommerce-html" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://verdebooks.com/" rel="nofollow noopener" target="_blank">
                                                <img style={{ width: '40px' }} src={verdeBook} alt="graygrids" />
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a href="https://caiif.ca" rel="nofollow noopener" target="_blank">
                                                <img style={{ width: '40px' }} src={caiif} alt="lineicons" />
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ud-footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <ul className="ud-footer-bottom-left">
                                    <li>
                                        <a href="privacy.html">Privacy policy</a>
                                    </li>
                                    <li>
                                        <a href="support.html">Support policy</a>
                                    </li>
                                    <li>
                                        <a href="term.html">Terms of service</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <p className="ud-footer-bottom-right">
                                    Designed and Developed by{' '}
                                    <a href="https://i8is.com" rel="nofollow">
                                        I8IS Infiniti Solution
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}



export default Footer