<template>
  <div id="root">
    <sidebar />
    <main>
      <h1>Todolist</h1>
      <todo-list />
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar"
import TodoList from "@/components/TodoList"

export default {
  name: 'Home',
  components: {
    TodoList,
    Sidebar,
  },
};
</script>

<style scoped>
#root {
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: calc(100vh - 55px);
}
</style>