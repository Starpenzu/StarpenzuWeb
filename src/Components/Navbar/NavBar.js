import React from 'react'
//import Logo from '../../images/favicon.png'
import Button from './Button'
import '../Navbar/newNav.css'
import {Link, useLocation} from "react-router-dom";
//import harmburger from 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922753/starpenzu/Vector_r4aqp6.svg'

export default function NavBar() {
    const [hamburger, setHamburger] = React.useState(false)
    const [dashdp, setDashDp] = React.useState(false)
    const [coursesDp, setCoursesDp] = React.useState(false)
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

    function handleMouseover(){
        if(!coursesDp){
            setCoursesDp(true)
        }else{
            setCoursesDp(false)
        }


    }

    function handleDashDp(){
        if(!dashdp){
            setDashDp(true)
        }else{
            setDashDp(false)
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

                            <li onMouseOver={handleMouseover} >Courses</li>
                        {coursesDp &&
                            <div className="coursedp ">

                                <Link className='link-d'  to='/coursespagedjango'>
                                <div className="backend makefexz">
                                    <div className="backendtext">Backend Web Development</div>
                                    <div className="backendimg"><img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1686939338/Vector_1_olhi2x.svg" alt=""/></div>
                                </div>
                                </Link>

                                <Link className='link-d'  to='/coursespagefe'>
                                <div className="frontend makefexz">
                                    <div className="backendtext">Frontend Web Development</div>
                                    <div className="backendimg"><img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1686939338/Vector_1_olhi2x.svg" alt=""/></div>
                                </div>
                                </Link>

                                <Link className='link-d'  to='/coursespageuiux'>
                                <div className="uiux makefexz">
                                    <div className="backendtext">UI/UX Design</div>
                                    <div className="backendimg"><img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1686939338/Vector_1_olhi2x.svg" alt=""/></div>
                                </div>
                                </Link>
                            </div>
                        }


                        {/*<li>dash</li>*/}
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
                            <li>Courses</li>
                        <div className={dashdp? 'dashboardii':"dashboard"} onClick={handleDashDp}>
                            <li
                                className={dashdp ? 'clickedActive dashboardf' : 'dashboardf'}
                            >
                                Dashboard</li>
                            <div className="drpaimg">
                                <img src={dashdp ? 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1685243073/starpenzu/arrowup_pjrati.svg'
                                    : "https://res.cloudinary.com/do5wu6ikf/image/upload/v1685242829/starpenzu/Vector_jaiwhq.svg"}
                                     alt=""/>
                            </div>
                        </div>
                        { dashdp &&
                            <div className="dds">
                                <Link className='link-d'  to='/dashboard'><div className='dashboarddp'>My Profile</div></Link>
                                <Link className='link-d'  to='/mycourses'><div className='dashboarddp'>My Courses</div></Link>
                                <Link className='link-d'  to='/mycerti'><div className='dashboarddp'>Certificates</div></Link>
                                <Link className='link-d'  to='/mynoti'><div className='dashboarddp'>Notifications</div></Link>
                            </div>
                        }
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