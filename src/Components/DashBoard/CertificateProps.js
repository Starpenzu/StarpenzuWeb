import React from 'react';
import './CertificateProps.css'

export default function CertificateProps (props){
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
                    <div className="thirdsegbtn">
                        {props.thirdsegbtn}
                    </div>
                </div>
            </div>
        </>
    )
}