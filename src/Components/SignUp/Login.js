import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import {Link, useLocation} from "react-router-dom";
import { TextField , MenuItem, useMediaQuery  } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './SignUp.css'
import SignInButton from './SignInbutton'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import theme from '../SignUp/theme';



export default function Login (){

    const [showPassword, setShowPassword] = React.useState(false);
    const [formErrors, setFormErrors] = React.useState({});

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    // const classes = useStyles();

    const [formData, setFormData] = React.useState(()=> JSON.parse(localStorage.getItem("LoginUser"))
        ||
        {
            email: "",
            password: ""
        }
    );
    const [error, setError] = React.useState(false)
    // const { firstName, surname, DOB, gender, whatsappNum, email, password, confirmPassword } = formData;
    // const Name = firstName + " " + surname;

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
        setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            [name]: value ? '' : 'This field is required',
        }));
        //console.log(event.target.name + ':' + event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault();
        setError(false);

        const emptyFields = Object.keys(formData).filter((key) => !formData[key]);

        if (emptyFields.length > 0) {
            // Set the error messages for empty fields
            const fieldErrors = emptyFields.reduce((errors, field) => {
                return { ...errors, [field]: 'This field is required' };
            }, {});

            setFormErrors(fieldErrors);
            return; // Stop further processing
        }

        // All fields are filled, continue with form submission logic

        // Reset formErrors if needed
        setFormErrors({});
        const { email, password } = formData;

        // const { firstName, surname, DOB, gender, whatsappNum, email, password, confirmPassword } = formData;
        //
        // if (!firstName || !surname || !DOB || !gender || !whatsappNum || !email || !password || !confirmPassword) {
        //     setError(true);
        //     alert('Please fill in all the fields');
        //     return;
        // }
        //
        // if (password !== confirmPassword) {
        //     setError(true);
        //     alert('Passwords do not match');
        //     return;
        // }
        //
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setError(true);
            alert('Password must contain at least one character, one number, one uppercase letter, and have a minimum length of 8 characters');
            return;
        }

        // Proceed with form submission or further processing
        alert('logging in');
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

            <ThemeProvider theme={theme}>
                <form action="" noValidate onSubmit={handleSubmit} className="register">

                    <div className="cluse">
                        <TextField
                            sx={{
                                fontFamily: 'Clash display',
                                fontSize:18
                            }}
                            error={!!formErrors.email}
                            className='outlined'
                            id="outlined-basic-5"
                            label="Email"
                            color='secondary'
                            variant="outlined"
                            margin="dense"
                            type="email"
                            required
                            name={"email"}
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="cluse">

                        <FormControl sx={{ marginTop: 1, fontSize:10}} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password" error={!!formErrors.password} color='secondary' sx={{fontSize:15}}>Password</InputLabel>
                            <OutlinedInput
                                sx={{
                                    fontFamily: 'Clash display',
                                    fontSize:18
                                }}
                                className='outlined'
                                error={!!formErrors.password}
                                onChange={handleChange}
                                value={formData.password}
                                name={"password"}
                                color='secondary'
                                id="outlined-adornment-password"
                                required
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                            <div className="forgotpword">Forgotten Password?</div>
                        </FormControl>


                    </div>

                    {error ? <div className="new">
                        <p className={'pword'}> {error ? '*Password must contain at least one character, one number, one uppercase letter, and' +
                            ' have a' + ' minimum length of' + ' 8' + ' characters.' : ""}
                        </p>
                    </div>: ''}
                    <SignInButton
                        className='registerBtn loginbtn'
                        buttonName='Login'
                    />
                    <div className="already">Just joining us? <Link className='link-d' to='/signup'><span className="loginn">Sign Up</span></Link></div>


                </form>
            </ThemeProvider>

        </div>
        <Footer/>
        </>
    )
}