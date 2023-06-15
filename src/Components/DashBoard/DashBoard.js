import React from 'react';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer'
import '../DashBoard/dashboard.css';


export default function  DashBoard (){
    return(
        <>
            <NavBar/>
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


               <div className="dashProg">
                    <div className="completed round">
                        <div className="titlecompleted">Courses Completed</div>
                        <div className="titlecompletedno">01</div>

                    </div>

                   <div className="inprogress round">
                       <div className="titlecompleted">Courses in progress</div>
                       <div className="titlecompletedno">01</div>
                   </div>




               </div>
                    <div className="dashProg2">
                        <div className="certificate round">
                            <div className="titlecompleted">Certificate Earned</div>
                            <div className="titlecompletedno">01</div>
                        </div>
                    </div>
            </div>
            </div>

            <Footer/>
        </>
    )
}