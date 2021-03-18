<template>
  <div id="root">
    <sidebar :setList="setList" />
    <main>
      <h1>Tout doux listes</h1>
      <todo-list :todolist="list" :setList="setList" />
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import TodoList from "@/components/TodoList";
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    TodoList,
    Sidebar,
  },
  mounted() {
    this.getTodolists();
  },
  data() {
    return {
      list: null,
    };
  },
  methods: {
    ...mapActions("todolist", ["getTodolists"]),
    setList(todolist) {
      this.list = todolist;
    },
  },
};
</script>

<style scoped>
#root {
  display: grid;
  grid-template-columns: 200px auto;
  min-height: calc(100vh - 55px);
}
</style>