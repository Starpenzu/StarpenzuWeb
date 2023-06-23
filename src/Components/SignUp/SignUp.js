import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import SignInButton from './SignInbutton';
import './SignUp.css';

export default function SignUp() {
    const[visible, setVisible] = useState(false)
    const[uppercase, setUpperCase]= useState(true)
    const[character, setCharacter]= useState(true)
    const[pwmatch, setPwMatch]= useState(true)
    const[number, setNumber]= useState(true)
    const[specialchar, setSpecialchar]= useState(true)

    const[lowerchar, setLowerchar]= useState(true)
    const[password, setPassword]= useState('');
    const[confirmPassword, setConfirmpassword]= useState('')
    const [formData, setFormData] = useState(() => {
        const storedData = localStorage.getItem('RegisterUser');
        return storedData
            ? JSON.parse(storedData)
            : {
                firstName: '',
                surname: '',
                DOB: '',
                gender: '',
                whatsappNum: '',
                email: '',
                // password: '',
                // confirmPassword: '',
            };
    });

    const inputRefs = useRef({
        firstName: useRef(null),
        surname: useRef(null),
        DOB: useRef(null),
        gender: useRef(null),
        whatsappNum: useRef(null),
        email: useRef(null),
        password: useRef(null),
        confirmPassword: useRef(null),
    });

    useEffect(() => {
        localStorage.setItem('RegisterUser', JSON.stringify(formData));
    }, [formData]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleInputFocus = (name) => {
        inputRefs.current[name].current.classList.add('focused');
    };

    const handleInputBlur = (name) => {
        if (!formData[name]) {
            inputRefs.current[name].current.classList.remove('focused');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        pwordValidation();
        alert('okay')
    };

    function handleVisibility(){
        if(!visible){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }

    function pwordValidation (){
        if (!password.length < 8) {
            //setPasswordError("Password must be at least 8 characters long.");
            setCharacter(false);
        } else if (password.match(/[a-z]/)) {
            //setPasswordError("Password must contain at least one lowercase letter.");
            setLowerchar(false);
        } else if (password.match(/[A-Z]/)) {
            //setPasswordError("Password must contain at least one uppercase letter.");
            setUpperCase(false);
        } else if (password.match(/\d/)) {
            //setPasswordError("Password must contain at least one number.");
            setNumber(false);
        } else if (password.match(/[@$!%*.?&]/)) {
          //  setPasswordError("Password must contain at least one special character.");
            setSpecialchar(false);
        } else if (password === confirmPassword) {
            //setPasswordError("Passwords do not match.");
            setPwMatch(false);
        } else {
           return true
        }
    }

    return (
        <>
            <NavBar />
            <div className="signup">
                {/*<div className="testingcent">*/}
                <div className="signupHeader">
                    <Link to="/">
                        <div className="backarrow">
                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684452441/starpenzu/back_qpybto.svg" alt="" />
                        </div>
                    </Link>
                    <div className="testing">
                        <div className="signupTitle">Register</div>
                    </div>

                </div>
                {/*</div>*/}
                <form onSubmit={handleSubmit} className="register">
                    <div className={`outlined-input-container ${formData.firstName ? 'focused' : ''}`}>
                        <input
                            required
                            type="text"
                            className="outlined-input"
                            name="firstName"
                            value={formData.firstName}
                            ref={inputRefs.current.firstName}
                            onChange={handleChange}
                            onFocus={() => handleInputFocus('firstName')}
                            onBlur={() => handleInputBlur('firstName')}
                        />
                        <label className={`outlined-label ${formData.firstName ? 'active' : ''}`}>First Name</label>
                    </div>
                    {/* Repeat the same pattern for other input fields */}
                    {/* Surname */}
                    <div className={`outlined-input-container ${formData.surname ? 'focused' : ''}`}>
                        <input
                            required
                            type="text"
                            className="outlined-input"
                            name="surname"
                            value={formData.surname}
                            ref={inputRefs.current.surname}
                            onChange={handleChange}
                            onFocus={() => handleInputFocus('surname')}
                            onBlur={() => handleInputBlur('surname')}
                        />
                        <label className={`outlined-label ${formData.surname ? 'active' : ''}`}>Surname</label>
                    </div>
                    {/* Date of Birth */}
                    <div className={`outlined-input-container ${formData.DOB ? 'focused' : ''}`}>
                        <input
                            required
                            type="date"
                            className="outlined-input"
                            name="DOB"
                            value={formData.DOB}
                            ref={inputRefs.current.DOB}
                            onChange={handleChange}
                            onFocus={() => handleInputFocus('DOB')}
                            onBlur={() => handleInputBlur('DOB')}
                        />
                        <label className={`outlined-label ${formData.DOB ? 'active' : ''}`}>Date of Birth</label>
                    </div>
                    {/* Gender */}
                    <div className={`outlined-input-container ${formData.gender ? 'focused' : ''}`}>
                        <input
                            required
                            type="text"
                            className="outlined-input"
                            name="gender"
                            value={formData.gender}
                            ref={inputRefs.current.gender}
                            onChange={handleChange}
                            onFocus={() => handleInputFocus('gender')}
                            onBlur={() => handleInputBlur('gender')}
                        />
                        <div className="selectgend">
                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1686994453/Group_73_s3ap0w.svg" alt=""/>
                        </div>
                        <label className={`outlined-label ${formData.gender ? 'active' : ''}`}>Gender</label>
                    </div>
                    {/* WhatsApp Number */}
                    <div className={`outlined-input-container ${formData.whatsappNum ? 'focused' : ''}`}>
                        <input
                            required
                            type="text"
                            className="outlined-input"
                            name="whatsappNum"
                            value={formData.whatsappNum}
                            ref={inputRefs.current.whatsappNum}
                            onChange={handleChange}
                            onFocus={() => handleInputFocus('whatsappNum')}
                            onBlur={() => handleInputBlur('whatsappNum')}
                        />
                        <label className={`outlined-label ${formData.whatsappNum ? 'active' : ''}`}>WhatsApp Number</label>
                    </div>
                    {/* Email */}
                    <div className={`outlined-input-container ${formData.email ? 'focused' : ''}`}>
                        <input
                            required
                            type="email"
                            className="outlined-input"
                            name="email"
                            value={formData.email}
                            ref={inputRefs.current.email}
                            onChange={handleChange}
                            onFocus={() => handleInputFocus('email')}
                            onBlur={() => handleInputBlur('email')}
                        />
                        <label className={`outlined-label ${formData.email ? 'active' : ''}`}>Email</label>
                    </div>
                    {/* Password */}
                    <div className={`outlined-input-container ${formData.password ? 'focused' : ''}`}>
                        <input
                            required
                            type={visible? "text":"password"}
                            className="outlined-input"
                            name="password"
                            // value={formData.password}
                            ref={inputRefs.current.password}
                            onChange={(event) => setPassword(event.target.value)}
                            onFocus={() => handleInputFocus('password')}
                            onBlur={() => handleInputBlur('password')}
                        />
                        <div className="selectvisible" onClick={handleVisibility}>
                            <img src={visible ? 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1686996024/View_sf9mqu.svg' : "https://res.cloudinary.com/do5wu6ikf/image/upload/v1686995027/Vector_2_zqswsd.svg"} alt=""/>
                        </div>
                        <label className={`outlined-label ${formData.password ? 'active' : ''}`}>Password</label>
                    </div>
                    {/* Confirm Password */}
                    <div className={`outlined-input-container ${formData.confirmPassword ? 'focused' : ''}`}>
                        <input
                            required
                            type={visible? "text":"password"}
                            className="outlined-input"
                            name="confirmPassword"
                            //value={formData.confirmPassword}
                            ref={inputRefs.current.confirmPassword}
                            onChange={(e)=>setConfirmpassword(e.target.value)}
                            onFocus={() => handleInputFocus('confirmPassword')}
                            onBlur={() => handleInputBlur('confirmPassword')}
                        />

                        <div className="selectvisible" onClick={handleVisibility}>
                            <img src={visible ? 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1686996024/View_sf9mqu.svg' : "https://res.cloudinary.com/do5wu6ikf/image/upload/v1686995027/Vector_2_zqswsd.svg"} alt=""/>
                        </div>
                        <label className={`outlined-label ${formData.confirmPassword ? 'active' : ''}`}>Confirm Password</label>
                    </div>

                    <div className="validationsec">
                        {uppercase && (<div className="valid">At least 1 uppercase</div>)}
                        {character && (<div className="valid">Minimum of 8 Characters</div>)}
                        {pwmatch && (<div className="valid">Password Match</div>)}
                        {number && (<div className="valid">At least 1 number</div>)}
                        {specialchar && (<div className="valid">1 special Character</div>)}
                        {lowerchar && (<div className="valid">At least 1 lowercase</div>)}
                    </div>

                    <SignInButton className="registerBtn" buttonName="Register" />
                    <div className="already">
                        Already have an account? <Link className="link-d" to="/Login"><span className="loginn">Sign In</span></Link>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}
