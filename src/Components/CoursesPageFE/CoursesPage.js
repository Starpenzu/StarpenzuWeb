import React from 'react';
import CoursesPageHeader from '../CoursesPageFE/CoursesPageHeader'
import CoursesPageBody from '../CoursesPageFE/CoursesPageBody'
import '../CoursesPageFE/CoursesPageFE.css';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';



export default function CoursesPage(){
    return(
        <>
            <NavBar/>

            <div className="CoursesPageContainer">
                <CoursesPageHeader/>
                <CoursesPageBody/>
            </div>

            <Footer/>
        </>
    )
}