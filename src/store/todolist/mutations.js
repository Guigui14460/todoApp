export function addTodoList(state, data){
    state.todoLists.push(data);
}

export function setTodoLists(state, data){
    state.todoLists = data;
}

export function deleteTodoList(state, id){
    state.todoLists = state.todoLists.filter(todoList => todoList.id !== id);
}

export function setTodos(state, data){
    let todoList = state.todotodoLists.find(todoList => todoList.id === data.todolist_id);
    todoList.todos = data.todos;
}

export function addTodo(state, data){
    const todoList = state.todotodoLists.find(todoList => todoList.id === data.todolist_id);
    todoList.todos.push(data);
}

export function toggleCompleteTodo(state, data){
    const todoList = state.todoLists.find(todoList => todoList.id === data.todolist_id);
    const todo = todoList.todos.find(todo => todo.id === data.id);
    todo.completed = data.completed;
}

export function modifyTodo(state, data){
    const todoList = state.todoLists.find(todoList => todoList.id === data.todolist_id);
    const todo = todoList.todos.find(todo => todo.id === data.id);
    todo.completed = data.completed;
    todo.name = data.name;
    todo.todolist_id = data.todolist_id;
}

export function deleteTodo(state, data){
    const todoList = state.todoLists.find(todoList => todoList.id === data.todolist_id);
    todoList.todos = todoList.todos.filter(todo => todo.id !== data.id);
}
