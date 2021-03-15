<template>
  <div v-if="todolist != null" class="center">
    <h2>{{ todolist.name }}</h2>
    <div class="todos-container" v-if="todolist.todos.length == 0">
      Aucun todo pour cette liste
    </div>
    <div class="todos-container" v-else>
      <todo v-for="todo in todolist.todos" :key="todo.id" :todo="todo" />
    </div>
    <div v-show="isAdding">
      <input type="text" v-model="newTodo" />
      <fa icon="plus" type="fas" class="icon add" @click="add()"></fa>
      <fa icon="times-circle" type="fas" class="icon delete" @click="cancel()"></fa>
    </div>
    <button class="blue" @click="isAdding = true">Ajouter un todo</button>
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
  },
};
</script>

<style scoped>
@import './buttons.css';
#check {
  padding: 10%;
}

.todos-container {
  margin: 10px 0;
}

.center {
  text-align: center;
}

.icon {
    width: 20px;
    height: 20px;
    margin: 0 5px;
    cursor: pointer;
}
.add {
    color: rgb(106, 108, 248);
}
.delete {
    color: red;
}
</style>
