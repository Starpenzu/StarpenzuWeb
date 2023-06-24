import React from 'react';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import './LandingPage.css'

export default function LandingPage(){
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

                    <div className="hero-btn">
                        Get Started
                    </div>

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

                    <div className="sec-section-btn">
                        Join The Waiting List
                    </div>
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

            </div>
            <Footer/>
        </>
    )
}