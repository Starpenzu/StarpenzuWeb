import React from 'react';
import CoursesPageContent from './CoursesPageContentProps'
import SignInButton from '../../SignUp/SignInbutton'
// import accordionData from '../../Components/CoursesPageALL/accordionData'

export default function CoursesPageBodyProps (props){
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
            {/*CoursesPagetext*/}
            <div className="CoursesPagetext">
                {props.CoursesPagetext}
            </div>

            <div className="CoursesPageLearn">
                <div className="CoursesPagetitle margin">What Will I Learn?</div>

                <div className="CoursesPagelist1">
                    <ul>
                        <li>{props.one}</li>
                        <li>{props.two}</li>
                        <li>{props.three}</li>
                        <li> {props.four}</li>
                        <li>{props.five}</li>
                        <li>{props.six}</li>
                        <li>{props.seven}</li>
                    </ul>

                    <ul>
                        <li>{props.eight}</li>
                        <li>{props.nine}</li>
                        <li>{props.ten}</li>
                        <li>{props.ele}</li>
                        <li>{props.twel}</li>
                        <li>{props.thirt}</li>
                    </ul>
                </div>

                <div className="CoursesPagelist2">
                    <div className="CoursesPagetitle margin">Course Requirements</div>
                    <ul className='req'>
                        <li>{props.fourt}</li>
                        <li>{props.fivt}</li>
                        <li> {props.sixt}</li>
                        <li>{props.sevent}</li>
                    </ul>
                </div>

            </div>

            <div className="CoursesPagecontent">
                <div className="CoursesPagetitle margin">Course Content</div>

                <CoursesPageContent courses={props.coursedata} />

            </div>
            <a href="https://wa.me/message/6PVZWPUTB6KSN1">
           <SignInButton
                className={changeButton ? 'registerBtn loginbtn makepaymentactive':'registerBtn loginbtn makepayment'}
                buttonName={changeButton ? 'In progress' : 'Proceed to Pay'}
                onclick={handleBtnChange}
            /></a>



        </div>
    )
}