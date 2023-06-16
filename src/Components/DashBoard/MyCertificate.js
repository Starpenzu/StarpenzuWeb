import React from 'react';
import NavBar from '../Navbar/NavBar';
import InprogressProps from './InprogressProps';
import CompletedProps from './CompletedProps';
import CertificateProps from './CertificateProps';

export default function MyCertificate (){
    return (
        <>
            <NavBar/>

            <div className="dashcontainer">
                <div className="myProfile margine">
                    Certificate
                </div>

                <div className="conterr">
                    {/*<InprogressProps*/}
                    {/*    CompletedProps*/}
                    {/*    imgFirst='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686911910/starpenzu/How-Important-is-UI-UX-Design-in-an-App-Development-Process_4_k6q7yv.svg'*/}
                    {/*    headtext='The complete javascript course 2023: build real projects'*/}
                    {/*    subtext='In Progress'*/}
                    {/*    thirdsegbtn='View Course'*/}
                    {/*/>*/}

                    <CertificateProps
                        imgFirst='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686911910/starpenzu/How-Important-is-UI-UX-Design-in-an-App-Development-Process_4_k6q7yv.svg'
                        headtext='The complete javascript course 2023: build real projects'
                        subtext='Congratulations'
                        thirdsegbtn='Download'
                    />
                </div>

            </div>
        </>
    )
}