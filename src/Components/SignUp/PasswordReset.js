import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import SignInButton from './SignInbutton';
import './SignUp.css';


export default function PasswordReset (){
    const[visible, setVisible] = useState(false)
    const [formData, setFormData] = React.useState(()=> JSON.parse(localStorage.getItem("LoginUser"))
        ||
        {
            email: "",
            // password: ""
        }
    );

    const inputRefs = useRef({
        email: useRef(null),
        // password: useRef(null),
    });



    React.useEffect(
        function (){
            return(
                localStorage.setItem("LoginUser", JSON.stringify(formData))
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
                        <div className="signupTitle">Reset Password</div>
                        <div className="signupTitle-subtext">Enter your email to reset your password</div>
                    </div>

                </div>


                <form onSubmit={handleSubmit} className="register">

                    {/* Email */}
                    <div className={`outlined-input-container ${formData.email ? 'focused' : ''}`}>
                        <input
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
                    {/*/!* Password *!/*/}
                    {/*<div className={`outlined-input-container ${formData.password ? 'focused' : ''}`}>*/}
                    {/*    <input*/}
                    {/*        type={visible? "text":"password"}*/}
                    {/*        className="outlined-input"*/}
                    {/*        name="password"*/}
                    {/*        value={formData.password}*/}
                    {/*        ref={inputRefs.current.password}*/}
                    {/*        onChange={handleChange}*/}
                    {/*        onFocus={() => handleInputFocus('password')}*/}
                    {/*        onBlur={() => handleInputBlur('password')}*/}
                    {/*    />*/}
                    {/*    <div className="selectvisible" onClick={handleVisibility}>*/}
                    {/*        <img src={visible ? 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1686996024/View_sf9mqu.svg' : "https://res.cloudinary.com/do5wu6ikf/image/upload/v1686995027/Vector_2_zqswsd.svg"} alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <label className={`outlined-label ${formData.password ? 'active' : ''}`}>Password</label>*/}
                    {/*</div>*/}
                    {/*<div className="forgotpword">Forgotten Password?</div>*/}

                    <SignInButton
                        className='registerBtn loginbtn'
                        buttonName='Continue'
                    />
                    {/*<div className="already">Just joining us? <Link className='link-d' to='/signup'><span className="loginn">Sign Up</span></Link></div>*/}


                </form>
            </div>

            <Footer/>
        </>
    )
}