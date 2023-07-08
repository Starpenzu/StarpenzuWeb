import React from 'react'
import { Link } from 'react-router-dom'
import AxiosWithAuth from "../SignUp/AxiosWithAuth";


export default function Section (){
    const [show1, setShow1] = React.useState(() => '')
    const [show, setShow] = React.useState(() => '')

    const [subEmail, setSubEmail] = React.useState(() => '')
    const [changeBtn, setChangeBtn] = React.useState(() => false)

    const email = subEmail;
    localStorage.setItem('subUser', email)

    const clearInput = () => {
        setSubEmail('');
    };


    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const response = await AxiosWithAuth.post("/user/subscribe-email/", {
                email
            });

            if (response.status === 200 || response.status === 201) {
                //const token = response.data.token;

                console.log("All good, user subscribed");
                setShow1('Subscription Successful')
                setShow('')
                // Navigate to the home page after successful login
                // navigate("/
                clearInput();
                setChangeBtn(true)
                // window.location.reload();
                //console.log(localStorage.getItem("token"))
            } else {
                // setErrorMessage("Invalid credentials. Please try again.");
                console.log("Invalid credentials. Please try again.");
            }
        }
        catch (error) {
            setShow('Subscription Unsuccessful')
            setShow1('')
            //setErrorMessage("Invalid credentials. Please try again.");
            console.log(error);
        }
    };


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

                <Link to='/signup' className='link-d'><div className='makepayment button'>Register With Us</div></Link>
            </div>


            <div className="thirdSection">
                <div className="testi">Testimonials</div>
                <div className="testiSub">
                    What Our Student Are Saying About Us.
                </div>

                <div className="peeps">
                    <div className="peeps1 co1">
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1688763915/starpenzu/Mask_group_dv9wlp.svg" alt=""/>
                        <div className="name">Daniel Agoobola</div>
                        <div className="notes">
                            I would recommend Starpenzu Tech Academy
                            to any aspiring tech expert looking forward to upskilling
                            themselves into an elite level.
                            The tutors offer a practical oriented teaching system,
                            they are very patient and  they pay attention to little details to
                            ensure that students learn effectively and implement efficiently.
                            The training was really impactful in my journey from a
                            tech enthusiast to a professional.
                        </div>
                    </div>

                    <div className="peeps1 co2">
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1688763912/starpenzu/IMG-20230626-WA0006_1_ifxyem.svg" alt=""/>
                        <div className="name">Inioluwa Olaleye</div>
                        <div className="notes">
                            Starpenzu Tech Academy has been very beneficial in
                            helping me carve my resume. The Management team did a great job
                            of following up on their student and ensuring they get the
                            complete tech training experience.
                            They ensured that we kept being productive by giving us
                            assignments to practice all we’ve learnt. They also sent videos
                            and messages to my mail to help me in my training process.
                            This Academy will be one of the biggest
                            training platforms in year’s to come, keep up the good work guys.
                        </div>

                    </div>

                    <div className="peeps1 co3">
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1688763910/starpenzu/Mask_group_1_uvcg46.svg" alt=""/>

                        <div className="name">Gbolahan Salahudeen</div>
                        <div className="notes">
                            Firstly, I want to show my appreciation to Starpenzu Academy
                            for the oppurtunity they have given me to learn more about data
                            analysis, I joined at a time when I had no knowledge on
                            what data analysis entails.
                            Secondly, the teachings process was flexible and in 3 weeks
                            I had acquired te essential knowledge needed to become a
                            top analyst and all of this would not be possible if not for Starpenzu
                            Tech Academy.
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

                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder={'Enter your mail...'} value={subEmail} onChange={(e) => setSubEmail(e.target.value)}/>
                        <button>{changeBtn ? 'Subscribed' : 'Subscribe'}</button>
                    </form>

                </div>

                <div className="validationsec">
                    {show && (<div className="valid ssaa">{show}</div>)}
                    {show1 && (<div className="valid ssaa">{show1}</div>)}
                </div>

            </div>
        </>

    )
}