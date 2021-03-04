<template>
  <h1>Todo list</h1>

  <todoList></todoList>
</template>

<script>
import { defineComponent } from "vue";
import { todoList } from "../components/TodoList.vue"
// import { Sidebar } from "../components/sidebar.vue"

export default defineComponent({
    name: 'Home',
    components: {
      todoList,
      
    },
});
</script>

<style scoped>



</style>