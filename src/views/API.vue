<template>
  <h1>API view</h1>
  <button v-on:click="login({'email': 'toto@toto.com', 'password': 'totototo'})">Login</button>
  <div>{{ getToken }}</div>
  <button v-on:click="getInfo()">Get info</button>
  <div>{{ info }}</div>
  <button v-on:click="getTodolists()">Get todolists</button>
  <div>{{ getTodolistsData }}</div>
  <button v-on:click="logout()">Logout</button>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
    name: 'API',
    methods: {
        ...mapActions("account", ["login", "logout"]),
        ...mapActions("todolist", ["getTodolists"]),
        getInfo(){
            this.info = "";
            this.getUser(res => this.info = res);
        },
    },
    data(){
        return {
            info: "",
        };
    },
    computed: {
        ...mapGetters("account", ['getUser', 'getToken', 'isLoggedIn', 'getUserData']),
        ...mapGetters("todolist", ['getTodolistsData']),
    },
});
</script>

<style scoped>

</style>