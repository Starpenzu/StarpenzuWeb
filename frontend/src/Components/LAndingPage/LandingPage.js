import React from 'react';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import './LandingPage.css'
import { Link } from  'react-router-dom'
import AxiosWithAuth from "../SignUp/AxiosWithAuth";

export default function LandingPage(){

    const [waitList, setWaitList] = React.useState(() => '')
    const [changeBtn, setChangeBtn] = React.useState(() => false)

    const email = waitList;
    localStorage.setItem('waitlist_user', email)

    const clearInput = () => {
        setWaitList('');
    };


    const handleSubmitClick = async (event) => {
        event.preventDefault();


        try {
            const response = await AxiosWithAuth.post("/user/subscribe-email/", {
                email
            });

            if (response.status === 200 || response.status === 201) {
                //const token = response.data.token;

                console.log("All good, user subscribed");
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
            //setErrorMessage("Invalid credentials. Please try again.");
            console.log(error);
        }
    };

    return(
        <>
            <NavBar/>
            <div className="landPageContainer">
                <div className="hero-section">
                    <div className="hero-text">
                        Are you searching for a reputable
                        Academy to learn & master
                        essential tech skills ?
                    </div>

                    <div className="hero--subtext">
                        Or perhaps you yearn to elevate your expertise, make waves
                        in your tech career and sieze life changing opputunities?
                    </div>

                   <Link to='/' className='link-d'> <div className="hero-btn">
                        Get Started
                    </div></Link>

                </div>

                <div className="first-section">
                    <div className="first-section-text">
                        <p className='ohh'>In today's digital age, possessing tech
                            skills is not only lucrative but also essential.
                            Companies, institutions, and organizations
                            have a high demand for individuals proficient
                            in tech. The world is increasingly influenced by
                            technology, with countless possibilities yet to be
                            explored. Research has revealed that the top 20
                            highest-paid skills are all tech-related. Imagine
                            earning a seven-figure income, in dollars or
                            pounds, by embarking on a journey to learn a
                            tech skill.</p>
                    </div>
                    
                    <div className="first-section-img">
                        <img className='sec1-img' src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1687553252/starpenzu/mobile_illust_ti8e38.svg" alt=""/>
                    </div>
                </div>

                <div className="second-section">
                    <div className="second-section-text">
                        At Starpenzu Tech Academy, we are dedicated to helping you realize
                        your aspirations by providing extensive training that will transform
                        you into a knowledgeable and skilled tech expert.
                    </div>

                    <div className="fourthSection">
                        <div className="randomContainer">
                            <div className="fourthText">
                                Join The Waiting List
                            </div>

                            <div className="fourthSubtext">
                                Get Personal Learning Recommendations.
                            </div>

                            <form onSubmit={handleSubmitClick}>
                                <input type="email" placeholder={'Enter your mail...'} value={waitList} onChange={(e) => setWaitList(e.target.value)}/>
                                <button> {changeBtn ? 'Joined' : 'Join'}</button>
                            </form>


                        </div>

                    </div>

                    {/*<div className="sec-section-btn">*/}
                    {/*   */}
                    {/*</div>*/}
                </div>

                <div className="third-section">
                    <div className=" testi">
                        Who are We?
                    </div>

                    <div className="third-section-subtext">
                        We are an academy committed to nurturing star players in the tech industry.
                        We firmly believe that every individual possesses the potential to grow, evolve, and
                        become a star player in their chosen field. Our mission is to transform your
                        skill set, turning you into a star player through rigorous challenges, expert training,
                        engaging projects,  and collaborative team initiatives. At Starpenzu Tech Academy,
                        we strive to create changemakers who will leave a lasting impact on the world
                        through tech. You too can be a part of this community of
                        empowered individuals.
                    </div>

                    <div className=" testi">
                        What do i gain?
                    </div>

                    <div className="third-section-subtext">
                        <li>Expert Training with professionals in the field.</li>
                        <li>Live Session with mentors.</li>
                        <li>Projects to help our students grow their creativity and proficiency with their tech skills..</li>
                        <li>Team collaboration to enhance teamwork and collective initiative.</li>
                        <li>Certificate after completion to launch our students into the tech world.</li>
                    </div>
                </div>

                <div className="thirdSection landingpage">
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

                <div className="fourth-section">

                    <div className="fourth-section-header stylize2">Newsletter</div>

                    <div className="main--container">
                    <div className="blank">
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1687571626/starpenzu/Rectangle_194_tw5xv0.svg" alt=""/>
                    </div>

                    <div className="sec2">
                        <div className='sec2-text third-section-subtext'>
                            We are a team focused on creating
                            equal opportunities for all to learn
                            about tech skills and how they can
                            transform their lives and careers.
                            And One of the ways we choose to
                            achieve.<span className='makeYellow'> This through our Training
                            Cohorts which would be held on
                            the 23rd of July, 2023.</span>
                        </div>

                        <div className="sec2-lists third-section-subtext">
                            <div className="fourth-section-header stylize">Courses  Available</div>
                            <li>Backend Web Development (Python & Django)</li>
                            <li>frontend Web Development (Html, CSS, javascript)</li>
                            <li>UI/UX design (Figma)</li>
                        </div>
                    </div>


                    </div>

                    <div className="sec3">
                        <div className="sec3-text">
                            Be a part of this cohort and select any of these courses you would like to
                            learn. Where we'll take you from noob to pro,,from student to master and
                            zero to Hero in your tech career. This is the right place to know more about
                            tech and elevate your status. <br/>
                            <span className="makeYellow specss">
                                    WARNING!!!
                                </span>
                            <br/>

                            This training is not for you if you are not ready to learn and implement
                            brutally. We are more concerned about your interest and willingness to
                            become an expert in that tech skill you want to learn which would take
                            your career to the next level.

                        </div>

                        <div className="sec-section-btn">
                            Join The Waiting List
                        </div>

                    </div>

                </div>

            </div>
            <Footer/>
        </>
    )
}