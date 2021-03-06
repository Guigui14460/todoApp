import axios from '@/api';
import router from '@/router';

export function login({ commit }, data){
    const email = data.email;
    const password = data.password;
    axios.post("login", {email, password}).then(response => {
        if(response.status == 200){
            commit('setToken', response.data);
            router.push("/");
        }
    }).catch(console.error);
}

export function getAccountData({ commit }){
    axios.get("user").then(response => {
        if(response.status == 200){
            const name = response.data.name;
            const email = response.data.email;
            commit('setAccountData', {name, email});
        }
    }).catch(console.error);
}

export function signup({ commit }, data){
    const name = data.name;
    const email = data.email;
    const password = data.password;
    axios.post("register", {name, email, password}).then(response => {
        if(response.status == 200){
            commit('setToken', response.data);
            commit('setAccountData', {name, email});
            router.push("/");
        }
    }).catch(console.error);
}

export function logout({ commit }){
    commit('logout');
}
