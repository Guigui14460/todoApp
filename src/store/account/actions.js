import axios from '@/api';
import router from '@/router';

export function login({ commit }, data){
    const email = data.email;
    const password = data.password;
    let returnInformations = {"status": 0, "message": ""};
    return axios.post("login", {email, password}).then(response => {
        returnInformations["status"] = response.status;
        if(response.status == 200){
            commit('setToken', response.data);
            router.push("/");
            return returnInformations;
        }
        returnInformations["message"] = "";
        return returnInformations;
    }).catch(e => {
        returnInformations["status"] = e.response.status;
        if(e.response.status === 401){
            returnInformations["message"] = "Adresse email ou mot de passe incorrect";
            return returnInformations;
        }
        returnInformations["message"] = "Problème avec le serveur. Veuillez réessayer ultérieurement";
        return returnInformations;
    });
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
    let returnInformations = {"status": 0, "message": ""};
    axios.post("register", {name, email, password}).then(response => {
        returnInformations["status"] = response.status;
        if(response.status == 200){
            commit('setToken', response.data);
            commit('setAccountData', {name, email});
            router.push("/");
            return returnInformations;
        }
        returnInformations["message"] = "";
        return returnInformations;
    }).catch(e => {
        returnInformations["status"] = e.response.status;
        if(e.response.status === 409){
            returnInformations["message"] = "Adresse email déjà utilisée";
            return returnInformations;
        }
        returnInformations["message"] = "Problème avec le serveur. Veuillez réessayer ultérieurement";
        return returnInformations;
    });
}

export function logout({ commit }){
    commit('logout');
}
