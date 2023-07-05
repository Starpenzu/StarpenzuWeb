import React from 'react';
import './CertificateProps.css'

export default function InprogressProps (props){
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
                    <div className="subtext3">
                        {props.subtext}
                    </div>
                </div>

                <div className="thirdSeg">
                    <div className="thirdsegbtn3">
                        {props.thirdsegbtn}
                    </div>
                </div>
            </div>
        </>
    )
}