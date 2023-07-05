import React from 'react'


export default function CoursesPageHeaderProps(props){
    return(
        <div className="CoursesPageHeader">
            <div className="CoursesPagetitle" id='increase'>{props.CoursesPagetitle}</div>

            {/*CoursesPageimg*/}
            <div  className={props.CoursesPageimgClass} >

            </div>
            {/*<img className='CoursesPageimg' src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1685243994/starpenzu/TIPS-MEMBUAT-UIUX-YANG-MENARIK-_2ing_y4iueg.svg" alt="ui/ux drop img"/>*/}
        </div>
    )
}