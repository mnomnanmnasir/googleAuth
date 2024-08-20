import React, { useState, useEffect } from 'react';
import Header from './Header';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TimezoneSelect from 'react-timezone-select';


const countries = [
    { name: 'Afghanistan', code: 'AF', phone: 93 },
    { name: 'Aland Islands', code: 'AX', phone: 358 },
    { name: 'Albania', code: 'AL', phone: 355 },
    { name: 'Algeria', code: 'DZ', phone: 213 },
    { name: 'American Samoa', code: 'AS', phone: 1684 },
    // ...add all countries
];

const SignUpForm = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const optionsList = countries.map((country) => (
            <li key={country.code} className="option">
                <div>
                    <span className="iconify" data-icon={`flag:${country.code.toLowerCase()}-4x3`} />
                    <span className="country-name">{country.name}</span>
                </div>
                <strong>+{country.phone}</strong>
            </li>
        ));
        setOptions(optionsList);
    }, []);

    const handleSelectOption = (option) => {
        setSelectedCountry(option);
        setSearchQuery('');
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        const filteredOptions = options.filter((option) => {
            const countryName = option.querySelector('.country-name').innerText.toLowerCase();
            return countryName.includes(e.target.value.toLowerCase());
        });
        setOptions(filteredOptions);
    };
    const [currentStep, setCurrentStep] = useState(1);
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     phoneNumber: '',
    //     yourPosition: '',
    //     saleBefore: '',
    //     wantFirst: '',
    //     companyName: '',
    //     noOfEmployess: '',
    //     selectCompanyType: '',
    //     employeeWillUse: '',
    //     address: '',
    //     postalCode: '',
    //     country: '',
    // });

    let token = localStorage.getItem('token');
    const [model, setModel] = useState({});
    const [step, setStep] = useState(1);
    const navigate = useNavigate()
    const [fullName, setFullName] = useState('');
    const [emailAdress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [selectCompanyType, setSelectCompanyType] = useState('');
    const [yourPosition, setYourPosition] = useState('');
    const [noOfEmployees, setNoOfEmployees] = useState('');
    const [streetAdress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    // const [timeeZone, settimeZone] = useState('');
    const [address, setFullAddress] = useState('');
    const [timeeZone, settimeZone] = useState(
        Intl.DateTimeFormat().resolvedOptions().timeeZone
    )
    const items = JSON.parse(localStorage.getItem('items'));

    let headers = {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
    }

    const handleStartDateChange = (timeeZone) => {
        console.log(timeeZone);
        settimeZone(timeeZone);
        const newtime = timeeZone?.value;
        setModel({ "timezoneOffset": timeeZone?.offset })
        setModel((prevUserInfo) => ({
            ...prevUserInfo,
            timeeZone: newtime,
        }));
    };


    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    const validateStep = (step) => {
        let isValid = true;
        const requiredFields = document.querySelectorAll(`#step-${step} input[required], #step-${step} select[required]`);
        requiredFields.forEach((field) => {
            if (!field.value) {
                isValid = false;
                field.classList.add('invalid');
            } else {
                field.classList.remove('invalid');
            }
        });
        return isValid;
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            if (currentStep < 3) {
                setCurrentStep(currentStep + 1);
            }
        } else {
            toast.warning('Please fill in all required fields.');
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };


    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const registerData = {
    //         name,
    //         email,
    //         password,
    //         phoneNumber,
    //         yourPosition,
    //         saleBefore,
    //         wantFirst,
    //         companyName,
    //         noOfEmployees,
    //         selectCompanyType,
    //         employeeWillUse,
    //         address,
    //         postalCode,
    //         country,
    //     };

    //     try {
    //         const response = await axios.post('https://infinitisuiteapi.vercel.app/api/v1/signup', registerData);
    //         console.log('Registration successful!');
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error('Error registering:', error);
    //     }
    // };

    useEffect(() => {
        const concatenatedAddress = `${streetAdress}, ${city}, ${postalCode}, ${country}`;
        setFullAddress(concatenatedAddress);
    }, [streetAdress, city, postalCode, country]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const registerData = {
            fullName,
            emailAdress,
            password,
            phoneNumber,
            companyName,
            selectCompanyType,
            yourPosition,
            noOfEmployees,
            address,
            timeeZone,
        };
        console.log('Register Data:', registerData);

        try {

            const response = await axios.post('https://infinitisuiteapi.vercel.app/api/v1/signup', registerData);
            console.log('Registration successful!');
            console.log(response.data);

            // Show success toast
            toast.success('Registration successful!');

            // Navigate to login page
            navigate('/login');
        } catch (error) {
            console.error('Error registering:', error);
            // Show error toast
            toast.error('Error registering!');
        }
    };
    // console.log('Handle Submit ....', handleSubmit())no

    return (
        <>
            <Header />
            <ToastContainer /> {/* Add this line to display toasts */}
            <section className="ud-page-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ud-banner-content">
                                <span style={{ color: '#ddd' }}>Infiniti Suite</span>
                                <h1>Create Account</h1>
                                <p style={{ color: '#ddd' }}>
                                    Fill in the details below to create an account.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="ud-contact">
                <div className="container">
                    <div className="signpwrapper" style={{ width: '40%', display: 'block', margin: '0 auto' }}>
                        <div className="ud-contact-content-wrapper">
                            <div className="step-indicator">
                                <div className={`step ${currentStep >= 1 ? 'active' : ''}`}></div>
                                <div className={`step ${currentStep >= 2 ? 'active' : ''}`}></div>
                                <div className={`step ${currentStep >= 3 ? 'active' : ''}`}></div>
                            </div>
                            <ul id="progressbarahad" className="progressbarahad">
                                <li className={currentStep >= 1 ? 'active' : ''} id="account"><strong>Account</strong></li>
                                <li className={currentStep >= 2 ? 'active' : ''} id="personal"><strong>About You</strong></li>
                                <li className={currentStep >= 3 ? 'active' : ''} id="payment"><strong>Company</strong></li>
                                <li id="confirm"><strong>Finish</strong></li>
                            </ul>
                            <br /><br /><br />
                            <div className="ud-banner-content">
                                <h1 style={{ color: "#3056d3" }}>Let's Get Started</h1>
                                <p style={{ color: "#050505" }}>First You'll need to create the Account.</p>
                            </div>
                            <form onSubmit={handleSubmit} >
                                {currentStep === 1 && (
                                    <div>
                                        <div className="form-group">
                                            <label>Full Name:</label>
                                            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                        </div>

                                        <div className="form-group">
                                            <label>Email Address:</label>
                                            <input type="email" value={emailAdress} onChange={(e) => setEmailAdress(e.target.value)} />
                                        </div>

                                        <div className="form-group">
                                            <label>Password:</label>
                                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        {/* <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /> */}

                                        <div className="form-group">
                                            <label>Phone Number:</label>
                                            <div className="selected-option">
                                                <div className="ahad-custom-mobile">
                                                    <strong>+44</strong>
                                                </div>
                                                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="nav-buttons">
                                            <button type="button" className="next-btn" onClick={nextStep}>Next</button>
                                        </div>
                                    </div>
                                )}
                                {currentStep === 2 && (
                                    <div>
                                        {/* <div className="form-group">
                                                                            <label>Number of Employees:</label>
                                                                            <select value={noOfEmployees} onChange={(e) => setNoOfEmployees(e.target.value)}>
                                                                                <option value="10-50">10-50</option>
                                                                                <option value="50-100">50-100</option>
                                                                                <option value="100-200">100-200</option>
                                                                            </select>
                                                                        </div> */}

                                        {/* <div className="form-group">
                                                                            <label>Select Company Type:</label>
                                                                            <select value={selectCompanyType} onChange={(e) => setSelectCompanyType(e.target.value)}>
                                                                                <option value="technology-startup">Technology Startup</option>
                                                                                <option value="ecommerce-business">E-commerce Business</option>
                                                                                <option value="manufacturing-company">Manufacturing Company</option>
                                                                                <option value="consulting-firm">Consulting Firm</option>
                                                                                <option value="healthcare-services">Healthcare Services</option>
                                                                                <option value="financial-services">Financial Services</option>
                                                                            </select>
                                                                        </div>
                                
                                                                        <div className="form-group">
                                                                            <label>Number of Employees who will use Infiniti Suite:</label>
                                                                            <select value={employeeWillUse} onChange={(e) => setEmployeeWillUse(e.target.value)}>
                                                                                <option value="1-5">1-5</option>
                                                                                <option value="6-10">6-10</option>
                                                                                <option value="11-20">11-20</option>
                                                                                <option value="21-50">21-50</option>
                                                                                <option value="51-100">51-100</option>
                                                                                <option value="100+">100+</option>
                                                                            </select>
                                                                        </div> */}

                                        <div className="form-group">
                                            <label>Street Address:</label>
                                            <input type="text" value={streetAdress} onChange={(e) => setStreetAddress(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label>City:</label>
                                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Postal Code:</label>
                                            <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                                        </div>

                                        <div className="form-group">
                                            <label>Country:</label>
                                            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                                        </div>

                                        <div className="form-group">
                                            <label>Timezone:</label>
                                            {/* <input type="text" value={timeeZone} onChange={(e) => settimeZone(e.target.value)} /> */}
                                            <div className="dropdown" style={{ zIndex: '3' }}>
                                                <div>
                                                    <TimezoneSelect value={items ? items.timeeZone : timeeZone}
                                                        onChange={handleStartDateChange} />
                                                </div>
                                                {/* <Timezone /> */}
                                            </div>
                                        </div>
                                        {/* </div>
                                                                        {/* <button type="button" onClick={handlePrevious}>
                                                                            Previous
                                                                        </button> */}
                                        <div className="nav-buttons">
                                            <button type="button" onClick={prevStep}>
                                                Previous
                                            </button>
                                            <button type="button" className="next-btn" onClick={nextStep}>Next</button>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 3 && (
                                    <div>
                                        <div className="form-group">
                                            <label>Company Name:</label>
                                            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                                        </div>
                                        {/* <button type="button" onClick={handleNext}>
                                        Next
                                    </button> */}


                                        <div className="form-group">
                                            <label>Select Company Type:</label>
                                            <select value={selectCompanyType} onChange={(e) => setSelectCompanyType(e.target.value)}>
                                                <option value="technology-startup">Technology Startup</option>
                                                <option value="ecommerce-business">E-commerce Business</option>
                                                <option value="manufacturing-company">Manufacturing Company</option>
                                                <option value="consulting-firm">Consulting Firm</option>
                                                <option value="healthcare-services">Healthcare Services</option>
                                                <option value="financial-services">Financial Services</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Position (optional):</label>
                                            <input type="text" value={yourPosition} onChange={(e) => setYourPosition(e.target.value)} />
                                        </div>
                                        {/* <div className="form-group">
                                        <label>Position (optional):</label>
                                        <select value={wantFirst} onChange={(e) => setWantFirst(e.target.value)}>
                                            <option value="Close deals faster">Close deals faster</option>
                                            <option value="Find new leads">Find new leads</option>
                                            <option value="Manage relationships better">Manage relationships better</option>
                                            <option value="Set goals and track progress">Set goals and track progress</option>
                                            <option value="Set up a team and permissions">Set up a team and permissions</option>
                                        </select>
                                    </div> */}
                                        <div className="form-group">
                                            <label>Number of Employees (optional):</label>
                                            <select value={noOfEmployees} onChange={(e) => setNoOfEmployees(e.target.value)}>
                                                <option value="10-50">10-50</option>
                                                <option value="50-100">50-100</option>
                                                <option value="100-200">100-200</option>
                                            </select>
                                        </div>
                                        {/* <div className="form-group">
                                        <label>Company Name:</label>
                                        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                                    </div> */}
                                        <div className="nav-buttons">
                                            <button type="button" onClick={prevStep}>
                                                Previous
                                            </button>
                                            <button type="submit" className="next-btn">Submit</button>
                                        </div>
                                        {/* <button type="button" onClick={handleNext}>
                                        Next
                                    </button> */}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div >
            </section >
            // <Footer />
        </>
    );
};

export default SignUpForm;
