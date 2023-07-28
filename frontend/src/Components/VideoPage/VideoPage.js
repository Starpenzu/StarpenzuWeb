import React from 'react'
import NavBar from "../Navbar/NavBar";
import './VideoPageStyle.css'
import Footer from "../Footer/Footer";
import {textAlign} from "@mui/system";

export default function VideoPage(){
    return (
        <>
            <NavBar/>
            <div className="videoPageCont">
                <div className="videoPageContHeader">
                    <div className="backArrowCont">
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922753/starpenzu/Vector_r4aqp6.svg" alt=""/>
                    </div>

                    <div className="videoPageContText">
                        <div className="videoPageContHeaderText">
                            Learn Figma: Design Essentials-  UI/UX Design
                        </div>

                        <div className="videoPageContSubText">
                            Downloading and Installation of Figma on your PC
                        </div>
                    </div>
                </div>

                <div className="videoCont">
                    <div className="mainVid">
                        <div>video</div>
                    </div>
                </div>

                <div className="aboutVideo">
                    <div className="aboutVideoMainText">
                        About This Video
                    </div>

                    <div className="aboutVideoSubText">
                        In this Video, you will learn how to download Figma Software Application on your PC or Mac.
                    </div>

                </div>

                <div className="progressBtnCont">

                <div className="progressBtn">
                    <div className="prevBtn">
                        <span className='arrowBackk'>
                           <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922753/starpenzu/Vector_r4aqp6.svg" alt=""/>
                        </span>
                        <div>
                        Previous Video
                        </div>
                    </div>
                    <div className="NextBtn">
                        <div>
                        Next Video
                        </div>

                        <span className='arrowForww'>
                           <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1683922753/starpenzu/Vector_r4aqp6.svg" alt=""/>

                        </span>
                    </div>
                </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}