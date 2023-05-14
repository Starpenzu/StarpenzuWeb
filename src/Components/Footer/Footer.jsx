import React from 'react'

export default function Footer(){
    return(
        <footer>
            {/*<div className='forceMiddle'>*/}
            <div className="leftSeg">
                <div className="companySeg">
                    <h1 className='companyHead'>Company</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Help and Support</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Condition</li>
                    </ul>

                </div>

                <div className="socialSeg">
                    <h1 className='socialHead'>Social Media</h1>

                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Linkedin</li>
                        <li>Email</li>
                    </ul>

                </div>

                <div className="footerBrand">
                    <img src={'https://res.cloudinary.com/do5wu6ikf/image/upload/v1683923725/starpenzu/Starlogo_1_hhmgj6.svg'} className='footerLogo'  alt="brand logo"/>
                    <div className="footerlgText">
                        StarpenzuAcademy
                    </div>
                </div>


            </div>

            <div className="middleSeg">
                <h1 className='offersHead'>Offers</h1>
                <ul>
                    <li>Portfolio Review</li>
                    <li>CV Template</li>
                    <li>Interview Prep</li>
                    <li>Cover Letter Template</li>
                    <li>Expert Training</li>
                    <li>Certificates</li>
                    <li>Mentors Live Session</li>
                </ul>
            </div>

            <div className="rightSeg">
                <h1 className='menuHead'>Menu</h1>
                <ul>
                    <li>Course</li>
                    <li> Dashboard</li>
                    <li> Support</li>
                    <li>FAQ</li>
                    <li>Register</li>
                    <li>Logout</li>
                </ul>
            </div>

            <div className="socialSeg2">
                <h1 className='socialHead'>Social Media</h1>

                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Linkedin</li>
                    <li>Email</li>
                </ul>

            </div>
            {/*</div>*/}
        </footer>
    )
}