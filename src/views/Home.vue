<template>
  <div id="root">
    <sidebar :setList="setList" />
    <main>
      <div v-if="list == null">
        <h1>Tout doux listes</h1>
        <p>Veuillez sélectionner une tout doux liste pour l'afficher ici</p>
      </div>
      <todo-list :todolist="list" :setList="setList" v-else />
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

p {
  text-align: center;
}

@media screen and (max-width: 768px){
  #root {
    display: block;
  }

  main {
    padding: 30px 5rem;
  }
}

@media screen and (max-width: 500px){
  main {
    padding: 20px 2rem;
  }
}
</style>