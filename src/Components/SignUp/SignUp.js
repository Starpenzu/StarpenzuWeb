import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import SignInButton from './SignInbutton';
import './SignUp.css';
let formData = new FormData();

export default function SignUp() {
    const[visible, setVisible] = useState(false)
    const[uppercase, setUpperCase]= useState(true)
    const[character, setCharacter]= useState(true)
    const[pwmatch, setPwMatch]= useState(true)
    const[number, setNumber]= useState(true)
    const[specialchar, setSpecialchar]= useState(true)
    const[lowerchar, setLowerchar]= useState(true)
    
    const [fullname, setFullname] = useState(() => localStorage.getItem("fullname") || '')
    const [firstname, setFirstname] = useState(() => localStorage.getItem("firstname") || '')
    const [surname, setSurname] = useState(() => localStorage.getItem("surname") || '')
    const [dob, setDob] = useState(() => localStorage.getItem("DOB") || '')
    const [gender, setGender] = useState(() => localStorage.getItem("gender") || '')
    const [whatsappNum, setWhatsappNum] = useState(() => localStorage.getItem("whatsappNum") || '')
    const [email, setEmail] = useState(() => localStorage.getItem("email") || '')
    const[password, setPassword]= useState('');
    const[confirmPassword, setConfirmpassword]= useState('')
    // const [formData, setFormData] = useState();

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




    const handleInputFocus = (name) => {
        inputRefs.current[name].current.classList.add('focused');
    };

    const handleInputBlur = (name) => {
        const inputValue = inputRefs.current[name].current.value;
        if (!inputValue) {
            inputRefs.current[name].current.parentNode.classList.remove('focused');
        }
    };



    function handleVisibility(){
        if(!visible){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }

   function handleFirstNameChange (event){
        setFirstname(event.target.value);

   }

    function handleSurNameChange (event){
        setSurname(event.target.value);

    }

    function handleDOBChange (event){
        setDob(event.target.value);

        console.log(dob)
    }

    function handleGenderChange (event){
        setGender(event.target.value);

    }

    function handleWhatsappNoChange (event){
        setWhatsappNum(event.target.value);
    }

    function handleEmailChange (event){
        setEmail(event.target.value);
    }

    // function uploadData (){
    //     localStorage.setItem('firstname', firstname)
    //     localStorage.setItem('surname', surname)
    //     localStorage.setItem('DOB', dob)
    //     localStorage.setItem('gender', gender)
    //     localStorage.setItem('whatsappNum', whatsappNum)
    //     localStorage.setItem('email', email)
    //
    //
    // }

    useEffect(() => {
        function uploadToLocal() {
            localStorage.setItem('fullname', fullname);
            localStorage.setItem('surname', surname);
            localStorage.setItem('firstname', firstname);
            localStorage.setItem('DOB', dob);
            localStorage.setItem('gender', gender);
            localStorage.setItem('whatsappNum', whatsappNum);
            localStorage.setItem('email', email);
        }

        uploadToLocal();

        // Clean-up function
        return () => {
            localStorage.removeItem('fullname');
            localStorage.removeItem('surname');
            localStorage.removeItem('firstname');
            localStorage.removeItem('DOB');
            localStorage.removeItem('gender');
            localStorage.removeItem('whatsappNum');
            localStorage.removeItem('email');
        };
    }, [firstname, surname, dob, gender, whatsappNum, email]);

    useEffect( () => {
        function makeFullname() {
            const firstname = localStorage.getItem('firstname')
            const surname = localStorage.getItem('surname')
            const fullName = surname + " " + firstname;
            setFullname(fullName);
        }

        makeFullname();
    }, [firstname,surname])

    function passwordValidation (){
        // if (password.length < 8) {
        //     setCharacter(true);
        //     console.log('8 char');
        // } else {
        //     setCharacter(false);
        //     //console.log('okay')
        // }
        //
        // if (!password.match(/[a-z]/)) {
        //     setLowerchar(true);
        //     console.log('lower char');
        // } else {
        //     setLowerchar(false);
        //     //console.log('okay')
        // }
        //
        // if (!password.match(/[A-Z]/)) {
        //     setUpperCase(true);
        //     console.log('upper char');
        // } else {
        //     setUpperCase(false);
        //     //console.log('okay')
        // }
        //
        // if (!password.match(/\d/)) {
        //     setNumber(true);
        //     console.log('1 num');
        // } else {
        //     setNumber(false);
        //    // console.log('okay')
        // }
        //
        // if (!password.match(/[@$!%*.?&]/)) {
        //     setSpecialchar(true);
        //     console.log('special char');
        // } else {
        //     setSpecialchar(false);
        //     //console.log('okay')
        // }
        //
        // if (password !== confirmPassword) {
        //     setPwMatch(true);
        //     console.log('must match');
        // } else {
        //     setPwMatch(false);
        //     //console.log('okay')
        // }
        //
        // if (!character && !lowerchar && !uppercase && !number && !specialchar && !pwmatch) {
        //     console.log('Password meets all requirements!');
        // }

        let isCharacterValid = password.length >= 8;
        let isLowerCharValid = password.match(/[a-z]/);
        let isUpperCharValid = password.match(/[A-Z]/);
        let isNumberValid = password.match(/\d/);
        let isSpecialCharValid = password.match(/[@$!%*.?&]/);
        let isPasswordMatchValid = password === confirmPassword;

        let isPasswordValid = isCharacterValid && isLowerCharValid && isUpperCharValid && isNumberValid && isSpecialCharValid && isPasswordMatchValid;

        setCharacter(!isCharacterValid);
        setLowerchar(!isLowerCharValid);
        setUpperCase(!isUpperCharValid);
        setNumber(!isNumberValid);
        setSpecialchar(!isSpecialCharValid);
        setPwMatch(!isPasswordMatchValid);

        if (isPasswordValid) {
            console.log('Password meets all requirements!');
            alert('Password meets all requirements!');
            // ... additional code or actions for a successful password
        }

    }


    function uploadData (){
        passwordValidation();
        formData.append("name", fullname);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("DOB", dob);
        formData.append("gender", gender);
        formData.append("whatsappNum", whatsappNum);
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        passwordValidation()
        uploadData();
    };


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
                    <div className={`outlined-input-container ${firstname ? 'focused' : ''}`}>
                        <input
                            type="text"
                            id="firstName"
                            ref={inputRefs.current.firstName}
                            className="outlined-input"
                            required
                            value={firstname}
                            onFocus={() => handleInputFocus('firstName')}
                            onBlur={() => handleInputBlur('firstName')}
                            onChange={handleFirstNameChange}
                        />
                        <label className={`outlined-label ${firstname ? 'active' : ''}`}>Firstname</label>
                    </div>

                    <div className={`outlined-input-container ${surname ? 'focused' : ''}`}>
                        <input
                            type="text"
                            id="surname"
                            ref={inputRefs.current.surname}
                            className="outlined-input"
                            required
                            value={surname}
                            onFocus={() => handleInputFocus('surname')}
                            onBlur={() => handleInputBlur('surname')}
                            onChange={handleSurNameChange}
                        />
                        <label className={`outlined-label ${surname ? 'active' : ''}`}>Surname</label>
                    </div>
                    {/* Date of Birth */}
                    <div className={`outlined-input-container ${dob ? 'focused' : ''}`}>
                        <input
                            required
                            type="date"
                            className="outlined-input"
                            name="DOB"
                            value={dob}
                            ref={inputRefs.current.DOB}
                            onChange={handleDOBChange}
                            onFocus={() => handleInputFocus('DOB')}
                            onBlur={() => handleInputBlur('DOB')}
                        />
                        <label className={`outlined-label ${dob ? 'active' : ''}`}>Date of Birth</label>
                    </div>
                    {/* Gender */}
                    <div className={`outlined-input-container ${gender ? 'focused' : ''}`}>
                        <input
                            required
                            type="text"
                            className="outlined-input"
                            name="gender"
                           value={gender}
                            ref={inputRefs.current.gender}
                            onChange={handleGenderChange}
                            onFocus={() => handleInputFocus('gender')}
                            onBlur={() => handleInputBlur('gender')}
                        />
                        <div className="selectgend">
                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1686994453/Group_73_s3ap0w.svg" alt=""/>
                        </div>
                        <label className={`outlined-label ${gender ? 'active' : ''}`}>Gender</label>
                    </div>
                    {/* WhatsApp Number */}
                    <div className={`outlined-input-container ${whatsappNum ? 'focused' : ''}`}>
                        <input
                            required
                            type="text"
                            className="outlined-input"
                            name="whatsappNum"
                           value={whatsappNum}
                            ref={inputRefs.current.whatsappNum}
                            onChange={handleWhatsappNoChange}
                            onFocus={() => handleInputFocus('whatsappNum')}
                            onBlur={() => handleInputBlur('whatsappNum')}
                        />
                        <label className={`outlined-label ${whatsappNum ? 'active' : ''}`}>WhatsApp Number</label>
                    </div>
                    {/* Email */}
                    <div className={`outlined-input-container ${email ? 'focused' : ''}`}>
                        <input
                            required
                            type="email"
                            className="outlined-input"
                            name="email"
                           value={email}
                            ref={inputRefs.current.email}
                            onChange={handleEmailChange}
                            onFocus={() => handleInputFocus('email')}
                            onBlur={() => handleInputBlur('email')}
                        />
                        <label className={`outlined-label ${email ? 'active' : ''}`}>Email</label>
                    </div>
                    {/* Password */}
                    <div className={`outlined-input-container ${password ? 'focused' : ''}`}>
                        <input
                            required
                            type={visible? "text":"password"}
                            className="outlined-input"
                            name="password"
                            value={password}
                            ref={inputRefs.current.password}
                            onChange={(event) => setPassword(event.target.value)}
                            onFocus={() => handleInputFocus('password')}
                            onBlur={() => handleInputBlur('password')}
                        />
                        <div className="selectvisible" onClick={handleVisibility}>
                            <img src={visible ? 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1686996024/View_sf9mqu.svg' : "https://res.cloudinary.com/do5wu6ikf/image/upload/v1686995027/Vector_2_zqswsd.svg"} alt=""/>
                        </div>
                        <label className={`outlined-label ${password ? 'active' : ''}`}>Password</label>
                    </div>
                    {/* Confirm Password */}
                    <div className={`outlined-input-container ${confirmPassword ? 'focused' : ''}`}>
                        <input
                            required
                            type={visible? "text":"password"}
                            className="outlined-input"
                            name="confirmPassword"
                            value={confirmPassword}
                            ref={inputRefs.current.confirmPassword}
                            onChange={(e)=>setConfirmpassword(e.target.value)}
                            onFocus={() => handleInputFocus('confirmPassword')}
                            onBlur={() => handleInputBlur('confirmPassword')}
                        />

                        <div className="selectvisible" onClick={handleVisibility}>
                            <img src={visible ? 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1686996024/View_sf9mqu.svg' : "https://res.cloudinary.com/do5wu6ikf/image/upload/v1686995027/Vector_2_zqswsd.svg"} alt=""/>
                        </div>
                        <label className={`outlined-label ${confirmPassword ? 'active' : ''}`}>Confirm Password</label>
                    </div>

                    <div className="validationsec">
                        {uppercase && (<div className="valid">At least 1 uppercase</div>)}
                        {character && (<div className="valid">Minimum of 8 Characters</div>)}
                        {pwmatch && (<div className="valid">Password must Match</div>)}
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
