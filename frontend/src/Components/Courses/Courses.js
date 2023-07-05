import React from 'react';
import Slider from 'react-slick';
import CoursesComponent from './CoursesComponent'
import {Link, useLocation} from "react-router-dom";

export default function Courses(){

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div className='lefty'>

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

                        <div className="coursesContainer1">

                            <CoursesComponent
                                img='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686257309/starpenzu/20230605_001226_1_yng8v8.svg'
                                courseSpec='Design'
                                courseDiff='Beginner Level'
                                courseHours='500 Hours'
                                courseTitle='Learn Figma: User Interface Design Essentials - UI/UX Design'
                                coursePrice='#3750.00'
                                link='/coursespageuiux'
                            />
                            <CoursesComponent
                                img='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686257309/starpenzu/dj_fsxez8.svg'
                                courseSpec='Development'
                                courseDiff='Advanced Level'
                                courseHours='500 Hours'
                                courseTitle='Backend Web Development(Python & Django)'
                                coursePrice='#3750.00'
                                link='/coursespagedjango'
                            />
                            <CoursesComponent
                                img='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686257309/starpenzu/fd_dmdhkv.svg'
                                courseSpec='Design'
                                courseDiff='Beginner Level'
                                courseHours='500 Hours'
                                courseTitle='Frontend Web
                             Development(HTML, CSS & Javascript)'
                                coursePrice='#3750.00'
                                link='/coursespagefe'
                                id='ssshw'
                            />

                            {/*<CoursesComponent/>*/}
                            {/*<CoursesComponent/>*/}
                            {/*<CoursesComponent/>*/}

                            {/*</div>*/}

                        </div>

                    </div>


                </div>





            </div>
        );
    }
