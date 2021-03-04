import { setToken } from "../../api";

export function load(state, data){
    state.token = data.token;
    setToken(data.token);
}

export function saveUserInfo(state, data) {
    state.info = data;
}

export function logout(state){
    setToken("");
    state.token = null;
    state.info = {};
}
