import axios from 'axios';



const axiosWithAuth = axios.create({
    baseURL: 'http://ec2-18-222-214-188.us-east-2.compute.amazonaws.com/api/',
    headers: {
        Authorization: `Token ${localStorage.getItem('ent')}`
    },
});

export default axiosWithAuth;