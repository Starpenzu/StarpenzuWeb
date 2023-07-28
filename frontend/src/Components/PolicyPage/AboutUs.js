import React from 'react';
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import './policyPage.css'

const AboutUs = () =>{
    return(
        <>
            <NavBar/>

            <div className="heroSec">
                <div className="PrivacyHeroText">
                    About Us
                </div>
            </div>


            <div className="privacyBody">
                
                <p className="privacyHead">About Us:</p>

                <p className="privacyMain">
                    About Us: Starpenzu Tech Academy is an academy dedicated to training and developing high-performing
                    professionals in the technology industry. We firmly believe in the potential of every individual to
                    excel and become a leader in their chosen field. At Starpenzu Tech Academy our expert training are
                    designed to be interactive and hands-on, allowing learners to gain practical skills and experience.
                    We use a range of tools and technologies, including video tutorials, online assignments,
                    and project-based learning, to ensure that our training are engaging and effective
                </p>


                <p className="privacyHead">Mission Statement:</p>

                <p className="privacyMain">
                    Our mission at Starpenzu Tech Academy is to provide high-quality and accessible tech education that
                    empowers individuals to achieve their personal and professional goals. We are committed to delivering
                    an engaging and innovative learning experience that equips our students with the knowledge, skills,
                    and confidence they need to excel in the tech industry. We strive to create a supportive and
                    inclusive community that fosters collaboration and networking opportunities for our learners,
                    instructors, and industry professionals. Through this community, we aim to empower our students to
                    build lasting connections and gain valuable insights that help them navigate the ever-evolving tech
                    landscape.
                </p>




                <p className="privacyHead">Vision Statement:</p>

                <p className="privacyMain">
                    Our vision at Starpenzu Tech Academy is to empower individuals from all backgrounds with the
                    knowledge and skills needed to excel in the rapidly-evolving world of technology. We strive to
                    create a learning environment that is accessible, flexible, and engaging, enabling learners to
                    achieve their personal and professional goals. We envision a future where anyone with the drive and
                    determination to learn can access highquality tech education and pursue rewarding careers in this
                    exciting field. Starpenzu Tech Academy will be a leader in this movement, offering cutting-edge
                    courses and resources that prepare learners for the jobs of tomorrow.
                </p>



            </div>

            <Footer/>
        </>

    )
}

export default AboutUs;