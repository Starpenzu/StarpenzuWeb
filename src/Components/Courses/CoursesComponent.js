import React from 'react';
import './CoursesComponent.css'


export default function CoursesComponent(props){
    return(
        <div className='CoursesComponent'>
            <img src={props.img} alt="" className='CoursesComponentImg' />

          <div className="CoursesComponent-row2">
              <div className="courseSpec">
                  {props.courseSpec}
              </div>

              <p className='courseDiff'>{props.courseDiff}</p>
              
              <div className="courseTime">
                  <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684205623/starpenzu/Vector_1_rczur8.svg" alt=""/>
                  <p className='courseHours'>{props.courseHours}</p>
              </div>

          </div>

            <div className="courseTitle">
                {props.courseTitle}
            </div>

            <div className="coursePrice">
                {props.coursePrice}
            </div>

            <button className='courseCTA'>Enroll</button>

        </div>
    )
}