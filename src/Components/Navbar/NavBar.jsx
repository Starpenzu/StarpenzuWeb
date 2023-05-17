import React from 'react'
//import Logo from '../../images/favicon.png'
import Button from './Button'
import {Link, useLocation} from "react-router-dom";
//import harmburger from 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922753/starpenzu/Vector_r4aqp6.svg'

export default function NavBar() {
    const [hamburger, setHamburger] = React.useState(false)

    function handlehamburger() {
        if(!hamburger){
            setHamburger(true)
        }else{
            setHamburger(false)
        }
    }

    return(
        <div className='sss'>

        <nav>
                <div className="brand">
                    <img src={'https://res.cloudinary.com/do5wu6ikf/image/upload/v1683923725/starpenzu/Starlogo_1_hhmgj6.svg'} className='navLogo'  alt="brand logo"/>
                    <div className="lgText">
                        Starpenzu
                    </div>
                </div>

                <div className="harmBurger">
                    {!hamburger? <img src={"https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922718/starpenzu/Vector_hgh9j9.svg"}
                          className='hamburgerImg' onClick={handlehamburger} alt="ham"/> :
                        <img src={"https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922753/starpenzu/Vector_r4aqp6.svg"}
                                                                                                className='hamburgerImg'  onClick={handlehamburger} alt="ham"/>}
                </div>

                {/*show on 1024px*/}

                <div className="navItems">
                    <ul>
                        <Link className='link-d'  to='/'> <li className='navItemActive'>Home</li></Link>
                        <Link className='link-d'  to='/Courses'><li>Courses</li></Link>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>
                            <Button className="registerButton" name='Register'/>
                        </li>
                        <li>
                           <Button className="loginButton" name='Login'/>
                        </li>
                    </ul>
                </div>


       </nav>

        <div>
            {hamburger &&
                <div className={`harmBurgerDropDown`}>
                    <ul>
                        <Link className='link-d'  to='/'> <li className='hamBurgerActive'>Home</li></Link>
                        <Link  className='link-d' to='/Courses'>  <li>Courses</li> </Link>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Register</li>
                        <li>Login</li>
                    </ul>
                </div>
            }
        </div>

        </div>
    )
}