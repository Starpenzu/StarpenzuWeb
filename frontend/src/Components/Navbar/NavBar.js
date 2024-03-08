import React ,{useEffect, useState} from 'react'
//import Logo from '../../images/favicon.png'
import Button from './Button'
import '../Navbar/newNav.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import AxiosWithAuth from "../SignUp/AxiosWithAuth";
import {decrypt} from "../Security";
//import harmburger from 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922753/starpenzu/Vector_r4aqp6.svg'





export default function NavBar() {
    const navigate = useNavigate();
    const [hamburger, setHamburger] = React.useState(false)
    const [dashdp, setDashDp] = React.useState(false)
    const [coursesDp, setCoursesDp] = React.useState(false)
    const [ddMobile, setDdMobile] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState(null);
    const[userGender, setUserGender] = useState(null)
    const location = useLocation();

    const mobilenav ={
        color: ddMobile || coursesDp ?'#F9B70B':''
    }
    const entToken = localStorage.getItem('ent');
    const authorizationHeader = entToken ? entToken : '';
    // const checkLocalStorage = localStorage.getItem("ent");
    const isAuthenticated =  authorizationHeader === 'true' ? false : true//checkLocalStorage === null || checkLocalStorage === "";
    // const checkLocalStorage = localStorage.getItem("ent");
    // const isAuthenticated = checkLocalStorage === null || checkLocalStorage === "";






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
        }else if(location.pathname === '/aboutuspage'){
            setSelectedItem('item5');
        }else {
            setSelectedItem(null);
        }
    }, [location])



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

    function handleCourseClick(){
        if(!ddMobile){
            setDdMobile(true)
        }else{
            setDdMobile(false)
        }
    }

    function handleItemClick(item) {
        setSelectedItem(item);
    }

    function handleLogout(){
        localStorage.clear();
        window.location.reload();
        navigate('/')
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await AxiosWithAuth.get('/user/me/', {

                });

                if (response.status === 200 || response.status === 201) {
                    setUserGender(response.data.gender)
                    console.log(response.data.gender)
                }else {
                    console.log('ori e ti gbale')
                }


                // Access the user info from the response data


                // Further processing of the user info
                // ...
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

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
                        <Link className='link-d link-d ffs'  to='/'>
                            <li
                            className={selectedItem === 'item1' ? 'clickedActive' : ''}
                            onClick={() => handleItemClick('item1')}
                        >Home</li>
                        </Link>

                            <li onMouseOver={handleMouseover} style={mobilenav} >Courses</li>
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


                        <a className='link-d ffs'
                           href="https://wa.me/message/6PVZWPUTB6KSN1">
                            <li>Contact Us</li>
                        </a>
                        <Link className='link-d link-d ffs'  to='/aboutuspage'>
                            <li
                                className={selectedItem === 'item5' ? 'clickedActive' : ''}
                                onClick={() => handleItemClick('item5')}
                            >About Us</li>
                        </Link>
                        { isAuthenticated ?
                            (
                                <div className="auth">
                                    <li>
                                        <Link to='/signup'>  <Button className="registerButton" name='Register'/></Link>
                                    </li>
                                    <li>
                                        <Link to='/Login'> <Button className="loginButton" name='Login'/></Link>
                                    </li>

                                </div>
                            )

                            :

                            (
                                <Link to='/dashboard' className='link-d'>
                                        <div className="dashbth">

                                            <img src={userGender === 'M' ? 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1688150957/starpenzu/Rectangle_1_lcolsq.svg' : 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1686802377/starpenzu/Rectangle_ep2xlk.svg'} alt=''/>

                                            <div className="dashtexttt">My Dashboard</div>

                                        </div>
                                </Link>

                            )
                        }

                    </ul>
                </div>


       </nav>
        {/*mobile*/}
        <div>
            {hamburger &&
                <div className={`harmBurgerDropDown`}>
                    <ul>
                        <Link className='link-d'  to='/'> <li
                            className={selectedItem === 'item1' ? 'clickedActive' : ''}
                            onClick={() => handleItemClick('item1')}
                        >Home</li>
                        </Link>

                            <li className='ddmobile' style={mobilenav} onClick={handleCourseClick}>Courses</li>
                        {ddMobile &&
                            <div className="mobilecoursesdd">
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

                        {!isAuthenticated && (<div>
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
                        </div>)}

                        <a className='link-d ffs'
                           href="https://wa.me/message/6PVZWPUTB6KSN1">
                            <li>Contact Us</li>
                        </a>


                        <Link to='/aboutuspage' className='link-d'>
                            <li
                                className={selectedItem === 'item5' ? 'clickedActive' : ''}
                                onClick={() => handleItemClick('item5')}
                            >About Us</li>
                        </Link>
                        {!isAuthenticated ?
                            (
                                <li className="logout--" onClick={handleLogout}>
                                Logout
                                </li>
                            )
                            :
                            (
                                <div>
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
                                </div>
                            )
                        }

                    </ul>
                </div>
            }
        </div>

        </div>
    )
}