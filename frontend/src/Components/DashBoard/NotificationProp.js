import React from 'react';
import './NotificatioProps.css';

function formatDate(dateTimeString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const date = new Date(dateTimeString);
    const formattedDateTime = date.toLocaleDateString('en-US', options);

    const day = date.getDate();
    const suffix = getNumberSuffix(day);

    return `${day}${suffix} ${formattedDateTime}`;
}

function getNumberSuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }

    switch (day % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}


export default function NotificationProps (props){
    const formattedDate = formatDate(props.notificationDate)
    return(
        <>
            <div className="notiContainer">
                <div className="notiText">
                    {props.notificationText}
                </div>

                <div className="notiDate">
                    {formattedDate}
                </div>
            </div>
        </>
    )
}