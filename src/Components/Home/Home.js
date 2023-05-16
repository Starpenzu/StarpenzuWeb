import React from 'react'
import Navbar from '../Navbar/NavBar'
import Footer from '../Footer/Footer'
import Hero from './Hero'
import Courses from '../Courses/Courses'
import CoursesComponent from '../Courses/CoursesComponent'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home (){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return(
        <div className='forceMiddle'>
            <Navbar/>

            <Hero/>

            <Courses/>
            <div className="coursesContainer1">
                <div className="courcesContainer2">

                            <CoursesComponent/>
                            <CoursesComponent/>
                            <CoursesComponent/>
                            <CoursesComponent/>
                            <CoursesComponent/>
                            <CoursesComponent/>
                            <CoursesComponent/>
                            <CoursesComponent/>
                            <CoursesComponent/>
                            <CoursesComponent/>
                            <CoursesComponent/>
                            <CoursesComponent/>
                            <CoursesComponent/>
                            <CoursesComponent/>
                </div>

            </div>


            {/*<Footer/>*/}
        </div>
    )
}




            {/*<div className='homeHero'>*/}
            {/*   <div className="heroText">*/}
            {/*       Grow Your Career!<br/>*/}
            {/*       Start Learning With<br/>*/}
            {/*       Starpenzu Tech<br/>*/}
            {/*       Academy.*/}
            {/*   </div>*/}

            {/*    <div className="heroImage">*/}
            {/*        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684031978/starpenzu/hhh_bpjcsf.png" className='heroill' alt="hero image"/>*/}
            {/*    </div>*/}
            {/*</div>*/}


