import axios, { authTokenConfig } from '../../api';

export const getTodolists = ({ commit }) => {
    axios.get("/api/todolists", authTokenConfig()).then(response => {
        commit('loadLists', response.data);
    }).catch(console.error);
}
