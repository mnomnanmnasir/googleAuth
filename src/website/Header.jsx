import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../assets/images/logo/Infinity Logo Final Blue.png'
import heroBanner from '../assets/images/banner/crm-system-4487382-3722743.png'
import dootedImage from '../assets/images/hero/dotted-shape.svg'
import brandHero from '../assets/images/logo.png'
import verdeBook from '../assets/images/logo/verdebook.png'
import caiif from '../assets/images/logo/caiif.png'
import sstrack from '../assets/images/logo/sstrack.png'
import clickHr from '../assets/images/logo/image (16).png'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';




const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className="ud-header">
      <div className="container-fluid">
        <div className="row">
          {/* <div className='container-fluid'> */}
          <nav className="navbar navbar-expand-lg navbar-light justify-content-space-between">
            <Link className="navbar-brand" to="/">
              <img src={headerLogo} alt="Logo" />
            </Link>
            <button className="navbar-toggler" type="button" onClick={toggleMenu} style={{ color: 'black' }}>
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
            </button>
            <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
              <ul id="nav" className="navbar-nav mx-auto" style={{ textDecoration: 'none' }}>
                <li className="nav-item">
                  <a className="ud-menu-scroll text-black" href="#home" style={{ margin: '0 20px', textDecoration: 'none' }}>Home</a>
                </li>
                <li className="nav-item nav-item-has-children">
                  <a href="javascript:void(0)" className='text-black' style={{ margin: '0 20px', textDecoration: 'none' }}>Products</a>
                  <ul className="ud-submenu" style={{ textDecoration: 'none', color: 'black' }}>
                    <li className="ud-submenu-item">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                          <a href="https://sstrack.io/">
                            <div className="ud-single-feature wow fadeInUp" data-wow-delay=".1s">
                              <div className="ud-feature-icon">
                                <img src={sstrack} style={{ width: '50px' }} alt="" />
                              </div>
                              <div className="ud-feature-content" style={{ textDecoration: 'none' }}>
                                <h3 className="ud-feature-title" style={{ textDecoration: 'none', color: 'black' }}>SS-Track</h3>
                                <p className="ud-feature-desc">
                                  Employee monitoring software for remote, office and freelance teams.
                                </p>
                                <a href="https://sstrack.io/" className="ud-feature-link">
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                          <a href="https://www.click-hr.com/">
                            <div className="ud-single-feature wow fadeInUp" data-wow-delay=".15s">
                              <div className="ud-feature-icon">
                                <img src={clickHr} style={{ width: '50px' }} alt="" />
                              </div>
                              <div className="ud-feature-content">
                                <h3 className="ud-feature-title" style={{ textDecoration: 'none', color: 'black' }}>Click HR</h3>
                                <p className="ud-feature-desc">
                                  designed to streamline recruitment processes for staffing companies.
                                </p>
                                <a href="https://www.click-hr.com/" className="ud-feature-link">
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6" style={{ textDecoration: 'none', color: 'black' }}>
                          <a href="https://verdebooks.com/">
                            <div className="ud-single-feature wow fadeInUp" data-wow-delay=".2s">
                              <div className="ud-feature-icon">
                                <img src={verdeBook} style={{ width: '50px' }} alt="" />
                              </div>
                              <div className="ud-feature-content" style={{ textDecoration: 'none', color: 'black' }}>
                                <h3 className="ud-feature-title" style={{ textDecoration: 'none', color: 'black' }}>Verdebook</h3>
                                <p className="ud-feature-desc">
                                  Powerful accounting platform for growing businesses.
                                </p>
                                <a href="https://verdebooks.com/" className="ud-feature-link">
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </a>
                        </div>
                        {/* <div className="col-xl-3 col-lg-3 col-sm-6">
                        <a href="https://caiif.ca/">
                          <div className="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
                            <div className="ud-feature-icon">
                              <img src={caiif} style={{ width: '50px' }} alt="" />
                            </div>
                            <div className="ud-feature-content">
                              <h3 className="ud-feature-title" style={{ textDecoration: 'none', color: 'black' }}>CAIIF</h3>
                              <p className="ud-feature-desc">
                                CAIIF is the ultimate solution for managing all kinds of committees!
                              </p>
                              <a href="https://caiif.ca/" className="ud-feature-link">
                                Learn More
                              </a>
                            </div>
                          </div>
                        </a>
                      </div> */}
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item" style={{ margin: '0 20px', textDecoration: 'none' }}>
                  <a className="ud-menu-scroll text-black" href="#about" style={{ textDecoration: 'none' }}>About</a>
                </li>
                <li className="nav-item" style={{ margin: '0 20px', textDecoration: 'none' }}>
                  <a className="ud-menu-scroll text-black" href="#pricing" style={{ textDecoration: 'none' }}>Pricing</a>
                </li>
                <li className="nav-item" style={{ margin: '0 20px', textDecoration: 'none' }}>
                  <a className="ud-menu-scroll" href="#contact" style={{ textDecoration: 'none' }}>Contact</a>
                </li>
              </ul>
            </div>
            <div className="navbar-btn d-none d-sm-inline-block">
              <Link to="/login" className="ud-main-btn ud-login-btn text-black" style={{ textDecoration: 'none' }}>Login</Link>
              <Link className="ud-main-btn ud-white-btn text-white" to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
            </div>
          </nav>
          {/* </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
