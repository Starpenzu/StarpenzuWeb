import React, { useState, useRef } from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import SignInButton from './SignInbutton';
import './SignUp.css';
import '../OutlinedInput/inputstyle.css';
import {Link,  useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AxiosWithAuth from "./AxiosWithAuth";
import DoneCompo from "./doneCompo";





 function CreatePassword (){

     const[isLoading, setLoading]= useState(false)
    const[uppercase, setUpperCase]= useState(true);
    const [expiredToken, setExpiredToken] = useState(false)
    const[character, setCharacter]= useState(true);
    const[pwmatch, setPwMatch]= useState(true);
    const[number, setNumber]= useState(true);
    const[specialchar, setSpecialchar]= useState(true);
    const[lowerchar, setLowerchar]= useState(true);
    const[password, setPassword]= useState('');
     const { uidb64, token } = useParams();
    const[password_confirm, setConfirmpassword]= useState('');
    const[visible, setVisible] = useState(false);
     const navigate = useNavigate();
     const[done, setDone] = useState(false)

    const inputRefs = useRef({
        password: useRef(null),
        password_confirm: useRef(null),
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

        let isCharacterValid = password.length >= 8;
        let isLowerCharValid = password.match(/[a-z]/);
        let isUpperCharValid = password.match(/[A-Z]/);
        let isNumberValid = password.match(/\d/);
        let isSpecialCharValid = password.match(/[@$!%*.?&]/);
        let isPasswordMatchValid = password === password_confirm;

        let isPasswordValid = isCharacterValid && isLowerCharValid && isUpperCharValid && isNumberValid && isSpecialCharValid && isPasswordMatchValid;

        setCharacter(!isCharacterValid);
        setLowerchar(!isLowerCharValid);
        setUpperCase(!isUpperCharValid);
        setNumber(!isNumberValid);
        setSpecialchar(!isSpecialCharValid);
        setPwMatch(!isPasswordMatchValid);

        if (isPasswordValid) {
            console.log('Password meets all requirements!');

        }


    }



    function handleVisibility(){
        if(!visible){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }


     const handleSubmit = async (event) => {
         event.preventDefault();
         try {

             const response = await AxiosWithAuth.post(`/user/password-reset-confirm/${uidb64}/${token}/`, {
                 password,
                 password_confirm,
             });

             //const userData = response.data;
             if (response.status === 200 || response.status === 201) {

                 passwordValidation()
                 setDone(true)

             } else {
                 console.log('kk');
             }
         } catch (error) {
             console.log('invalid token restart the process');
             setExpiredToken(true);
             setTimeout(function() {
                 console.log('process restarted')
                 navigate("/passwordreset");
             }, 5000);
         }
         // finally{
         //   console.log('dd')
         // }
     }

     function handleBtn(){
         setLoading(true)
     }

    return(
        <>

            {done && (<div className="overLaySignUp">
                <div className="blackbg">
                    <div className="mainoverlay">
                        <DoneCompo
                            img='https://res.cloudinary.com/do5wu6ikf/image/upload/v1688124086/starpenzu/go_l86grv.svg'
                            donetext='New Password
                                      Successfully Created.
                                    '

                            img2='https://res.cloudinary.com/do5wu6ikf/image/upload/v1688124092/starpenzu/f6etyt_twbh6j.svg'
                            proceedsubtext='Click to Proceed'
                            ff = '/Login'
                        />
                    </div>
                </div>
            </div>)}
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
                    <div className={`outlined-input-container ${password_confirm ? 'focused' : ''}`}>
                        <input
                            required
                            type={visible? "text":"password"}
                            className="outlined-input"
                            name="confirmPassword"
                            // value={formData.confirmPassword}
                            ref={inputRefs.current.password_confirm}
                            onChange={(e)=>setConfirmpassword(e.target.value)}
                            onFocus={() => handleInputFocus('password_confirm')}
                            onBlur={() => handleInputBlur('password_confirm')}
                        />

                        <div className="selectvisible" onClick={handleVisibility}>
                            <img src={visible ? 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1686996024/View_sf9mqu.svg' : "https://res.cloudinary.com/do5wu6ikf/image/upload/v1686995027/Vector_2_zqswsd.svg"} alt=""/>
                        </div>
                        <label className={`outlined-label ${password_confirm ? 'active' : ''}`}>Confirm Password</label>
                    </div>

                    <div className="validationsec">
                        {uppercase && (<div className="valid">At least 1 uppercase</div>)}
                        {character && (<div className="valid">Minimum of 8 Characters</div>)}
                        {pwmatch && (<div className="valid">Password Match</div>)}
                        {number && (<div className="valid">At least 1 number</div>)}
                        {specialchar && (<div className="valid">1 special Character</div>)}
                        {lowerchar && (<div className="valid">At least 1 lowercase</div>)}
                        {expiredToken && (<div className="valid">Oops, token expired. The process will restart in 5 secs</div>)}
                    </div>

                    <SignInButton
                        className='registerBtn loginbtn makepayment'
                        buttonName={isLoading ? 'Loading...' : 'Create'}
                        onclick={handleBtn}
                    />
                    {/*<div className="already">Just joining us? <Link className='link-d' to='/signup'><span className="loginn">Sign Up</span></Link></div>*/}


                </form>
            </div>

            <Footer/>
        </>
    )
}

export default CreatePassword;