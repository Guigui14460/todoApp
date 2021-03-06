export const getTodolistsData = (state) => {
    return state.todoLists;
}

export const getTodolistById = (state) => (id) => state.todoLists.find(list => list.id === id);

export const getRemainingTodosByTodolistId = (state) => (id) => {
    if(state.todoLists.length == 0){
        return 0;
    }
    let list = state.todoLists.find(list => list.id === id);
    if(list){
        return 100;
    }
    return 0
}

export const remainingTodos = (state) => {
    let number = 0;
    state.todoLists.forEach(list => {
        number += list.todos.filter(todo => !todo.completed).length;
    });
    return number;
}
