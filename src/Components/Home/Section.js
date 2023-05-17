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


            <div className="thirdSection">
                <div className="testi">Testimonials</div>
                <div className="testiSub">
                    What Our Student Are Saying About Us.
                </div>

                <div className="peeps">
                    <div className="peeps1">
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684272184/starpenzu/Starpenzu%20%28Copy%29%20%282%29/Rectangle-2_njg3hr.svg" alt=""/>
                        <div className="name">Ajadi  Michael</div>
                        <div className="notes">
                            I believe in lifelong learning and Starpenzu is
                            a great place to learn from experts. I’ve learned
                            a lot and recommended it to all my friends.
                        </div>
                    </div>

                    <div className="peeps1">
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684272184/starpenzu/Starpenzu%20%28Copy%29%20%282%29/Rectangle-1_mk1d5u.svg" alt=""/>
                        <div className="name">Sebastian Promise</div>
                        <div className="notes">
                            I believe in lifelong learning and Starpenzu is
                            a great place to learn from experts. I’ve learned
                            a lot and recommended it to all my friends.
                        </div>

                    </div>

                    <div className="peeps1">
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684272184/starpenzu/Starpenzu%20%28Copy%29%20%282%29/Rectangle_g9lguq.svg" alt=""/>

                        <div className="name">Olalekan Tunmise</div>
                        <div className="notes">
                            I believe in lifelong learning and Starpenzu is
                            a great place to learn from experts. I’ve learned
                            a lot and recommended it to all my friends.
                        </div>
                    </div>
                </div>

            </div>
            <div className="overlay">
                <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684242212/starpenzu/rocket-3994327-3307661_1_osi3e7.svg" alt=""/>
            </div>

            <div className="fourthSection">
                <div className="randomContainer">
                    <div className="fourthText">
                        Subscribe to our Newsletter
                    </div>

                    <div className="fourthSubtext">
                        Get Personal Learning Recommendations.
                    </div>

                    <form>
                        <input type="email" placeholder={'Enter your mail...'}/>
                        <button>Subscribe</button>
                    </form>


                </div>

            </div>
        </>

    )
}