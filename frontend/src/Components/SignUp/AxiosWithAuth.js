import axios from 'axios';



const axiosWithAuth = axios.create({
    baseURL: 'http://ec2-18-194-84-190.eu-central-1.compute.amazonaws.com/api/',
    headers: {
        Authorization: `Token ${localStorage.getItem('ent')}`

    },
});

export default axiosWithAuth;