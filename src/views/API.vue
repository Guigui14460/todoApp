<template>
  <h1>API view</h1>
  <button v-on:click="login({'email': 'toto@toto.com', 'password': 'totototo'})">Login</button>
  <div>{{ isLoggedIn }}</div>
  <div style="overflow-wrap: anywhere;">{{ getToken }}</div>
  <button v-on:click="getAccountData()">Get info</button>
  <div>{{ getUserData }}</div>
  <!-- <button v-on:click="logout()">Logout</button> -->
  <button v-on:click="getTodolists()">Get todolists</button>
  <div>{{ getTodolistsData }}</div>
  <div v-for="todolist in getTodolistsData" :key="todolist.id">
      <h2>{{ todolist.name }}</h2>
      <todo v-for="todo in todolist.todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Todo from '../components/Todo.vue';

export default {
    name: 'API',
    components: {
        Todo,
    },
    methods: {
        ...mapActions("account", ["login", "logout", "getAccountData"]),
        ...mapActions("todolist", ["getTodolists"]),
    },
    data(){
        return {
        };
    },
    computed: {
        ...mapGetters("account", ['getToken', 'getUserData', 'isLoggedIn']),
        ...mapGetters("todolist", ['getTodolistsData']),
    },
};
</script>

<style scoped>

</style>