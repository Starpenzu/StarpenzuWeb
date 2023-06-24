import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import SignInButton from './SignInbutton';
import './SignUp.css';
import '../OutlinedInput/inputstyle.css';


export default function CreatePassword (){
    const[uppercase, setUpperCase]= useState(true);
    const[character, setCharacter]= useState(true);
    const[pwmatch, setPwMatch]= useState(true);
    // const[uppercase, setUpperCase]= useState(true);
    const[number, setNumber]= useState(true);
    const[specialchar, setSpecialchar]= useState(true);
    const[lowerchar, setLowerchar]= useState(true);
    const[password, setPassword]= useState('');
    const[confirmPassword, setConfirmpassword]= useState('');
    const[visible, setVisible] = useState(false);
    const [formData, setFormData] = useState(()=> JSON.parse(localStorage.getItem("createPassword"))
        ||
        {
            password: "",
            confirmPassword: "",
        }
    );

    const inputRefs = React.useRef({
        password: useRef(null),
        confirmPassword: useRef(null),
    });



    React.useEffect(
        function (){
            return(
                localStorage.setItem("createPassword", JSON.stringify(formData))
            )
        },
        [formData]
    )



    function handleChange(event) {

        const {name, value} = event.target;
        // setting your new state
        setFormData(prevState => (
            {
                ...prevState,
                [name] : value
            }
        ));

    }

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
    };

    function handleVisibility(){
        if(!visible){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }

    // const space ={
    //     fontSize: '24px',
    // }


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
                            // value={formData.confirmPassword}
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