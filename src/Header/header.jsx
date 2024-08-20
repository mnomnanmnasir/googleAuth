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
import aboutImg from '../assets/images/about/about-image.svg'
import faqImg from '../assets/images/faq/shape.svg'
import footerImg1 from '../assets/images/footer/shape-1.svg'
import footerImg2 from '../assets/images/footer/shape-2.svg'
import footerImg3 from '../assets/images/footer/shape-3.svg'


const Header = () => {


  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 20px
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the initial visibility when component mounts
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to the top of the page when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
    <header className="ud-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand" to="/">
                <img src={headerLogo} alt="Logo" />
              </Link>
              <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                <ul id="nav" className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#home">Home</a>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <a href="javascript:void(0)">Products</a>
                    <ul className="ud-submenu">
                      <li className="ud-submenu-item">
                        <div className="row">
                          <div className="col-xl-3 col-lg-3 col-sm-6">
                            <a href="https://sstrack.io/">
                              <div className="ud-single-feature wow fadeInUp" data-wow-delay=".1s">
                                <div className="ud-feature-icon">
                                  <img src={sstrack} style={{ width: '50px' }} alt="" />
                                </div>
                                <div className="ud-feature-content">
                                  <h3 className="ud-feature-title">SS-Track</h3>
                                  <p className="ud-feature-desc">Employee monitoring software for remote, office and freelance teams.</p>
                                  <a href="https://sstrack.io/" className="ud-feature-link">
                                    Learn More
                                  </a>
                                </div>
                              </div>
                            </a>
                          </div>
                          {/* Other product items */}
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#pricing">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="navbar-btn d-none d-sm-inline-block">
                <Link to="login.html" className="ud-main-btn ud-login-btn">Login</Link>
                <Link className="ud-main-btn ud-white-btn" to="signup.html">Sign Up</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
      <section className="ud-hero" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
                <h1 className="ud-hero-title">
                  Your life's work, powered by our life's work
                </h1>
                <p className="ud-hero-desc">
                  A unique and powerful software suite to transform the way you work. Designed for businesses of all sizes,
                  built by a company that values your privacy.
                </p>
                <ul className="ud-hero-buttons">
                  <li>
                    <a href="signup.html" rel="nofollow noopener" target="_blank" className="ud-main-btn ud-white-btn">
                      Sign Up Now
                    </a>
                  </li>
                  <li>
                    <a href="#about" rel="nofollow noopener" target="_blank" className="ud-main-btn ud-link-btn">
                      Learn More <i className="lni lni-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ud-hero-brands-wrapper wow fadeInUp" data-wow-delay=".3s">
                <img src={brandHero} alt="brand" />
              </div>
              <div className="ud-hero-image wow fadeInUp" data-wow-delay=".25s">
                <img src={heroBanner} alt="hero-image" />
                <img src={dootedImage} alt="shape" className="shape shape-1" />
                <img src={dootedImage} alt="shape" className="shape shape-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="ud-features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-section-title">
                <span>FEATURED APPS</span>
                <h2>Main Features of Play</h2>
                <p>
                  Business Software.
                  Our Craft. Our Passion.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="ud-single-feature wow fadeInUp" data-wow-delay=".1s">
                <div className="ud-feature-icon">
                  <img src={sstrack} style={{ width: '50px' }} alt="SS-Track" />
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">SS-Track</h3>
                  <p className="ud-feature-desc">
                    A manager invites employees to sstrack.io, where they download a streamlined desktop application, choose a project to work on, and hit the Start button. This initiates tracking, sending data to the web instantly until they press the Stop button.
                  </p>
                  <a href="https://sstrack.io/" className="ud-feature-link">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="ud-single-feature wow fadeInUp" data-wow-delay=".15s">
                <div className="ud-feature-icon">
                  <img src={clickHr} style={{ width: '50px' }} alt="Click HR" />
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">Click HR</h3>
                  <p className="ud-feature-desc">
                    We combine advanced technology with deep industry insights to redefine how companies recruit top talent. Our intuitive platform simplifies hiring while ensuring precision and efficiency in connecting the right candidates with the right opportunities.
                  </p>
                  <a href="https://www.click-hr.com/" className="ud-feature-link">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="ud-single-feature wow fadeInUp" data-wow-delay=".2s">
                <div className="ud-feature-icon">
                  <img src={verdeBook} style={{ width: '50px' }} alt="Verdebook" />
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">Verdebook</h3>
                  <p className="ud-feature-desc">
                    Our Payroll software is easy to use, with an intuitive interface that makes it easy for you to find the information you need, and for your candidates to fill out their profiles quickly.
                  </p>
                  <a href="https://verdebooks.com/" className="ud-feature-link">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
                <div className="ud-feature-icon">
                  <img src={caiif} style={{ width: '50px' }} alt="CAIIF" />
                </div>
                <div className="ud-feature-content">
                  <h3 className="ud-feature-title">CAIIF</h3>
                  <p className="ud-feature-desc">
                    CAIIF, the Canadian Islamic Investment Fund, is a forward-thinking investment entity that pioneers financial solutions rooted in the principles of Islamic finance.
                  </p>
                  <a href="https://caiif.ca" className="ud-feature-link">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="about" className="ud-about">
        <div className="container">
          <div className="ud-about-wrapper wow fadeInUp" data-wow-delay=".2s">
            <div className="ud-about-content-wrapper">
              <div className="ud-about-content">
                {/* <span className="tag">About Us</span> */}
                <h2>Make sales success inevitable with Infiniti Suite</h2>
                <p>
                  Good software is a work of art, and good art takes time. Our teams spend years mastering their craft in
                  order to deliver exceptional products that customers love. Software isn't just our paycheck
                </p>

                <p>
                  We believe that software is the ultimate product of the hands and the mind. And we take pride in creating
                  products and solutions that help solve business problems, anticipate needs, and discover opportunities to
                  help you grow.
                </p>
                <a href="#contact" className="ud-main-btn">Contact</a>
              </div>
            </div>
            <div className="ud-about-image">
              <img src={aboutImg} alt="about-image" />
            </div>
          </div>
        </div>
      </section>


      <section id="pricing" className="ud-pricing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-section-title mx-auto text-center">
                <span>Pricing</span>
                <h2>Our Pricing Plans</h2>
                <p>
                  Here are three packages of services that you could offer as part of your comprehensive suite of productivity tools and SaaS applications.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-0 align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="ud-single-pricing first-item wow fadeInUp" data-wow-delay=".15s">
                <div className="ud-pricing-header">
                  <h3>Starter Package</h3>
                  <h4>$ 19.99/mo</h4>
                </div>
                <div className="ud-pricing-body">
                  <ul>
                    <li className="product-title">ClickHR:</li>
                    <ul>
                      <li>Employee Database Management</li>
                      <li>Leave Management</li>
                      <li>Employee Self-Service Portal</li>
                    </ul>
                    <li className="product-title">VerdeBooks:</li>
                    <ul>
                      <li>Pay Stub Generation</li>
                      <li>Tax Calculations</li>
                      <li>Basic Reporting</li>
                    </ul>
                    <li className="product-title">SSTrack:</li>
                    <ul>
                      <li>Activity Tracking</li>
                      <li>Screenshots Every 10 Minutes</li>
                      <li>Basic Productivity Analytics</li>
                    </ul>
                    <li className="product-title">CAIIF:</li>
                    <ul>
                      <li>Full Access</li>
                    </ul>
                  </ul>
                </div>
                <div className="ud-pricing-footer">
                  <a href="javascript:void(0)" id="purchaseButton1" className="ud-main-btn ud-border-btn purchase-now">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="ud-single-pricing active wow fadeInUp" data-wow-delay=".1s">
                <span className="ud-popular-tag">POPULAR</span>
                <div className="ud-pricing-header">
                  <h3>Business Package</h3>
                  <h4>$ 30.99/mo</h4>
                </div>
                <div className="ud-pricing-body">
                  <ul>
                    <li className="product-title">ClickHR:</li>
                    <ul>
                      <li>Advanced HR Features (Onboarding, Performance Management)</li>
                      <li>Time Tracking</li>
                      <li>Customizable Reports</li>
                    </ul>
                    <li className="product-title">VerdeBooks:</li>
                    <ul>
                      <li>Advanced Payroll Services (Automatic Calculations, Direct Deposit)</li>
                      <li>Tax Filings</li>
                      <li>Compliance Assistance</li>
                    </ul>
                    <li className="product-title">SSTrack:</li>
                    <ul>
                      <li>Screenshots Every 2 Minutes</li>
                      <li>Customizable Alerts</li>
                      <li>Integration with Project Management Tools</li>
                    </ul>
                    <li className="product-title">CAIIF:</li>
                    <ul>
                      <li>Full Access</li>
                    </ul>
                  </ul>
                </div>
                <div className="ud-pricing-footer">
                  <a href="javascript:void(0)" id="purchaseButton2" className="ud-main-btn ud-white-btn purchase-now">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="ud-single-pricing last-item wow fadeInUp" data-wow-delay=".15s">
                <div className="ud-pricing-header">
                  <h3>Enterprise Package</h3>
                  <h4>$ 70.99/mo</h4>
                </div>
                <div className="ud-pricing-body">
                  <ul>
                    <li className="product-title">ClickHR:</li>
                    <ul>
                      <li>Custom Workflows and Approvals</li>
                      <li>Employee Performance Reviews</li>
                      <li>Integration with HRIS and ERP Systems</li>
                    </ul>
                    <li className="product-title">VerdeBooks:</li>
                    <ul>
                      <li>Dedicated Account Manager</li>
                      <li>Customized Payroll Services</li>
                      <li>Multi-country Payroll Support</li>
                    </ul>
                    <li className="product-title">SSTrack:</li>
                    <ul>
                      <li>Screenshots Every Customizable Time and Advanced Security Features (Data Encryption, Access Controls)</li>
                      <li>Compliance Monitoring (GDPR, HIPAA)</li>
                      <li>API Access for Custom Integrations</li>
                    </ul>
                    <li className="product-title">CAIIF:</li>
                    <ul>
                      <li>Full Access</li>
                    </ul>
                  </ul>
                </div>
                <div className="ud-pricing-footer">
                  <a href="javascript:void(0)" id="purchaseButton3" className="ud-main-btn ud-border-btn purchase-now">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="ud-faq">
        <div className="shape">
          <img src={faqImg} alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-section-title text-center mx-auto">
                <span>FAQ</span>
                <h2>Any Questions? Answered</h2>
                <p>
                  Below are common questions and answers about the Infiniti Suite.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
                <div className="accordion">
                  <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>What is Infiniti Suite?</span>
                  </button>
                  <div id="collapseOne" className="accordion-collapse collapse">
                    <div className="ud-faq-body">
                      Infiniti Suite is an online applications to grow sales, market your business, do your accounting,
                      communicate with teammates and customers, and much more. This plan includes web, mobile, and installed
                      versions of our applications, as well as browser extensions and other useful extras.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
                <div className="accordion">
                  <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>Do you have plans to expand the suite?</span>
                  </button>
                  <div id="collapseTwo" className="accordion-collapse collapse">
                    <div className="ud-faq-body">
                      Yes. We plan to add more applications to the Infiniti suite. Our goal is to provide every application
                      a business needs to grow and thrive.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
                <div className="accordion">
                  <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>What is the Infiniti Suite and how can it benefit my business?</span>
                  </button>
                  <div id="collapseThree" className="accordion-collapse collapse">
                    <div className="ud-faq-body">
                      The Infiniti Suite is a comprehensive software solution designed to make sales success inevitable for your business. It helps solve business problems, anticipate needs, and discover opportunities for growth. With years of expertise and a dedication to delivering exceptional products, our suite ensures that you have the tools necessary to optimize your sales processes and drive revenue.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
                <div className="accordion">
                  <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>Do you have plans to expand the suite?</span>
                  </button>
                  <div id="collapseFour" className="accordion-collapse collapse">
                    <div className="ud-faq-body">
                      Yes. We plan to add more applications to the Infiniti suite. Our goal is to provide every application a business needs to grow and thrive.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
                <div className="accordion">
                  <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>What kind of support can I expect after purchasing the Infiniti Suite?</span>
                  </button>
                  <div id="collapseFive" className="accordion-collapse collapse">
                    <div className="ud-faq-body">
                      After purchasing the Infiniti Suite, you can expect comprehensive support from our dedicated team. We provide ongoing assistance to ensure that you can fully leverage the capabilities of our software. Our support includes technical help, user training, and continuous updates to keep your software running smoothly and efficiently.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
                <div className="accordion">
                  <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                    <span className="icon flex-shrink-0">
                      <i className="lni lni-chevron-down"></i>
                    </span>
                    <span>How can I be sure that the Infiniti Suite will address my specific business needs?</span>
                  </button>
                  <div id="collapseSix" className="accordion-collapse collapse">
                    <div className="ud-faq-body">
                      The Infiniti Suite is designed with flexibility and customization in mind. Our team works closely with you to understand your unique business challenges and objectives. We tailor our solutions to fit your specific needs, ensuring that you get the maximum benefit from our software. Additionally, our proactive approach helps anticipate future needs and opportunities, keeping your business ahead of the curve.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="ud-testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-section-title mx-auto text-center">
                <span>Testimonials</span>
                <h2>What our Customers Say</h2>
                <p>
                  Infiniti Suite transformed our sales process, solving problems and driving growth with exceptional, customized solutions
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="ud-single-testimonial wow fadeInUp" data-wow-delay=".1s">
                <div className="ud-testimonial-ratings">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="ud-testimonial-content">
                  <p>
                    Infinti Suite allows us to look over completed work by remote staff, shows when my staff is working and keeps a backup of work produced. Highly recommend!
                  </p>
                </div>
                <div className="ud-testimonial-info">
                  <div className="ud-testimonial-meta">
                    <h4>Sabo Masties</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ud-single-testimonial wow fadeInUp" data-wow-delay=".15s">
                <div className="ud-testimonial-ratings">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="ud-testimonial-content">
                  <p>
                    Infiniti Suite makes it easy for us to manage the staff at different branch offices of Visas Avenue. The different locations of work is not a hurdle anymore.
                  </p>
                </div>
                <div className="ud-testimonial-info">
                  <div className="ud-testimonial-meta">
                    <h4>Margin Gesmu</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ud-single-testimonial wow fadeInUp" data-wow-delay=".2s">
                <div className="ud-testimonial-ratings">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="ud-testimonial-content">
                  <p>
                    The best way to follow your team overseas is to actually see what they're doing...
                  </p>
                </div>
                <div className="ud-testimonial-info">
                  <div className="ud-testimonial-meta">
                    <h4>William Smith</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" class="ud-contact">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-8 col-lg-7">
              <div class="ud-contact-content-wrapper">
                <div class="ud-contact-title">
                  <span>CONTACT US</span>
                  <h2>
                    Let’s talk about <br />
                    Love to hear from you!
                  </h2>
                </div>
                <div class="ud-contact-info-wrapper">
                  <div class="ud-single-info">
                    <div class="ud-info-icon">
                      <i class="lni lni-map-marker"></i>
                    </div>
                    <div class="ud-info-meta">
                      <h5>Our Location</h5>
                      <p>4370 Steeles Ave W, Unit 204 Woodbrige, ON
                      </p>
                    </div>
                  </div>
                  <div class="ud-single-info">
                    <div class="ud-info-icon">
                      <i class="lni lni-envelope"></i>
                    </div>
                    <div class="ud-info-meta">
                      <h5>How Can We Help?</h5>
                      <p>info@infinitisuite.com</p>
                      <p>contact@infintisuite.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="ud-contact-form-wrapper wow fadeInUp" data-wow-delay=".2s">
                <h3 class="ud-contact-form-title">Send us a Message</h3>
                <form class="ud-contact-form">
                  <div class="ud-form-group">
                    <label for="fullName">Full Name*</label>
                    <input type="text" name="fullName" placeholder="Your Name" />
                  </div>
                  <div class="ud-form-group">
                    <label for="email">Email*</label>
                    <input type="email" name="email" placeholder="Your Email" />
                  </div>
                  <div class="ud-form-group">
                    <label for="phone">Phone*</label>
                    <input type="text" name="phone" placeholder="Phone Number" />
                  </div>
                  <div class="ud-form-group">
                    <label for="message">Message*</label>
                    <textarea name="message" rows="1" placeholder="type your message here"></textarea>
                  </div>
                  <div class="ud-form-group mb-0">
                    <button type="submit" class="ud-main-btn">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <a href="index.html" className="ud-footer-logo">
                    <h4 style={{ color: 'aliceblue' }}>
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
                      <a href="https://caiif.ca/" rel="nofollow noopener" target="_blank">CAIIF</a>
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
                    <li>
                      <a href="https://caiif.ca" rel="nofollow noopener" target="_blank">
                        <img style={{ width: '40px' }} src={caiif} alt="lineicons" />
                      </a>
                    </li>
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

      <div className="back-to-top-container">
        {isVisible &&
          <a href="javascript:void(0)" className="back-to-top-btn" onClick={scrollToTop}>
            <i className="lni lni-chevron-up"></i>
          </a>
        }
      </div>
    </>
  );
};

export default Header;
