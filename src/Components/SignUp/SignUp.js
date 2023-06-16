import React , { useState, useRef }  from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import {Link} from "react-router-dom";
import SignInButton from './SignInbutton'

import './SignUp.css'





export default function SignUp() {

    const [formData, setFormData] = React.useState(() => JSON.parse(localStorage.getItem("RegisterUser"))
        ||
        {
            firstName: "",
            surname: "",
            DOB: "",
            gender: "",
            whatsappNum: "",
            email: "",
            password: "",
            confirmPassword: "",
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
        function () {
            return (
                localStorage.setItem("RegisterUser", JSON.stringify(formData))
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
                [name]: value
            }
        ));
    }

    function handleSubmit(event) {
        event.preventDefault();

    }


    return (
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
                        Register
                    </div>
                </div>

                <form action="" onSubmit={handleSubmit} className="register">

                    <div className={`outlined-input-container ${isFocused ? 'focused' : ''}`}>
                        <input
                            ref={inputRef}
                            type="text"
                            className="outlined-input"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        <label className={`outlined-label ${isFocused ? 'active' : ''}`}>
                            First Name
                        </label>
                    </div>

                    <div className={`outlined-input-container ${isFocused ? 'focused' : ''}`}>
                        <input
                            ref={inputRef}
                            type="text"
                            className="outlined-input"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        <label className={`outlined-label ${isFocused ? 'active' : ''}`}>
                            Surname
                        </label>
                    </div>

                    <div className={`outlined-input-container ${isFocused ? 'focused' : ''}`}>
                        <input
                            ref={inputRef}
                            type="date"
                            className="outlined-input"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        <label className={`outlined-label ${isFocused ? 'active' : ''}`}>
                          Date of Birth
                        </label>
                    </div>

                    <div className={`outlined-input-container ${isFocused ? 'focused' : ''}`}>
                        <input
                            ref={inputRef}
                            type="text"
                            className="outlined-input"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        <label className={`outlined-label ${isFocused ? 'active' : ''}`}>
                           Gender
                        </label>
                    </div>

                    <div className={`outlined-input-container ${isFocused ? 'focused' : ''}`}>
                        <input
                            ref={inputRef}
                            type="text"
                            className="outlined-input"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        <label className={`outlined-label ${isFocused ? 'active' : ''}`}>
                            WhatsApp Number
                        </label>
                    </div>

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
                            type="text"
                            className="outlined-input"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        <label className={`outlined-label ${isFocused ? 'active' : ''}`}>
                            Password
                        </label>
                    </div>

                    <div className={`outlined-input-container ${isFocused ? 'focused' : ''}`}>
                        <input
                            ref={inputRef}
                            type="text"
                            className="outlined-input"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        <label className={`outlined-label ${isFocused ? 'active' : ''}`}>
                            Confirm password
                        </label>
                    </div>

                    <SignInButton
                        className='registerBtn'
                        buttonName='Register'
                    />

                    <div className="already">Already have an account? <Link className='link-d' to='/Login'><span className="loginn">Sign In</span></Link></div>




                </form>



            </div>

            <Footer/>
        </>

    )
}

