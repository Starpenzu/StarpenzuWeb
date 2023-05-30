import React, {useRef, useState} from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import {Link, useLocation} from "react-router-dom";
import './SignUp.css'
import SignInButton from './SignInbutton'



export default function Login (){






    const [formData, setFormData] = React.useState(()=> JSON.parse(localStorage.getItem("LoginUser"))
        ||
        {
            email: "",
            password: ""
        }
    );

    const [isFocused, setIsFocused] = useState(false);
    const inputRef =useRef(null);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        if (inputRef.current.value) {
            setIsFocused(true);
        } else {
            setIsFocused(false);
        }
    };


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
    function handleSubmit(event) {
        event.preventDefault();

    }

    return(
        <>
            <NavBar/>
        <div className="signup">
            <div className="signupHeader">
                <Link to='/'>
                    <div className="backarrow">
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684452441/starpenzu/back_qpybto.svg" alt=""/>
                    </div>
                </Link>

                <div className="signupTitle">
                    Login
                </div>
            </div>


                <form action="" noValidate onSubmit={handleSubmit} className="register">
                    <div className={`outlined-input-container ${isFocused ? 'focused' : ''}`}>
                        <input
                            ref={inputRef}
                            type="email"
                            className="outlined-input"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        <label className={`outlined-label ${isFocused ? 'active' : ''}`}>
                            Email
                        </label>
                    </div>

                    <div className={`outlined-input-container ${isFocused ? 'focused' : ''}`}>
                        <input
                            ref={inputRef}
                            type="password"
                            className="outlined-input"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />

                        <label className={`outlined-label ${isFocused ? 'active' : ''}`}>
                            password
                        </label>

                    </div>
                    <div className="forgotpword">Forgotten Password?</div>







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