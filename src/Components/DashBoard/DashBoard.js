import React, {useState} from 'react';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer'
import '../DashBoard/dashboard.css';


export default function  DashBoard (){
    const[myCourses, setMyCourse] = useState(true)
    const[inprogress, setInProgress] = useState(null)
    const[completed, setCompleted] = useState(null)
    const[certificate, setCertificate] = useState(null)
    const[notification, setNotification] = useState(null)

    const makeactiveCourses ={
        color: myCourses ? 'red' : '',
        borderBottom: myCourses ? 'red solid 1px' : ''
    }

    const makeactiveInprogress = {
        color: inprogress ? 'red' : '',
        borderBottom: inprogress ? 'red solid 1px' : ''
    }

    const makeactiveCompleted = {
        color: completed ? 'red' : '',
        borderBottom: completed ? 'red solid 1px' : ''
    }

    const makeactiveCertificate = {
        color: certificate ? 'red' : '',
        borderBottom: certificate ? 'red solid 1px' : ''
    }

    const makeactiveNotifications = {
        color: notification ? 'red' : '',
        borderBottom: notification ? 'red solid 1px' : '',
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
                        <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686802377/starpenzu/Rectangle_ep2xlk.svg' alt=''/>
                    </div>

                    <div className="profname">
                        Rasheedat Imram
                    </div>
                </div>

                <div className="overalldash">

               <div className="dashProg">
                    <div className="completed round">
                        <div className="titlecompleted">Courses Completed</div>
                        <div className="titlecompletedno">01</div>

                    </div>

                   <div className="inprogress round">
                       <div className="titlecompleted">Courses in Progress</div>
                       <div className="titlecompletedno">01</div>
                   </div>




                       </div>
                            <div className="dashProg2">
                                <div className="certificate round">
                                    <div className="titlecompleted">Certificate <br/> Earned</div>
                                    <div className="titlecompletedno">01</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            {/*div for screen from 1300px and above*/}

            <div className="dashcontainer2">
                <div className="profile2">
                    <div className="logout">logout</div>
                    <div className="myProfileava2">
                        <div className="avartar2">
                            <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686802377/starpenzu/Rectangle_ep2xlk.svg' alt=''/>
                        </div>

                        <div className="profname2">
                            Rasheedat Imram
                        </div>
                    </div>

                    <div className="overalldash2">

                        <div className="dashProg3">
                            <div className="completed2 round2">
                                <div className="titlecompleted2">Courses Completed</div>
                                <div className="titlecompletedno2">01</div>

                            </div>

                            <div className="inprogress2 round2">
                                <div className="titlecompleted2">Courses in Progress</div>
                                <div className="titlecompletedno2">01</div>
                            </div>




                        </div>
                        <div className="dashProg4">
                            <div className="certificate2 round2">
                                <div className="titlecompleted2">Certificate <br/> Earned</div>
                                <div className="titlecompletedno2">01</div>
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
                    { myCourses ? <div className="myCourses">My courses</div> : ''}
                    { inprogress ? <div className="inprogress">In progress</div> : ''}
                    { completed ? <div className="Completed">Completed</div> : ''}
                    { certificate ? <div className="Certificate">Certificate</div> : ''}
                    { notification ? <div className="Notifications">Notifications</div> : ''}

                    {/*{myCourses && (<div className="myCourses">My courses</div>)} ||*/}
                    {/*{inprogress && (<div className="inprogress">In progress</div>)} ||*/}
                    {/*{completed && (<div className="Completed">Completed</div>)}||*/}
                    {/*{certificate && (<div className="Certificate">Certificate</div>)} ||*/}
                    {/*{notification && (<div className="Notifications">Notifications</div>)}*/}

                </div>
            </div>

            <Footer/>
        </>
    )
}