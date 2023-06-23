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
            </div>
            <Footer/>
        </>
    )
}