import axios from '@/api';

export const createTodoList = ({ commit }, name) => {
    console.log(name);
    axios.post("todolist", {name}).then(response => {
        console.log("response");
        commit("addTodoList", response.data);
        console.log(response.data);
    }).catch(console.error);
}

export const getTodolists = ({ commit }) => {
    axios.get("todolists").then(response => {
        console.log("response");
        commit('setTodoLists', response.data);
        console.log(response.data);
    }).catch(console.error);
}

export const createTodo = ({ commit }, data) => {
    console.log(data);
    const name = data.name;
    const completed = data.completed;
    const todolist_id = data.todolist_id;
    axios.post("todo", {name, completed, todolist_id}).then(response => {
        console.log("response");
        commit("addTodo", response.data);
        console.log(response.data);
    }).catch(console.error);
}

export const getTodosFromTodoListId = ({ commit }, todolist_id) => {
    console.log(todolist_id);
    axios.get("todos", {todolist_id}).then(response => {
        console.log("response");
        commit("setTodos", todolist_id, response.data);
        console.log(response.data);
    }).catch(console.error);
}

export const toggleCompleteTodo = ({ commit }, data) => {
    console.log(data);
    const id = data.id;
    const name = data.name;
    const completed = data.completed;
    const todolist_id = data.todolist_id;
    axios.post("completeTodo/" + id, {completed, name, todolist_id}).then(response => {
        console.log("response");
        console.log(data);
        commit("toggleCompleteTodo", response.data);
        console.log(response.data);
    }).catch(console.error);
}

export const modifyTodo = ({ commit }, data) => {
    console.log(data);
    const id = data.id;
    const completed = data.completed;
    const name = data.name;
    const todolist_id = data.todolist_id;
    axios.patch("todo/" + id, {completed, name, todolist_id}).then(response => {
        console.log("response");
        commit("toggleCompleteTodo", response.data);
        console.log(response.data);
    }).catch(console.error);
}
