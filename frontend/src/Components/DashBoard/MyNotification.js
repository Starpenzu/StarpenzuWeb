import React, {useEffect, useState} from 'react';
import NavBar from '../Navbar/NavBar';
//import InprogressProps from './InprogressProps';
// import CompletedProps from './CompletedProps';
// import CertificateProps from './CertificateProps';
import NotificationProps from './NotificationProp';
import AxiosWithAuth from "../SignUp/AxiosWithAuth";
import axios from "axios";

export default function MyNotification (){
    const [message, setMessages] = useState(() => null);
    const [userEmail, setUserEmail] = useState(() => '' || localStorage.getItem('email_a'));

    // const originalDate = message.created_at;
    // const formattedDate = formatDate(originalDate);

    // const encodedEmail = encodeURIComponent(userEmail);
    localStorage.setItem('email_a', userEmail)
    const email = localStorage.getItem('email_a');


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await AxiosWithAuth.get('/user/me/', {

                });

                if (response.status === 200 || response.status === 201) {
                    // setUserInfo(response.data.name)
                    // setUserGender(response.data.gender)
                    // setNick(response.data.username)
                    // setDataBaseCourse(response.data.course)
                    setUserEmail(response.data.email)
                    console.log(response.data.email)
                    console.log(response.data.gender)
                }else {
                    console.log('ori e ti gbale')
                }


                // Access the user info from the response data


                // Further processing of the user info
                // ...
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);





    useEffect(() => {

        const fetchNotification = async () => {
            try {
                const response = await axios.get(`https://starpenzu.tech/api/user/users/${email}/messages/`, {
                    headers: {
                        Authorization: `Token ${localStorage.getItem('ent')}`

                    },
                });

                if (response.status === 200 || response.status === 201) {
                    setMessages(response.data)
                    console.log(response.data)
                }else {
                    console.log('ori e ti gbale')
                }


                // Access the user info from the response data


                // Further processing of the user info
                // ...
            } catch (error) {
                console.error(error);
            }
        };

        fetchNotification();
    }, []);


    // Reverse the order of the messages
    const reversedMessages = Array.isArray(message) ? [...message].reverse() : [];

    return (
        <>
            <NavBar/>

            <div className="dashcontainer">
                <div className="myProfile margine">
                    Notification
                </div>

                <div className="conterr">
                    {reversedMessages.map((item) => (
                        <NotificationProps key={item} notificationText={item.content} notificationDate={item.created_at}/>
                    ))}
                </div>

            </div>
        </>
    )
}