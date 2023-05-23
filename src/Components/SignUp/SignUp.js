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




const SelectGender = [
    {
        value: 'Male',
        label: 'Male',
    },
    {
        value: 'Female',
        label: 'Female',
    },
    {
        value: 'Others',
        label: 'Others',
    }
    ]

export default function SignUp() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [formErrors, setFormErrors] = React.useState({});

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    // const classes = useStyles();

    const [formData, setFormData] = React.useState(()=> JSON.parse(localStorage.getItem("RegisterUser"))
        ||
        {
            firstName: "",
            surname: "",
            DOB: "",
            gender:"",
            whatsappNum: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    );
    const [error, setError] = React.useState(false)
    const { firstName, surname, DOB, gender, whatsappNum, email, password, confirmPassword } = formData;
    const Name = firstName + " " + surname;

    React.useEffect(
        function (){
            return(
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

        const { firstName, surname, DOB, gender, whatsappNum, email, password, confirmPassword } = formData;

        if (!firstName || !surname || !DOB || !gender || !whatsappNum || !email || !password || !confirmPassword) {
            setError(true);
            alert('Please fill in all the fields');
            return;
        }

        if (password !== confirmPassword) {
            setError(true);
            alert('Passwords do not match');
            return;
        }

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setError(true);
            alert('Password must contain at least one character, one number, one uppercase letter, and have a minimum length of 8 characters');
            return;
        }

        // Proceed with form submission or further processing
        alert('Registration Form submitted successfully!' + " " + "Welcome" + " " + Name);
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
                       Register
                   </div>
               </div>
                <ThemeProvider theme={theme}>
               <form action="" noValidate onSubmit={handleSubmit} className="register">
                   <div className="cluse">
                       <TextField
                           error={!!formErrors.firstName}
                           className='outlined'
                           id="outlined-basic-1"
                           label="First Name"
                           color='secondary'
                           variant="outlined"
                           margin="dense"
                           type='text'
                           required
                           name={"firstName"}
                           value={formData.firstName}
                           onChange={handleChange}
                       />
                   </div>

                   <div className="cluse">
                       <TextField
                           error={!!formErrors.surname}
                           className='outlined'
                           id="outlined-basic-2"
                           label="Surname"
                           color='secondary'
                           variant="outlined"
                           margin="dense"
                           type='text'
                           required
                           name={"surname"}
                           value={formData.surname}
                           onChange={handleChange}
                       />
                   </div>

                   <div className="cluse">
                         <TextField
                             error={!!formErrors.DOB}
                              className='outlined'
                           id="outlined-basic-3"
                           label="Date of Birth"
                           color='secondary'
                           InputLabelProps={{
                               shrink: true,
                           }}
                           margin="dense"
                           variant="outlined"
                           type='date'
                           name={"DOB"}
                           required
                           value={formData.DOB}
                           onChange={handleChange}
                       />
                   </div>

                   <div className="cluse">
                       <TextField
                           sx={{border:'1px'}}
                           error={!!formErrors.gender}
                            className='outlined'
                           id="outlined-basic-4"
                           label="Gender"
                           color='secondary'
                           margin="dense"
                           variant="outlined"
                           select
                           type='select'
                           name={"gender"}
                           required
                           value={formData.gender}
                           onChange={handleChange}
                           defaultValue="">

                                 {SelectGender.map((option) => (
                                     <MenuItem key={option.value} value={option.value}>
                                         {option.label}
                                     </MenuItem>
                                 ))}

                       </TextField>
                   </div>

                   <div className="cluse">
                       <TextField
                           error={!!formErrors.whatsappNum}
                            className='outlined'
                           id="outlined-basic-4"
                           label="Whatsapp Number"
                           color='secondary'
                           variant="outlined"
                           margin="dense"
                           type='text'
                           required
                           name={"whatsappNum"}
                           value={formData.whatsappNum}
                           onChange={handleChange}
                       />
                   </div>

                   <div className="cluse">
                       <TextField
                           error={!!formErrors.email}
                            className='outlined'
                           id="outlined-basic-5"
                           label="Email"
                           color='secondary'
                           variant="outlined"
                           margin="dense"
                           type='email'
                           required
                           name={"email"}
                           value={formData.email}
                           onChange={handleChange}
                       />
                   </div>

                    <div className="cluse">
                           {/*<TextField*/}
                           {/*     error={error}*/}
                           {/*     className='outlined'*/}
                           {/*    id="outlined-basic-6"*/}
                           {/*    label="Password"*/}
                           {/*    color='secondary'*/}
                           {/*    variant="outlined"*/}
                           {/*    margin="dense"*/}
                           {/*    type='password'*/}
                           {/*    required*/}
                           {/*    name={"password"}*/}
                           {/*    value={formData.password}*/}
                           {/*    onChange={handleChange}*/}
                           {/*/>*/}

                        <FormControl sx={{ marginTop: 1, fontSize:10}} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password" error={!!formErrors.password} color='secondary' sx={{fontSize:15}}>Password</InputLabel>
                            <OutlinedInput

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

                        </FormControl>

                    </div>

                   <div className="cluse">
                       <FormControl sx={{ marginTop: 1.5, fontSize:10}} variant="outlined">
                           <InputLabel htmlFor="outlined-adornment-password-1" error={!!formErrors.confirmPassword} color='secondary' sx={{fontSize:15}}>Confirm Password</InputLabel>
                           <OutlinedInput

                               className='outlined'
                               error={!!formErrors.confirmPassword}
                               onChange={handleChange}
                               value={formData.confirmPassword}
                               name={"confirmPassword"}
                               color='secondary'
                               id="outlined-adornment-password-1"
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

                       </FormControl>

                   {/*    <p className={'pword'} > {error ? '*Password must contain at least one character, one number, one uppercase letter, and' +*/}
                   {/*        ' have a' +  ' minimum length of' +  ' 8' + ' characters' : ""}*/}
                   {/*        <br/>*/}
                   {/*        {formData.password !== formData.confirmPassword ? '*Passwords do not match' : ''}*/}
                   {/*    </p>*/}
                   </div>

                   {error ? <div className="cluse">
                       <p className={'pword'}> {error ? '*Password must contain at least one character, one number, one uppercase letter, and' +
                           ' have a' + ' minimum length of' + ' 8' + ' characters.' : ""}
                           <br/>
                           {formData.password !== formData.confirmPassword ? '*Passwords do not match.' : ''}
                       </p>
                   </div>: ''}
                   <SignInButton
                       className='registerBtn'
                       buttonName='Register'
                   />

                   <div className="already">Already have an account? <Link className='link-d' to='/'><span className="loginn">Sign In</span></Link></div>

               </form>
                </ThemeProvider>



           </div>

           <Footer/>
       </>

   )
}

