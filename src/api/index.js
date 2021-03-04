import axios from 'axios';

const API_SERVER_IP = "138.68.74.39";
axios.defaults.baseURL = `http://${API_SERVER_IP}`;

export const authTokenConfig = () => {
    const token = getToken();
    if(token == null || token === ""){
        return {};
    }
    return {'headers': {'Authorization': `Bearer ${token}`}};
}

export const getToken = () => {
    return sessionStorage.getItem('token');
}

export const setToken = (token) => {
    sessionStorage.setItem('token', token);
}

export default axios;
