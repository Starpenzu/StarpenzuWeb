import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import './SignUp.css'

function SignUp() {
    const [inputValue, setInputValue] = useState('');
    const [isArchived, setIsArchived] = useState(false);

   return(
       <>
           <NavBar/>
           <div className="signup">
               <input
                   type="text"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   disabled={isArchived}
                   className={isArchived ? 'archived' : ''}
               />

           </div>

           <Footer/>
       </>

   )
}

export default SignUp;