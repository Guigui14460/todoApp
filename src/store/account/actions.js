import axios from 'axios';
import endpointCalculator from '@/api';

export function login({ commit }, data){
    axios.post(endpointCalculator("/api/login"), data).then(response => {
        if(response.status == 200){
            commit('load', response.data);
        } else {
            commit('error', response.data);
        }
    }).catch(function(error){
        console.error(error)
    });
}

// export function signup({ commit }, data){
// }