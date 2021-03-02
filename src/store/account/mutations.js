export function load(state, data){
    state.token = data.token;
}

export function error(state, data){
    console.error(data.error);
}
