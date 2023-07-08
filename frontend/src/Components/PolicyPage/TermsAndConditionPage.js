import NavBar from "../Navbar/NavBar"
import Footer from '../Footer/Footer'
import './policyPage.css'
import React from "react";

export default function TermsAndConditionPage(){
    return (
        <>
            <NavBar/>

            <div className="heroSec">
                <div className="PrivacyHeroText">
                    Terms  & Conditions
                </div>
            </div>


            <div className="privacyBody">
                <p className="privacyMain">Effective Date: 1st Of June 2023 </p>

                <p className="privacyMain">These Terms & Conditions govern your use of Starpenzu Tech Academy's website,
                    services, and any other interactions with us. By accessing or using our services, you agree to
                    comply with and be bound by these terms. If you do not agree with any part of these terms, please
                    refrain from using our services.
                </p>

                <p className="privacyHead">Use of Our Services:</p>

                <p className="privacyMain">- You agree to use our services solely for lawful purposes and
                    in compliance with all applicable laws and regulations. </p>

                {/*<p className="privacyMain">*/}
                {/*    - Usage Data: We may automatically collect information about*/}
                {/*    your interaction with our website and services, including your*/}
                {/*    IP address, browser type, device information, and browsing activities.*/}
                {/*</p>*/}

                <p className="privacyHead">Intellectual Property:</p>

                <p className="privacyMain">- All content on our website, including text,
                    graphics, logos, images, videos, and software, is the property of Starpenzu Tech Academy and
                    protected by intellectual property laws.</p>

                <p className="privacyMain">
                    - You may not reproduce, distribute, modify, or exploit any content without
                    our prior written consent.
                </p>


                <p className="privacyHead">User Contributions:  </p>

                <p className="privacyMain">- You may have the opportunity to submit or
                    share content, such as comments, feedback, or project submissions, through our services.   </p>

                <p className="privacyMain">
                    - By submitting content, you grant Starpenzu Tech Academy a non-exclusive, royalty-free,
                    perpetual, worldwide license to use, display, modify, and distribute your content for the
                    purposes of providing and promoting our services.
                </p>

                <p className="privacyHead">Privacy:</p>

                <p className="privacyMain">- Our Privacy Policy outlines how we collect, use, disclose
                    , and safeguard your personal information. By using our services, you consent to the practices
                    described in the Privacy Policy. </p>

                <p className="privacyHead">Third-Party Links:</p>

                <p className="privacyMain">- Our services may contain links to third-party websites or services
                    that are not owned or controlled by Starpenzu Tech Academy.</p>

                <p className="privacyMain">- We do not endorse or assume any responsibility for the content,
                    privacy practices, or actions of third-party websites. </p>

                <p className="privacyHead">Limitation of Liability:</p>

                <p className="privacyMain"> - Starpenzu Tech Academy, its affiliates,
                    partners, and employees shall not be liable for any direct, indirect, incidental, consequential,
                     or exemplary damages arising out of your use of our services. </p>

                <p className="privacyHead">Modification of Terms:</p>

                <p className="privacyMain"> - We reserve the right to modify or update these
                    Terms & Conditions at any time. Any changes will be effective immediately upon posting the updated
                    terms on our website.   </p>

                <p className="privacyHead">Governing Law:</p>

                <p className="privacyMain">- These Terms & Conditions shall be governed by and
                    construed in accordance with the laws of Nigeria. Any disputes arising under these terms shall
                    be subject to the exclusive jurisdiction of the courts of Nigeria.  </p>

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