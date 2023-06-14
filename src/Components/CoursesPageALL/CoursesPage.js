import React from 'react';
import CoursesPageHeader from '../CoursesPageALL/CoursesPageHeader'
import CoursesPageBody from '../CoursesPageALL/CoursesPageBody'
import '../CoursesPageALL/CoursesPageALL.css';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';



export default function CoursesPage(){
    return(
        <div className='forceMiddle'>
            <NavBar/>

            <div className="CoursesPageContainer">
                <CoursesPageHeader/>
                <CoursesPageBody/>
            </div>

            <Footer/>
        </div>
    )
}