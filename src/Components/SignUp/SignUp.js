import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import { TextField , MenuItem  } from '@mui/material';
import { makeStyles, multiTextField } from '@mui/styles';
import './SignUp.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SignInButton from './SignInbutton'
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';

// const Mytheme = createTheme(
//     {
//         shape:{
//             borderRadius: 10
//         }
//     }
// )


const useStyles = makeStyles({
    field: {
        marginBlock: '20px',
        width: '250px',
        borderRadius: '10px',
        fontSize: 14
    }
})

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

function SignUp() {

    const classes = useStyles();

    const [formData, setFormData] = React.useState(
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

    function handleChange(event) {

        const {name, type, value} = event.target;
        // setting your new state
        setFormData(prevState => (
            {
                ...prevState,
                [name] : value
            }
        ))
        // console.log(event.target)
    }
    function handleSubmit(event) {
        event.preventDefault();
        setError(false);

        const { firstName, surname, DOB, gender, whatsappNum, email, password, confirmPassword } = formData;

        if (!firstName || !surname || !DOB || !gender || !whatsappNum || !email || !password || !confirmPassword) {
            setError(true);
            console.log('Please fill in all the fields');
            return;
        }

        if (password !== confirmPassword) {
            setError(true);
            console.log('Passwords do not match');
            return;
        }

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setError(true);
            console.log('Password must contain at least one character, one number, one uppercase letter, and have a minimum length of 8 characters');
            return;
        }

        // Proceed with form submission or further processing
        alert('Form submitted successfully!');
    }



    return(
       <>
           <NavBar/>
           <div className="signup">

               <div className="signupHeader">
                   <div className="backarrow">
                       <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684452441/starpenzu/back_qpybto.svg" alt=""/>
                   </div>

                   <div className="signupTitle">
                       Register
                   </div>
               </div>
                {/*<ThemeProvider theme={Mytheme}>*/}
               <form action="" noValidate onSubmit={handleSubmit} className="register">
                   <TextField
                       error={error}
                       className={classes.field}
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
                   {/*<DatePicker sx={{ color: 'red' }/>*/}
                   <TextField
                        error={error}
                       className={classes.field}
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
                     <TextField
                          error={error}
                       className={classes.field}
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

                   <TextField
                        error={error}
                       className={classes.field}
                       id="outlined-basic-4"
                       label="Gender"
                       color='secondary'
                       margin="dense"
                       variant="outlined"
                       select
                       type='select'
                       name={"gender"}
                       required
                       // value={formData.gender}
                       onChange={handleChange}
                       defaultValue="">

                             {SelectGender.map((option) => (
                                 <MenuItem key={option.value} value={option.value}>
                                     {option.label}
                                 </MenuItem>
                             ))}

                   </TextField>

                   <TextField
                        error={error}
                       className={classes.field}
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

                   <TextField
                        error={error}
                       className={classes.field}
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

                   <TextField
                        error={error}
                       className={classes.field}
                       id="outlined-basic-6"
                       label="Password"
                       color='secondary'
                       variant="outlined"
                       margin="dense"
                       type='password'
                       required
                       name={"password"}
                       value={formData.password}
                       onChange={handleChange}
                   />

                   <TextField
                        error={error}
                       className={classes.field}
                       id="outlined-basic-7"
                       label="Confirm Password"
                       color='secondary'
                       variant="outlined"
                       margin="dense"
                       type='password'
                       required
                       name={"confirmPassword"}
                       value={formData.confirmPassword}
                       onChange={handleChange}
                   />

                   <SignInButton
                       className='registerBtn'
                       buttonName='Register'
                   />

               </form>
                {/*</ThemeProvider>*/}



           </div>

           <Footer/>
       </>

   )
}

export default SignUp;