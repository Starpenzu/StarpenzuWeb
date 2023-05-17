import React from 'react';
import './CoursesComponent.css'


export default function CoursesComponent(){
    return(
        <div className='CoursesComponent'>
            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684205623/starpenzu/TIPS-MEMBUAT-UIUX-YANG-MENARIK-_kwphoe.svg"
           className='CoursesComponentImg' alt=""/>

          <div className="CoursesComponent-row2">
              <div className="courseSpec">
                  Development
              </div>

              <p className='courseDiff'>Advanced Level</p>
              
              <div className="courseTime">
                  <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684205623/starpenzu/Vector_1_rczur8.svg" alt=""/>
                  <p className='courseHours'>500 Hours</p>
              </div>

          </div>

            <div className="courseTitle">
                Learn Figma: User Interface
                Design Essentials - UI/UX Design
            </div>

            <div className="coursePrice">
                #3500.00
            </div>

            <button className='courseCTA'>Enroll</button>

        </div>
    )
}