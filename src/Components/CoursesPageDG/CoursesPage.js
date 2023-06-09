import React from 'react';
import CoursesPageHeader from '../CoursesPageDG/CoursesPageHeader'
import CoursesPageBody from '../CoursesPageDG/CoursesPageBody'
import '../CoursesPageDG/CoursesPageDG.css';
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