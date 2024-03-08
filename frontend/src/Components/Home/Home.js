import React, {useEffect, useRef} from 'react'
import Navbar from '../Navbar/NavBar'
import Footer from '../Footer/Footer'
import Hero from './Hero'
import Courses from '../Courses/Courses'
import Section from './Section'
import {Helmet} from "react-helmet-async";


export default function Home (){
    const courseRef = useRef(null);



    return(
        <>
            <Helmet>
                <title>Home Page</title>
                <meta
                    name='description'
                    content='Unlock your potential with our programming courses. From beginner to advanced levels, master the art of programming with our expert-led courses.'
                />
                <meta property="og:title" content="Starpenzu" />

                <meta name="keywords" content="Programming, CodingCourses, TechEducation" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourwebsite.com" />
                <meta property="og:image" content="https://example.com/image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Your Website Title" />
                <meta
                    name="twitter:description"
                    content="Embark on a coding journey with our premier programming courses! From Python to JavaScript, level up your skills with expert-led tutorials and hands-on projects."
                />
                <meta name="twitter:image" content="https://example.com/image.jpg" />
                <meta name="twitter:site" content="@yourtwitterhandle" />
                <meta
                    property="og:description"
                    content="Embark on a coding journey with our premier programming courses! From Python to JavaScript, level up your skills with expert-led tutorials and hands-on projects."
                />
                <link rel="canonical" href="/"/>

            </Helmet>
            <div className='forceMiddle'>
                <Navbar/>
                <Hero/>
                <Courses refProp={courseRef} />
                <Section/>
                <Footer refProp={courseRef}/>
            </div>
        </>

    )
}

