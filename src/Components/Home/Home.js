import React from 'react'
import Navbar from '../Navbar/NavBar'
import Footer from '../Footer/Footer'
import Hero from './Hero'
import Courses from '../Courses/Courses'
import CoursesComponent from '../Courses/CoursesComponent'
import Section from './Section'

export default function Home (){
    return(
        <div className='forceMiddle'>
            <Navbar/>
            <Hero/>
            <Courses/>
            <Section/>
            <Footer/>
        </div>
    )
}







