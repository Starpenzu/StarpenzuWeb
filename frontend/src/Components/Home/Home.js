import React, {useEffect, useRef} from 'react'
import Navbar from '../Navbar/NavBar'
import Footer from '../Footer/Footer'
import Hero from './Hero'
import Courses from '../Courses/Courses'
import Section from './Section'


export default function Home (){
    const courseRef = useRef(null);



    return(
        <div className='forceMiddle'>
            <Navbar/>
            <Hero/>
            <Courses refProp={courseRef} />
            <Section/>
            <Footer refProp={courseRef}/>
        </div>
    )
}

