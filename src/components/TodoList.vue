<template>
  <div v-if="todolist != null">
    <h2>{{todolist.name}}</h2>
 
    <todo v-for="todo in todolist.todos" :key="todo.id" :todo="todo" />
  </div>

</template>


<script>

import Todo from './Todo'


export default {
  name: "TodoList",
  components: {
    Todo,
  },
  props: {
    todolist: {type: Object},
  },methods:{
    show:function(){
      console.log(this.todolist)
    }
  },mounted(){
    // this.show
  }
 
};
</script>

<style scoped>
#check {
  padding: 10%;
}
</style>
