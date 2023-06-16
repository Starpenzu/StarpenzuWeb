import React from 'react';
import './NotificatioProps.css';


export default function NotificationProps (props){
    return(
        <>
            <div className="notiContainer">
                <div className="notiText">
                    {props.notificationText}
                </div>

                <div className="notiDate">
                    {props.notificationDate}
                </div>
            </div>
        </>
    )
}