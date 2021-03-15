import axios from '@/api';

export const createTodoList = ({ commit }, name) => {
    console.log(name);
    let returnInformations = {"status": 0, "message": ""};
    return axios.post("todolist", {name}).then(response => {
        returnInformations["status"] = response.status;
        console.log("response");
        commit("addTodoList", response.data);
        console.log(response.data);
        returnInformations["data"] = response.data;
        return returnInformations;
    }).catch(e => {
        returnInformations["status"] = e.response.status;
        // TODO: à faire en fonction des statuts possibles
        returnInformations["message"] = "Un problème est survenu avec le serveur. Veuillez réessayer ultérieurement";
        return returnInformations;
    });
}

export const getTodolists = ({ commit }) => {
    let returnInformations = {"status": 0, "message": ""};
    return axios.get("todolists").then(response => {
        returnInformations["status"] = response.status;
        commit('setTodoLists', response.data);
        return returnInformations;
    }).catch(e => {
        returnInformations["status"] = e.response.status;
        returnInformations["message"] = "Un problème est survenu avec le serveur. Veuillez réessayer ultérieurement";
        return returnInformations;
    });
}

export const deleteTodoList = ({ commit }, data) => {
    console.log(data);
    const id = data.id;
    const name = data.name;
    let returnInformations = {"status": 0, "message": ""};
    return axios.delete("todo/" + id, {name}).then(response => {
        returnInformations["status"] = response.status;
        console.log("response");
        commit("deleteTodo", {id});
        console.log(response.data);
        return returnInformations;
    }).catch(e => {
        returnInformations["status"] = e.response.status;
        // TODO: à faire en fonction des statuts possibles
        returnInformations["message"] = "Un problème est survenu avec le serveur. Veuillez réessayer ultérieurement";
        return returnInformations;
    });
}

export const createTodo = ({ commit }, data) => {
    const name = data.name;
    const completed = data.completed;
    const todolist_id = data.todolist_id;
    let returnInformations = {"status": 0, "message": ""};
    return axios.post("todo", {name, completed, todolist_id}).then(response => {
        returnInformations["status"] = response.status;
        commit("addTodo", response.data);
        return returnInformations;
    }).catch(e => {
        returnInformations["status"] = e.response.status;
        returnInformations["message"] = "Un problème est survenu avec le serveur. Veuillez réessayer ultérieurement";
        return returnInformations;
    });
}

export const getTodosFromTodoListId = ({ commit }, todolist_id) => {
    console.log(todolist_id);
    let returnInformations = {"status": 0, "message": ""};
    return axios.get("todos", {todolist_id}).then(response => {
        returnInformations["status"] = response.status;
        console.log("response");
        commit("setTodos", todolist_id, response.data);
        console.log(response.data);
        return returnInformations;
    }).catch(e => {
        returnInformations["status"] = e.response.status;
        // TODO: à faire en fonction des statuts possibles
        returnInformations["message"] = "Un problème est survenu avec le serveur. Veuillez réessayer ultérieurement";
        return returnInformations;
    });
}

export const toggleCompleteTodo = ({ commit }, data) => {
    const id = data.id;
    const name = data.name;
    const completed = data.completed;
    const todolist_id = data.todolist_id;
    let returnInformations = {"status": 0, "message": ""};
    return axios.post("completeTodo/" + id, {completed, name, todolist_id}).then(response => {
        returnInformations["status"] = response.status;
        commit("toggleCompleteTodo", response.data);
        return returnInformations;
    }).catch(e => {
        returnInformations["status"] = e.response.status;
        returnInformations["message"] = "Un problème est survenu avec le serveur. Veuillez réessayer ultérieurement";
        return returnInformations;
    });
}

export const modifyTodo = ({ commit }, data) => {
    const id = data.id;
    const completed = data.completed;
    const name = data.name;
    const todolist_id = data.todolist_id;
    let returnInformations = {"status": 0, "message": ""};
    return axios.patch("todo/" + id, {completed, name, todolist_id}).then(response => {
        returnInformations["status"] = response.status;
        commit("modifyTodo", response.data);
        return returnInformations;
    }).catch(e => {
        returnInformations["status"] = e.response.status;
        returnInformations["message"] = "Un problème est survenu avec le serveur. Veuillez réessayer ultérieurement";
        return returnInformations;
    });
}

export const deleteTodo = ({ commit }, data) => {
    const id = data.id;
    const todolist_id = data.todolist_id;
    let returnInformations = {"status": 0, "message": ""};
    return axios.delete("todo/" + id).then(response => {
        returnInformations["status"] = response.status;
        commit("deleteTodo", {id, todolist_id});
        return returnInformations;
    }).catch(e => {
        returnInformations["status"] = e.response.status;
        returnInformations["message"] = "Un problème est survenu avec le serveur. Veuillez réessayer ultérieurement";
        return returnInformations;
    });
}
