import axios from 'axios';



const axiosWithAuth = axios.create({
    baseURL: 'https://starpenzu.tech/api/',
    headers: {
        Authorization: `Token ${localStorage.getItem('ent')}`

    },
});

export default axiosWithAuth;