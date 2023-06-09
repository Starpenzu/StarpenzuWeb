import React from 'react'
//import Logo from '../../images/favicon.png'
import Button from './Button'
import {Link, useLocation} from "react-router-dom";
//import harmburger from 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922753/starpenzu/Vector_r4aqp6.svg'

export default function NavBar() {
    const [hamburger, setHamburger] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState(null);
    const location = useLocation();

    React.useEffect(() => {
        // Update selectedItem state when the location changes
        if(location.pathname === '/'){
            setSelectedItem('item1')
        } else if (location.pathname === '/Courses') {
            setSelectedItem('item2');
        } else if(location.pathname === '/signup'){
            setSelectedItem('item3');
        }else if(location.pathname === '/Login'){
            setSelectedItem('item4');
        }else {
            setSelectedItem(null);
        }
    }, [location]);

    function handlehamburger() {
        if(!hamburger){
            setHamburger(true)
        }else{
            setHamburger(false)
        }
    }

    function handleItemClick(item) {
        setSelectedItem(item);
    }

    return(
        <div className='sss'>

        <nav>
            <Link class='stop' to='/'> <div className="brand">
                    <img src={'https://res.cloudinary.com/do5wu6ikf/image/upload/v1683923725/starpenzu/Starlogo_1_hhmgj6.svg'} className='navLogo'  alt="brand logo"/>
                    <div className="lgText">
                        Starpenzu
                    </div>
                </div>
            </Link>

                <div className="harmBurger">
                    {!hamburger? <img src={"https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922718/starpenzu/Vector_hgh9j9.svg"}
                          className='hamburgerImg' onClick={handlehamburger} alt="ham"/> :
                        <img src={"https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922753/starpenzu/Vector_r4aqp6.svg"}
                                                                                                className='hamburgerImg'  onClick={handlehamburger} alt="ham"/>}
                </div>

                {/*show on 1024px*/}

                <div className="navItems">
                    <ul>
                        <Link className='link-d'  to='/'>
                            <li
                            className={selectedItem === 'item1' ? 'clickedActive' : ''}
                            onClick={() => handleItemClick('item1')}
                        >Home</li>
                        </Link>
                        <Link className='link-d'  to='/Courses'>
                            <li
                                className={selectedItem === 'item2' ? 'clickedActive' : ''}
                                onClick={() => handleItemClick('item2')}
                            >
                                Courses</li>
                        </Link>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>
                          <Link to='/signup'>  <Button className="registerButton" name='Register'/></Link>
                        </li>
                        <li>
                            <Link to='/Login'> <Button className="loginButton" name='Login'/></Link>
                        </li>
                    </ul>
                </div>


       </nav>

        <div>
            {hamburger &&
                <div className={`harmBurgerDropDown`}>
                    <ul>
                        <Link className='link-d'  to='/'> <li
                            className={selectedItem === 'item1' ? 'clickedActive' : ''}
                            onClick={() => handleItemClick('item1')}
                        >Home</li>
                        </Link>
                        <Link  className='link-d' to='/Courses'>
                            <li
                                className={selectedItem === 'item2' ? 'clickedActive' : ''}
                                onClick={() => handleItemClick('item2')}
                            >
                                Courses</li>
                        </Link>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <Link to='/signup' className='link-d'>
                            <li
                            className={selectedItem === 'item3' ? 'clickedActive' : ''}
                            onClick={() => handleItemClick('item3')}
                        >Register</li>
                        </Link>
                        <Link to='/Login' className='link-d'>
                        <li
                            className={selectedItem === 'item4' ? 'clickedActive' : ''}
                            onClick={() => handleItemClick('item4')}
                        >Login</li>
                        </Link>
                    </ul>
                </div>
            }
        </div>

        </div>
    )
}