import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import SignInButton from './SignInbutton';
import './SignUp.css';
import DoneCompo from "./doneCompo";
import AxioxWithAuth from './AxiosWithAuth'
let formData = new FormData();



export default function SignUp() {
    const[visible, setVisible] = useState(false)
    const[uppercase, setUpperCase]= useState(true)
    const[character, setCharacter]= useState(true)
    const[done, setDone]= useState(false)
    const[pwmatch, setPwMatch]= useState(true)
    const[number, setNumber]= useState(true)
    const[specialchar, setSpecialchar]= useState(true)
    const[lowerchar, setLowerchar]= useState(true)
    
    const [name, setName] = useState(() => localStorage.getItem("fullname") || '')
    const [username, setUsername] = useState(() => localStorage.getItem("username") || '')
  //  const [surname, setSurname] = useState(() => localStorage.getItem("surname") || '')
    const [date_of_birth, setDate_of_birth] = useState(() => localStorage.getItem("DOB") || '')
    const [gender, setGender] = useState(() => localStorage.getItem("gender") || '')
    const [whatsapp_number, setWhatsapp_number] = useState(() => localStorage.getItem("whatsappNum") || '')
    const [email, setEmail] = useState(() => localStorage.getItem("email") || '')
    const[password, setPassword]= useState('');
    const[confirmPassword, setConfirmpassword]= useState('')


    const inputRefs = useRef({
        name: useRef(null),
        username: useRef(null),
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
        setName(event.target.value);

   }

    function handleSurNameChange (event){
        setUsername(event.target.value);

    }

    function handleDOBChange (event){
        setDate_of_birth(event.target.value);

        console.log(date_of_birth)
    }

    function handleGenderChange (event){
        setGender(event.target.value);

    }

    function handleWhatsappNoChange (event){
        setWhatsapp_number(event.target.value);
    }

    function handleEmailChange (event){
        setEmail(event.target.value);
    }

    useEffect(() => {
        function uploadToLocal() {
            localStorage.setItem('fullname', name);
             localStorage.setItem('username', username);
            // localStorage.setItem('firstname', firstname);
            localStorage.setItem('DOB', date_of_birth);
            localStorage.setItem('gender', gender);
            localStorage.setItem('whatsappNum', whatsapp_number);
            localStorage.setItem('email', email);
        }

        uploadToLocal();

        // Clean-up function
        return () => {
            localStorage.removeItem('fullname');
            localStorage.removeItem('username');
            //localStorage.removeItem('firstname');
            localStorage.removeItem('DOB');
            localStorage.removeItem('gender');
            localStorage.removeItem('whatsappNum');
            localStorage.removeItem('email');
        };
    }, [name, date_of_birth, gender, whatsapp_number, email, username]);



    function passwordValidation (){
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
            // ... additional code or actions for a successful password

            AxioxWithAuth.post('user/create/', formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                .then((response) => {
                    console.log(response.data);
                    if (response.status === 200 || response.status === 201) {
                        console.log("response 200");
                        setDone(true)
                        // setRegistrationSuccess(true)
                    } else {
                        console.log("An error occurred while uploading user data. Please try again.");
                        // handleError("An error occurred while uploading user data. Please try again.");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    // handleError("An error occurred while uploading user data. Please try again.");
                })
                .finally(() => console.log('alright'));
        }

    }


    function uploadData (){
        passwordValidation();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("username", username)
        formData.append("date_of_birth", date_of_birth);
        formData.append("gender", gender);
        formData.append("whatsapp_number", whatsapp_number);
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        passwordValidation()
        uploadData();

    };


    return (
        <>
            {done && (<div className="overLaySignUp">
                <div className="blackbg">
                  <div className="mainoverlay">
                      <DoneCompo
                          img='https://res.cloudinary.com/do5wu6ikf/image/upload/v1688124086/starpenzu/1st_zdsxup.svg'
                          donetext='Thank you for joining Starpenzu
                                    Tech Academy..
                                    Your Account has been
                                    successfully created.

                                    '

                          mailtext='Check your mail (spam) for the activation link before signing in'
                          img2='https://res.cloudinary.com/do5wu6ikf/image/upload/v1688124092/starpenzu/f6etyt_twbh6j.svg'
                          proceedsubtext='Click to Proceed'
                          ff = '/'
                      />
                  </div>
                </div>
            </div>)}
            <NavBar />
            <div className="signup">
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

                <form onSubmit={handleSubmit} className="register">
                    {/*name*/}
                    <div className={`outlined-input-container ${name ? 'focused' : ''}`}>
                        <input
                            type="text"
                            id="name"
                            ref={inputRefs.current.name}
                            className="outlined-input"
                            required
                            value={name}
                            onFocus={() => handleInputFocus('name')}
                            onBlur={() => handleInputBlur('name')}
                            onChange={handleFirstNameChange}
                        />
                        <label className={`outlined-label ${name ? 'active' : ''}`}>Name</label>
                    </div>
                    {/*username*/}
                    <div className={`outlined-input-container ${username ? 'focused' : ''}`}>
                        <input
                            type="text"
                            id="username"
                            ref={inputRefs.current.username}
                            className="outlined-input"
                            required
                            value={username}
                            onFocus={() => handleInputFocus('username')}
                            onBlur={() => handleInputBlur('username')}
                            onChange={handleSurNameChange}
                        />
                        <label className={`outlined-label ${username ? 'active' : ''}`}>Username</label>
                    </div>
                    {/* Date of Birth */}
                    <div className={`outlined-input-container ${date_of_birth ? 'focused' : ''}`}>
                        <input
                            required
                            type="date"
                            className="outlined-input"
                            name="DOB"
                            value={date_of_birth}
                            ref={inputRefs.current.DOB}
                            onChange={handleDOBChange}
                            onFocus={() => handleInputFocus('DOB')}
                            onBlur={() => handleInputBlur('DOB')}
                        />
                        <label className={`outlined-label ${date_of_birth ? 'active' : ''}`}>Date of Birth</label>
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
                    <div className={`outlined-input-container ${whatsapp_number ? 'focused' : ''}`}>
                        <input
                            required
                            type="text"
                            className="outlined-input"
                            name="whatsappNum"
                           value={whatsapp_number}
                            ref={inputRefs.current.whatsappNum}
                            onChange={handleWhatsappNoChange}
                            onFocus={() => handleInputFocus('whatsappNum')}
                            onBlur={() => handleInputBlur('whatsappNum')}
                        />
                        <label className={`outlined-label ${whatsapp_number ? 'active' : ''}`}>WhatsApp Number</label>
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
