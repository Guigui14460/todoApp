<template>
  <div id="root">
    <sidebar :allTodoList="getTodolistsData" :method="setList"/>
    <main>
      <h1>Todolist</h1>
      <todo-list :todolist="list" />
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar"
import TodoList from "@/components/TodoList"
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    TodoList,
    Sidebar,
  },
  mounted(){
    this.getTodolists();
  },
  data(){
    return{
      list:null,
      
    }
  },
  methods: {
    
    affiche: function (){
      console.log(this.list)
    },

    setList:function (todolist){
      this.list = todolist;
     
    },

    ...mapActions("account", ["login", "logout", "getAccountData"]),
    ...mapActions("todolist", ["getTodolists"]),
  },
  computed: {
    ...mapGetters("account", ['getToken', 'getUserData', 'isLoggedIn']),
    ...mapGetters("todolist", ['getTodolistsData']),
  }

};
</script>

<style scoped>
#root {
  display: grid;
  grid-template-columns: 25% 75%;
  min-height: calc(100vh - 55px);
}

h1 {
  margin: 0;
  text-align: left;
}
</style>