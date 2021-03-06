<template>
  <h1>Todolist</h1>
  <todo-list />
</template>

<script>
import TodoList from "@/components/TodoList"

export default {
    name: 'Home',
    components: {
      TodoList,
    },
};
</script>

<style scoped>

</style>