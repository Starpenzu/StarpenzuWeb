import React from 'react';
import CoursesPageContent from '../CoursesPageUIUX/CoursesPageContent'
import SignInButton from '../SignUp/SignInbutton'
import accordionData from '../../Components/CoursesPageUIUX/accordionData'

export default function CoursesPageBody(){
    const [changeButton, setChangeButton] = React.useState(false)
    // if(!changeButton){
    //     // setChangeButton(true)
    //     alert('yooo')}

    function handleBtnChange(){
        if(changeButton){
            setChangeButton(false)
        }else{
            setChangeButton(true)

        }


    }

    return(
        <div>
            <div className="CoursesPagetitle margin">About Course</div>
            <div className="CoursesPagetext">
                This is a course in Product Design using Figma as your main tool for Beginners requesting a
                full concentration from students. This is so well detailed starting from how to install Figma software even for those with
                zero knowledge in design. There would be series of live sections, quizzes and examinations as you partake in this course.
                You will also be issued a certificate at the end of this course.
            </div>

            <div className="CoursesPageLearn">
                <div className="CoursesPagetitle margin">What Will I Learn?</div>

                <div className="CoursesPagelist1">
                    <ul>
                        <li>Understanding Figma tools</li>
                        <li>Design Thinking</li>
                        <li>User Research</li>
                        <li>User Experience Design</li>
                        <li>User Interface Design</li>
                        <li>UX Deliverables</li>
                        <li>Case Studies and UX Portfolios</li>
                    </ul>

                    <ul>
                        <li>Designing with Figma</li>
                        <li>Wireframing</li>
                        <li>Building Style Guides & Design Systems</li>
                        <li>Understanding Responsive Designs</li>
                        <li>Prototyping</li>
                        <li>UX Documentation & Design Hand off</li>
                    </ul>
                </div>

                <div className="CoursesPagelist2">
                    <div className="CoursesPagetitle margin">Course Requirements</div>
                    <ul>
                        <li>Internet Connectivity</li>
                        <li>At Least a 4GB RAM Laptop</li>
                        <li> A Pen and Jotter for Note Taking</li>
                        <li>Your Concentration</li>
                    </ul>
                </div>

            </div>

            <div className="CoursesPagecontent">
                <div className="CoursesPagetitle margin">Course Content</div>

                <CoursesPageContent courses={accordionData} />

            </div>

           <SignInButton
                className={changeButton ? 'registerBtn loginbtn makepaymentactive':'registerBtn loginbtn makepayment'}
                buttonName={changeButton ? 'In progress' : 'Proceed to Pay'}
                onclick={handleBtnChange}
            />



        </div>
    )
}