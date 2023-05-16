import React from 'react';
import Slider from 'react-slick';
import CoursesComponent from './CoursesComponent'


export default function Courses(){

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <>

                <div className='coursesContainer'>
                    <div className="feaCourses">
                        <div className="courcesTexts">
                            <div className="headText">
                                Featured courses
                            </div>

                            <div className="subText">
                                Discover Your Perfect Program In Our Courses.
                            </div>
                        </div>

                        <div className="viewCouses">
                            <button>View All</button>
                        </div>
                    </div>



                </div>

                <div className="courcesContainer2">
                    <CoursesComponent/>
                    <CoursesComponent/>
                    <CoursesComponent/>

                    <CoursesComponent/>
                    <CoursesComponent/>
                    <CoursesComponent/>
                </div>

            </>
        );
    }
