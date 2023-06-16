import React from 'react';
import NavBar from '../Navbar/NavBar';
import InprogressProps from './InprogressProps';
// import CompletedProps from './CompletedProps';
// import CertificateProps from './CertificateProps';
import NotificationProps from './NotificationProp'

export default function MyNotification (){
    return (
        <>
            <NavBar/>

            <div className="dashcontainer">
                <div className="myProfile margine">
                    Notification
                </div>

                <div className="conterr">
                    <NotificationProps
                        notificationText='Hello  Rasheedat, Congratulations on completing your Javascript courses, we know it hasn’t
                                                    been easy so far but we are glad you scaled through. Congratulations once again'
                        notificationDate='8th June, 2023'
                    />

                    <NotificationProps
                        notificationText='Hello  Rasheedat, Congratulations on enrolling  for one of our courses, we hope to see you
                                                become a star player in that field. Enjoy your day. '
                        notificationDate='8th May, 2023'
                    />
                </div>

            </div>
        </>
    )
}