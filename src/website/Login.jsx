import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useHistory hook

    const [showPassword, setShowPassword] = useState(false); // State for password visibility



    const handleSubmit = async (event) => {
        event.preventDefault();

        const loginData = {
            email,
            password,
        };

        try {
            const response = await axios.post('https://infinitisuiteapi.vercel.app/api/v1/signin', loginData);
            console.log('Login successful!');
            console.log(response.data);

            // Show success toast
            toast.success('Login successful!');

            // Navigate to dashboard page
            navigate('/deals', { replace: true });
        } catch (error) {
            if (error.response && error.response.status === 404) {
              // Show error toast with custom message
              toast.error('User not found. Please register first.');
            } else {
              console.error('Error logging in:', error);
              // Show error toast
              toast.error('User Not Exist');
            }
          }
    };

    const togglePasswordVisibility = () => {
        // setShowPassword(!showPassword);
        setShowPassword(prevShowPassword => !prevShowPassword);

    };


    return (
        <>
            <Header />
            <ToastContainer />
            {/* Banner Section */}
            <section className="ud-page-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ud-banner-content">
                                <h1>Login Page</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Login Section */}
            <section className="ud-login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ud-login-wrapper">
                                {/* <div className="ud-login-logo">
                                    <img src="assets/images/logo/logo-2.svg" alt="logo" />
                                </div> */}
                                <form onSubmit={handleSubmit}>
                                    <div className="ud-login-form">
                                        <div className="ud-form-group">
                                            <input
                                                id="email_input"
                                                type="email"
                                                name="email"
                                                placeholder="Email/username"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        {/* <div className="ud-form-group">
                                            <input
                                                id="password_input"
                                                type="password"
                                                name="password"
                                                placeholder="*********"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div> */}
                                        <div className="ud-form-group password-container">
                                            <input
                                                id="password_input"
                                                type={showPassword ? 'text' : 'password'} // Toggle password visibility
                                                name="password"
                                                placeholder="*********"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="password-toggle"
                                                onClick={togglePasswordVisibility}
                                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                            >
                                                {showPassword ? (
                                                    <i className="fas fa-eye"></i> // Font Awesome icon for hide
                                                ) : (
                                                    <i className="fas fa-eye-slash"></i> // Font Awesome icon for show
                                                )}
                                            </button>
                                        </div>
                                        <div className="ud-form-group w-100" style={{ marginLeft: '2%' }}>
                                            <button className="ud-main-btn w-100" type="submit">
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {/* <div className="ud-socials-connect">
                                    <p>Connect With</p>
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" className="facebook">
                                                <i className="lni lni-facebook-filled"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" className="twitter">
                                                <i className="lni lni-twitter-filled"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" className="google">
                                                <i className="lni lni-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                                <p className="signup-option">

                                    Not a member yet? <a href="signup.html">
                                        <Link to='/signup'>
                                            Sign Up
                                        </Link>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Login;
