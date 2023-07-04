import axios from 'axios';



const axiosWithAuth = axios.create({
    baseURL: 'http://ec2-18-198-55-166.eu-central-1.compute.amazonaws.com/api/',
    headers: {
        Authorization: `Token ${localStorage.getItem('ent')}`

    },
});

export default axiosWithAuth;