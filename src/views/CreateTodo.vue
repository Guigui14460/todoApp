<template>
  <div>
      <h1>Création de todolist:</h1>
      <input v-model="name" placeholder="Ma todolist" />
      <input type="button" value="valider" @click="send">
      <input type="button" value="add todo" @click="add">
      <input v-for="i in nbOfTodo" :key="i" v-model="todo[i]" placeholder="Ma todolist" />
      <input type="button" value="show" @click="show"/>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
   
  },data(){
    return{
        name : '',
        nbOfTodo:0,
        todo : []
    }
  },
  methods: {

      send:function (){
          if(this.name.length!=0){
            let a = this.createTodoList(this.name);
            console.log(a);
            // for(i in this.todo){
            //   this.createTodo(i,0,);
            // }



          }
      },

      add:function(){
        this.nbOfTodo++;
      },


      show:function(){
        console.log(this.todo)
      },
    
    ...mapActions("account", ["login", "logout", "getAccountData"]),
    ...mapActions("todolist", ["createTodoList"]),
    ...mapActions("todolist", ["createTodo"]),
  },
  computed: {
    ...mapGetters("account", ['getToken', 'getUserData', 'isLoggedIn']),
    ...mapGetters("todolist", ['getTodolistsData']),
  }

};
</script>

<style scoped>
div{
 
    text-align: center;
}

</style>