<template>
  <div v-if="todolist != null">
    <h2>{{todolist.name}}</h2>
    <p>{{todolist.todos}}</p>
    <p v-for="todo in todolist.todos" :key="todo.id">{{todo}}</p>
    <todo v-for="todo in todolist.todos" :key="todo.id" :todo="todo" />
  </div>

</template>


<script>

import Todo from './Todo';


export default {
  name: "TodoList",
  computed: {
    Todo
  },
  props: {
    todolist: {type: Object},
  }
 
};
</script>

<style scoped>
#check {
  padding: 10%;
}
</style>
