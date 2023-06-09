import React from 'react';
import CoursesPageHeader from '../CoursesPageUIUX/CoursesPageHeader'
import CoursesPageBody from '../CoursesPageUIUX/CoursesPageBody'
import '../CoursesPageUIUX/CoursesPageUIUX.css';
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