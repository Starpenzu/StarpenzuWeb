import React, {useState, useEffect} from 'react';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import NotificationProps from './NotificationProp';
import CertificateProps from './CertificateProps';
import CompletedProps from './CompletedProps';
import InprogressProps from './InprogressProps';
import '../DashBoard/dashboard.css';
import AxiosWithAuth from "../SignUp/AxiosWithAuth";
import axios from "axios";
import {useNavigate} from "react-router-dom";


// function formatDate(dateString) {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     const date = new Date(dateString);
//     const formattedDate = date.toLocaleDateString('en-US', options);
//
//     const day = date.getDate();
//     const suffix = getNumberSuffix(day);
//
//     return `${day}${suffix} ${formattedDate}`;
// }
//
// function getNumberSuffix(day) {
//     if (day >= 11 && day <= 13) {
//         return 'th';
//     }
//
//     switch (day % 10) {
//         case 1:
//             return 'st';
//         case 2:
//             return 'nd';
//         case 3:
//             return 'rd';
//         default:
//             return 'th';
//     }
// }


export default function  DashBoard (){
    const navigate = useNavigate();
    const[myCourses, setMyCourse] = useState(() => true)
    const[inprogress, setInProgress] = useState(() => null)
    const[completed, setCompleted] = useState(() => null)
    const[certificate, setCertificate] = useState(() => null)
    const[notification, setNotification] = useState(() => null)
    const[userInfo, setUserInfo] = useState(() => null)
    const[userGender, setUserGender] = useState(() =>null)
    const [nick, setNick] = useState(() => null);
    const [dataBaseCourse, setDataBaseCourse] = useState(() => null);
    const [message, setMessages] = useState(() => null);
    const [userEmail, setUserEmail] = useState(() => '' || localStorage.getItem('email_a'));

    // const originalDate = message.created_at;
    // const formattedDate = formatDate(originalDate);

   // const encodedEmail = encodeURIComponent(userEmail);
    localStorage.setItem('email_a', userEmail)
    const email = localStorage.getItem('email_a');


    console.log(message)

    const makeactiveCourses ={
        color: myCourses ? '#F9B70B' : '',
        borderBottom: myCourses ? '#F9B70B solid 1.5px' : ''
    }

    const makeactiveInprogress = {
        color: inprogress ? '#F9B70B' : '',
        borderBottom: inprogress ? '#F9B70B solid 1.5px' : ''
    }

    const makeactiveCompleted = {
        color: completed ? '#F9B70B' : '',
        borderBottom: completed ? '#F9B70B solid 1.5px' : ''
    }

    const makeactiveCertificate = {
        color: certificate ? '#F9B70B' : '',
        borderBottom: certificate ? '#F9B70B solid 1.5px' : ''
    }

    const makeactiveNotifications = {
        color: notification ? 'red' : '',
        borderBottom: notification ? 'red solid 1.5px' : '',
        borderBottomWidth: notification ? '1px' : '0'
    }

    function handleitemclick(x){
        if(x === 'myCourse'){
            setMyCourse(true)
            setInProgress(false)
            setNotification(false)
            setCompleted(false)
            setCertificate(false)
        }
        if(x === 'inprogress'){
            setMyCourse(false)
            setInProgress(true)
            setNotification(false)
            setCompleted(false)
            setCertificate(false)
        }
        if(x === 'Notifications'){
            setMyCourse(false)
            setInProgress(false)
            setNotification(true)
            setCompleted(false)
            setCertificate(false)
        }
        if(x === 'Completed'){
            setMyCourse(false)
            setInProgress(false)
            setNotification(false)
            setCompleted(true)
            setCertificate(false)
        }
        if(x === 'Certificate'){
            setMyCourse(false)
            setInProgress(false)
            setNotification(false)
            setCompleted(false)
            setCertificate(true)
        }
    }

    function handleLogout(){
        localStorage.clear('ent');
        // window.location.reload();
        navigate('/')
    }


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await AxiosWithAuth.get('/user/me/', {

                });

                if (response.status === 200 || response.status === 201) {
                    setUserInfo(response.data.name)
                    setUserGender(response.data.gender)
                    setNick(response.data.username)
                    setDataBaseCourse(response.data.course)
                    setUserEmail(response.data.email)
                    console.log(response.data.email)
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





    useEffect(() => {

        const fetchNotification = async () => {
            try {
                const response = await axios.get(`https://starpenzu.tech/api/user/users/${email}/messages/`, {
                    headers: {
                        Authorization: `Token ${localStorage.getItem('ent')}`

                    },
                });

                if (response.status === 200 || response.status === 201) {
                    setMessages(response.data)
                    console.log(response.data)
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

        fetchNotification();
    }, [myCourses, notification]);


    // Reverse the order of the messages
    const reversedMessages = Array.isArray(message) ? [...message].reverse() : [];




    return(
        <>
            <NavBar/>
            {/*div for screen from 0px to 1300px*/}
            <div className="dashcontainer">
                <div className="myProfile">
                    My Profile
                </div>


                <div className='centralize'>
                <div className="myProfileava">
                    <div className="avartar">
                        <img src={userGender === 'M' ? 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1688150957/starpenzu/Rectangle_1_lcolsq.svg' : 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1686802377/starpenzu/Rectangle_ep2xlk.svg'} alt=''/>
                    </div>

                    <div className="profname">
                        {userInfo}<br/>
                        <span className='nick'>{nick}</span>
                    </div>
                </div>

                <div className="overalldash">

               <div className="dashProg">
                    <div className="completed round">
                        <div className="titlecompleted">Courses Completed</div>
                        <div className="titlecompletedno">00</div>

                    </div>

                   <div className="inprogress round">
                       <div className="titlecompleted">Courses in Progress</div>
                       <div className="titlecompletedno">00</div>
                   </div>




                       </div>
                            <div className="dashProg2">
                                <div className="certificate round">
                                    <div className="titlecompleted">Certificate <br/> Earned</div>
                                    <div className="titlecompletedno">00</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            {/*div for screen from 1300px and above*/}

            <div className="dashcontainer2">
                <div className="profile2">
                    <div className="logout" onClick={handleLogout}>
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1686916316/starpenzu/Vector_lpnux7.svg" alt=""/>
                        <p>Logout</p>
                    </div>
                    <div className="myProfileava2">
                        <div className="avartar2">
                            <img src={userGender === 'M' ? 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1688150957/starpenzu/Rectangle_1_lcolsq.svg' : 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1686802377/starpenzu/Rectangle_ep2xlk.svg'} alt=''/>

                        </div>

                        <div className="profname2">
                            {userInfo}
                            <br/><span className='nick'>{nick}</span>
                        </div>
                    </div>

                    <div className="overalldash2">

                        <div className="dashProg3">
                            <div className="completed2 round2">
                                <div className="titlecompleted2">Courses Completed</div>
                                <div className="titlecompletedno2">00</div>

                            </div>

                            <div className="inprogress2 round2">
                                <div className="titlecompleted2">Courses in Progress</div>
                                <div className="titlecompletedno2">00</div>
                            </div>




                        </div>
                        <div className="dashProg4">
                            <div className="certificate2 round2">
                                <div className="titlecompleted2">Certificate <br/> Earned</div>
                                <div className="titlecompletedno2">00</div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="mydashboard">
                    <div className="mydashhh">My Dashboard</div>

                    <div className="listitemsContainer">
                        <ul className='listitems'>
                            <li style={makeactiveCourses} onClick={() => handleitemclick('myCourse')}>My Courses</li>
                            <li style={makeactiveInprogress} onClick={() => handleitemclick('inprogress')}>In Progress</li>
                            <li style={makeactiveCompleted} onClick={() => handleitemclick('Completed')}>Completed</li>
                            <li style={makeactiveCertificate} onClick={() => handleitemclick('Certificate')}>Certificate</li>
                            <li style={makeactiveNotifications} onClick={() => handleitemclick('Notifications')}>Notifications</li>
                        </ul>
                    </div>
                    { myCourses && dataBaseCourse === "No Course" ?
                        <div className="myCourses">
                            {dataBaseCourse === "No Course" ? 'No course available' :
                                (<>
                                    <InprogressProps
                                        CompletedProps
                                        imgFirst='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686911910/starpenzu/How-Important-is-UI-UX-Design-in-an-App-Development-Process_4_k6q7yv.svg'
                                        headtext='The complete javascript course 2023: build real projects'
                                        subtext='In Progress'
                                        thirdsegbtn='View Course'
                                    />

                                    <CompletedProps
                                        imgFirst='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686911910/starpenzu/How-Important-is-UI-UX-Design-in-an-App-Development-Process_4_k6q7yv.svg'
                                        headtext='The complete javascript course 2023: build real projects'
                                        subtext='Completed'
                                        thirdsegbtn='View Course'
                                    />
                                </>) }

                        </div>

                        : ''
                    }

                    { inprogress && dataBaseCourse === "No Course" ? 'No course in Progress'
                        :
                        (<>
                        { inprogress ?
                            <div className="inprogress">
                                <InprogressProps
                                    CompletedProps
                                    imgFirst='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686911910/starpenzu/How-Important-is-UI-UX-Design-in-an-App-Development-Process_4_k6q7yv.svg'
                                    headtext='The complete javascript course 2023: build real projects'
                                    subtext='In Progress'
                                    thirdsegbtn='View Course'
                                />

                            </div>
                            : ''
                        }

                        </>)



                    }

                    { completed && dataBaseCourse === "No Course" ? 'No course available or completed' :

                        (
                                <>
                                    {completed ? <div className="Completed">
                                        <CompletedProps
                                            imgFirst='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686911910/starpenzu/How-Important-is-UI-UX-Design-in-an-App-Development-Process_4_k6q7yv.svg'
                                            headtext='The complete javascript course 2023: build real projects'
                                            subtext='Completed'
                                            thirdsegbtn='View Course'
                                        />

                                        <CompletedProps
                                            imgFirst='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686911910/starpenzu/How-Important-is-UI-UX-Design-in-an-App-Development-Process_4_k6q7yv.svg'
                                            headtext='The complete javascript course 2023: build real projects'
                                            subtext='Completed'
                                            thirdsegbtn='View Course'
                                        />

                                     </div>

                                    : '' }
                                </>

                        )
                    }

                    { certificate && dataBaseCourse === "No Course" ? 'No Certificate available' :
                        (
                            <>
                                {certificate ?
                                    <div className="Certificate">
                                        <CertificateProps
                                            imgFirst='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686911910/starpenzu/How-Important-is-UI-UX-Design-in-an-App-Development-Process_4_k6q7yv.svg'
                                            headtext='The complete javascript course 2023: build real projects'
                                            subtext='Congratulations, your certificate is ready. Proceed to download.'
                                            thirdsegbtn='Download'

                                        />
                                    </div>

                                    : ''}
                            </>
                        )
                    }

                    { notification && !message  ? <div>No notifications for now, Enjoy the silence </div> :

                        (
                            <>{ notification ?

                                <div className="Notifications">
                                    {reversedMessages.map((item) => (
                                        <NotificationProps key={item} notificationText={item.content} notificationDate={item.created_at}/>
                                        ))}

                                </div>
                                        : ''
                                   }

                            </>
                        )

                    }


                </div>
            </div>

            <Footer/>
        </>
    )
}