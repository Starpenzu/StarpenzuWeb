import React from 'react';
import CoursesPageHeaderProps from '../CourseProps/CoursesPageHeaderProps';
import CoursesPageBodyProps from '../CourseProps/CoursesPageBodyProps';
import '../CoursesPageALL.css';
import NavBar from '../../Navbar/NavBar';
import CoursesPageContent from '../CourseProps/CoursesPageContentProps';
import Footer from '../../Footer/Footer';
import accordionData from './accordionData';



export default function CoursesPageDjango(){
    return(
        <div className='forceMiddle'>
            <NavBar/>

            <div className="CoursesPageContainer">
                <CoursesPageHeaderProps
                    CoursesPagetitle='Backend Web Development (Python & Django)'
                    CoursesPageimgClass='CoursesPageimg'
                />
                <CoursesPageBodyProps
                    //CoursesPagetext
                            CoursesPagetext=' This is a course in Product Design using Figma as your main tool for Beginners requesting a
                        full concentration from students. This is so well detailed starting from how to install Figma software even for those with
                        zero knowledge in design. There would be series of live sections, quizzes and examinations as you partake in this course.
                        You will also be issued a certificate at the end of this course.'


                            //CoursesPagelist1
                            one='Understanding Figma tools'
                            two='Design Thinking'
                            three='User Research'
                            four='User Experience'
                            five='User Interface Design'
                            six='UX Deliverables'
                            seven='Case Studies and UX Portfolios'
                            eight='Designing with Figma'
                            nine='Wireframing'
                            ten='Building Style Guides & Design Systems'
                            ele='Understanding Responsive Designs'
                            twel='Prototyping'
                            thirt='UX Documentation & Design Hand off'

                            //CoursesPagelist2
                            fourt='Internet Connectivity'
                            fivt='At Least a 4GB RAM Laptop'
                            sixt='A Pen and Jotter for Note Taking'
                            sevent='Your Concentration'

                            coursedata={accordionData}


                />
            </div>

            <Footer/>
        </div>
    )
}