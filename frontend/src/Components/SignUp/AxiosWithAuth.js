import axios from 'axios';
import {decrypt} from '../Security'


const entToken = localStorage.getItem('ent');
const authorizationHeader = entToken ? `Token ${decrypt(entToken)}` : '';

const axiosWithAuth = axios.create({
    baseURL: 'https://starpenzu.tech/api/',
    headers: {
        Authorization: authorizationHeader
    }
});

export default axiosWithAuth;
