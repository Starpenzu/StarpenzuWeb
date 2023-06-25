import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import SignInButton from './SignInbutton';
import './SignUp.css';
import '../OutlinedInput/inputstyle.css';


 function CreatePassword (){

    const[uppercase, setUpperCase]= useState(true);
    const[character, setCharacter]= useState(true);
    const[pwmatch, setPwMatch]= useState(true);
    const[number, setNumber]= useState(true);
    const[specialchar, setSpecialchar]= useState(true);
    const[lowerchar, setLowerchar]= useState(true);
    const[password, setPassword]= useState('');
    const[confirmPassword, setConfirmpassword]= useState('');
    const[visible, setVisible] = useState(false);
    // const [formData, setFormData] = useState(()=> JSON.parse(localStorage.getItem("createPassword"))
    //     ||
    //     {
    //         password: "",
    //         confirmPassword: "",
    //     }
    // );

    const inputRefs = useRef({
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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        passwordValidation();
    };

    function handleVisibility(){
        if(!visible){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }




    return(
        <>
            <NavBar/>
            <div className="signup">
                <div className="signupHeader">
                    <Link to="/">
                        <div className="backarrow">
                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684452441/starpenzu/back_qpybto.svg" alt="" />
                        </div>
                    </Link>
                    <div className="testing">
                        <div className="signupTitle" >Create New Password</div>
                    </div>

                </div>


                <form onSubmit={handleSubmit} className="register">



                    {/* Password */}
                    <div className={`outlined-input-container ${password ? 'focused' : ''}`}>
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
                        <label className={`outlined-label ${password ? 'active' : ''}`}>Password</label>
                    </div>
                    {/* Confirm Password */}
                    <div className={`outlined-input-container ${confirmPassword ? 'focused' : ''}`}>
                        <input
                            required
                            type={visible? "text":"password"}
                            className="outlined-input"
                            name="confirmPassword"
                            // value={formData.confirmPassword}
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
                        {pwmatch && (<div className="valid">Password Match</div>)}
                        {number && (<div className="valid">At least 1 number</div>)}
                        {specialchar && (<div className="valid">1 special Character</div>)}
                        {lowerchar && (<div className="valid">At least 1 lowercase</div>)}
                    </div>

                    <SignInButton
                        className='registerBtn loginbtn'
                        buttonName='Create'
                    />
                    {/*<div className="already">Just joining us? <Link className='link-d' to='/signup'><span className="loginn">Sign Up</span></Link></div>*/}


                </form>
            </div>

            <Footer/>
        </>
    )
}

export default CreatePassword;