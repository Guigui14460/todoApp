<template>
  <div v-if="todolist != null" class="center">
    <h2>{{ todolist.name }}</h2>
    <fa icon="trash-alt" class="icon icon-3x delete" @click="deletet" />
    <div class="todos-container" v-if="todolist.todos.length == 0">
      Aucun todo pour cette liste
    </div>
    <div class="todos-container" v-else>
      <todo v-for="todo in todolist.todos" :key="todo.id" :todo="todo" />
    </div>
    <div v-show="isAdding" class="new-todo">
      <input type="text" v-model="newTodo" />
      <fa icon="plus" class="icon icon-2x add" @click="add"></fa>
      <fa icon="times-circle" class="icon icon-2x delete" @click="cancel"></fa>
    </div>
    <button class="blue" style="margin-top: 15px;" @click="isAdding = true">Ajouter un todo</button>
  </div>
</template>


<script>
import Todo from './Todo';
import { mapActions } from 'vuex';

export default {
  name: "TodoList",
  components: {
    Todo,
  },
  props: {
    todolist: {type: Object},
  },
  data(){
    return {
      isAdding: false,
      newTodo: "",
      currentName: "",
    };
  },
  methods: {
    ...mapActions("todolist", ["createTodo"]),
    add(){
      this.createTodo({
        name: this.newTodo,
        completed: false,
        todolist_id: this.todolist.id,
      }).then(this.cancel)
    },
    cancel(){
      this.isAdding = false;
      this.newTodo = "";
    },
    deletet(){
      this.deleteTodoList({id: this.todolist.id});
    },
    ...mapActions("todolist", ["deleteTodoList"]),
  },
};
</script>

<style scoped>
@import './buttons.css';
@import './forms.css';
@import './icons.css';

#check {
  padding: 10%;
}

.todos-container {
  margin: 10px 0;
}

.center {
  text-align: center;
}

.new-todo {
  display: flex;
  padding: 15px 0 0 0;
  justify-content: center;
  align-items: center;
}
</style>
