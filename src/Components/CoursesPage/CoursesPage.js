import React from 'react';
import CoursesPageHeader from '../CoursesPage/CoursesPageHeader'
import CoursesPageBody from '../CoursesPage/CoursesPageBody'
import '../CoursesPage/CoursesPage.css';
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