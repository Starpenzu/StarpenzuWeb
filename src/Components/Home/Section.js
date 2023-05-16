import React from 'react'


export default function Section (){
    return(
        <>
            <div className="firstSection">
                <div className="firstSectionText">
                    Why Study with us?
                </div>

                <div className="firstSectionImgTxtContainer">

                    <div className="breakPoint1">
                        <div className="firstSectionImgTxt I">
                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684243731/starpenzu/topntch_courses_ekabbw.svg" alt=""/>
                            <div className='firstSectionTxt'>Top-Notch Courses</div>
                        </div>

                        <div className="firstSectionImgTxt II">
                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684243731/starpenzu/Group_24_qwnnxv.svg" alt=""/>
                            <div className='firstSectionTxt'>Flexible Learning</div>
                        </div>

                        <div className="firstSectionImgTxt III">
                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684243731/starpenzu/lifetime_access_n0v2xt.svg" alt=""/>
                            <div className='firstSectionTxt'>Live Sessions</div>
                        </div>
                    </div>


                    <div className="breakPoint2">
                        <div className="firstSectionImgTxt VI">
                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684243731/starpenzu/learn_from_epert_doh85f.svg" alt=""/>
                            <div className='firstSectionTxt'>Learn from Expert</div>
                        </div>

                        <div className="firstSectionImgTxt V">
                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684243731/starpenzu/certificate_f9ilwi.svg" alt=""/>
                            <div className='firstSectionTxt'>Certificate</div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="secondSection">
                <div className="firstText">
                    Get Started With Us Today!
                </div>
                
                <div className="secondText">
                    Grow With Our Whatsapp Mentees Community
                </div>

                <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684251414/Group_51_htqgza.svg" alt=""/>

                <div className='button'>Register With Us</div>
            </div>
        </>

    )
}