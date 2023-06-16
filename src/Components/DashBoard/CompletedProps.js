import React from 'react';
import './CertificateProps.css'

export default function CompletedProps (props){
    return(
        <>
            <div className="certiContainer">
                <div className="firstSeg">
                    <img src={props.imgFirst} alt=""/>
                </div>

                <div className="secSeg">
                    <div className="headtext">
                        {props.headtext}
                    </div>
                    <div className="subtext">
                        {props.subtext}
                    </div>
                </div>

                <div className="thirdSeg">
                    <div className="thirdsegbtn2">
                        {props.thirdsegbtn}
                    </div>
                </div>
            </div>
        </>
    )
}