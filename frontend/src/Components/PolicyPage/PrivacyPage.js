import React from 'react';
import NavBar from "../Navbar/NavBar"
import Footer from '../Footer/Footer'
import './policyPage.css'

export default function PrivacyPage(){
    return (
        <>
            <NavBar/>

            <div className="heroSec">
                <div className="PrivacyHeroText">
                    Our Privacy Policy
                </div>
            </div>


            <div className="privacyBody">
                <p className="privacyMain">Effective Date: 1st Of June 2023 </p>

                <p className="privacyMain">At Starpenzu Tech Academy, we are
                    committed to protecting the privacy and personal information
                    of our users. This Privacy Policy outlines how we collect,
                    use, disclose, and safeguard the information you provide
                    to us through our website, services, and other interactions.
                    By accessing or using our services, you consent to the pactices
                    described in this policy.
                </p>r

                <p className="privacyHead">Information We Collect:</p>

                <p className="privacyMain">- Personal Information: We may collect
                    personal information, such as your name, email address, contact
                    information, and any other information you voluntarily provide
                    to us.</p>

                <p className="privacyMain">
                    - Usage Data: We may automatically collect information about
                    your interaction with our website and services, including your
                    IP address, browser type, device information, and browsing activities.
                </p>

                <p className="privacyHead">Use of Information:</p>

                <p className="privacyMain">-We may use the collected information to provide
                    and improve our services, communicate with you, respond to your inquiries,
                    personalize your experience, and send you relevant updates. </p>

                <p className="privacyMain">
                    -We may also use your information for marketing purposes,
                    such as sending promotional emails or newsletters.
                    You can opt out of receiving such communications at any time.
                </p>


                <p className="privacyHead">Disclosure of Information: </p>

                <p className="privacyMain">- We may share your information with trusted third-party
                    service providers who assist us in operating our website and delivering our services.  </p>

                <p className="privacyMain">
                    - We may also disclose your information to comply with legal obligations,
                    protect our rights and interests, prevent fraud, or enforce our policies.
                </p>

                <p className="privacyHead">Data Security:</p>

                <p className="privacyMain">- We implement reasonable security measures to protect your information
                    from unauthorized access, alteration, disclosure, or destruction. </p>

                <p className="privacyHead">Third-Party Links:</p>

                <p className="privacyMain">- Our website may contain links to third-party websites or services.
                    We have no control over and assume no responsibility for the privacy practices or content
                    of these websites </p>

                <p className="privacyHead">Updates to this Privacy Policy:</p>

                <p className="privacyMain"> - We may update this Privacy Policy from
                    time to time. We will notify you of any significant changes by posting the updated
                    policy on our website. </p>

                <p className="privacyHead">Contact Us:</p>

                <p className="privacyMain"> - If you have any questions, concerns, or requests regarding this Privacy
                    Policy or the privacy practices at Starpenzu Tech Academy, please contact us at Starpenzu@gmail.com.
                </p>

                <p className="privacyMain"> By using our services, you acknowledge that you have read and
                    understood this Privacy Policy and agree to its terms.
                </p>

            </div>

            <Footer/>
        </>
    )
}