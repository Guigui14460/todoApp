import axios from '@/api';

export const createTodoList = ({ commit }, data) => {
    const name = data.name;
    let returnInformations = {"status": 0, "message": ""};
    return axios.post("todolist", {name}).then(response => {
        returnInformations["status"] = response.status;
        commit("addTodoList", response.data);
        returnInformations["data"] = response.data;
        return returnInformations;
    }).catch(e => {
        returnInformations["status"] = e.response.status;
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
    const id = data.id;
    let returnInformations = {"status": 0, "message": ""};
    return axios.delete("todolist/" + id).then(response => {
        returnInformations["status"] = response.status;
        commit("deleteTodoList", id);
        return returnInformations;
    }).catch(e => {
        returnInformations["status"] = e.response.status;
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
    let returnInformations = {"status": 0, "message": ""};
    return axios.get("todos/" + todolist_id).then(response => {
        returnInformations["status"] = response.status;
        commit("setTodos", todolist_id, response.data);
        return returnInformations;
    }).catch(e => {
        returnInformations["status"] = e.response.status;
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
    const name = data.name;
    let returnInformations = {"status": 0, "message": ""};
    return axios.patch("todo/" + id, {name}).then(response => {
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
