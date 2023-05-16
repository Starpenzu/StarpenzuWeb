import React from 'react';
import CoursesComponent from './CoursesComponent'


export default function Courses(){
    return(
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
            </div>

        </div>
    )
}