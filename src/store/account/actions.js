import axios from '../../api';

export function login({ commit }, data){
    axios.post("/api/login", data).then(response => {
        if(response.status == 200){
            commit('load', response.data);
        } else {
            commit('error', response.data);
        }
    }).catch(console.error);
}

export function signup({ commit }, data){
    axios.post("/api/register", data).then(response => {
        if(response.status == 200){
            commit('load', response.data);
        } else {
            commit('error', response.data);
        }
    }).catch(console.error);
}

export function logout({ commit }){
    commit('logout');
}
