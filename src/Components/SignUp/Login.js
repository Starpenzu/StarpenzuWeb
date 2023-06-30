import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import SignInButton from './SignInbutton';
import './SignUp.css';
import AxiosWithAuth from './AxiosWithAuth'


export default function Login (){
    const[visible, setVisible] = useState(false)
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')


    const inputRefs = useRef({
        email: useRef(null),
        password: useRef(null),
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


    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const response = await AxiosWithAuth.post("/user/token/", {
                email,
                password,
            });

            if (response.status === 200 || response.status === 201) {
                const token = response.data.token;
                const fool = 'fool'
                localStorage.setItem("ent", token);
                localStorage.setItem("dummy", fool);
                // window.location.reload();
                console.log("All good");
                // Navigate to the home page after successful login
                //navigate("/home");
                //console.log(localStorage.getItem("token"))
            } else {
               // setErrorMessage("Invalid credentials. Please try again.");
                console.log("Invalid credentials. Please try again.");
            }
        }
        catch (error) {
            //setErrorMessage("Invalid credentials. Please try again.");
            console.log("Invalid credentials. Please try again.");
        }
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
                    <div className="signupTitle">Login</div>
                </div>

            </div>


            <form onSubmit={handleSubmit} className="register">



                {/* Email */}
                <div className={`outlined-input-container ${email ? 'focused' : ''}`}>
                    <input
                        type="email"
                        className="outlined-input"
                        name="email"
                        value={email}
                        ref={inputRefs.current.email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => handleInputFocus('email')}
                        onBlur={() => handleInputBlur('email')}
                    />
                    <label className={`outlined-label ${email ? 'active' : ''}`}>Email</label>
                </div>
                {/* Password */}
                <div className={`outlined-input-container ${password ? 'focused' : ''}`}>
                    <input
                        type={visible? "text":"password"}
                        className="outlined-input"
                        name="password"
                        value={password}
                        ref={inputRefs.current.password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => handleInputFocus('password')}
                        onBlur={() => handleInputBlur('password')}
                    />
                    <div className="selectvisible" onClick={handleVisibility}>
                        <img src={visible ? 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1686996024/View_sf9mqu.svg' : "https://res.cloudinary.com/do5wu6ikf/image/upload/v1686995027/Vector_2_zqswsd.svg"} alt=""/>
                    </div>
                    <label className={`outlined-label ${password ? 'active' : ''}`}>Password</label>
                </div>
                <div className="forgotpword"><Link className='forgotpword' to='/passwordreset'>Forgotten Password?</Link></div>

                    <SignInButton
                        className='registerBtn loginbtn'
                        buttonName='Login'
                    />
                    <div className="already">Just joining us? <Link className='link-d' to='/signup'><span className="loginn">Sign Up</span></Link></div>


                </form>
</div>

        <Footer/>
        </>
    )
}