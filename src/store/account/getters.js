import axios, { authTokenConfig } from '../../api';

export const getToken = (state) => {
    return state.token;
}

export const isLoggedIn = (state) => {
    return state.token != null;
}

export const getUserData = (state) => state.info;

export const getUser = (state) => (callback) => {
    return axios.get("/api/user", authTokenConfig()).then((response) => {
        state.info = response.data;
        callback(response.data);
    }).catch(console.error);
}
