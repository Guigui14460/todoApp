<template>
  <div class = "popup">
    <div class="popup-inner">
      <slot/>
    <h1>Création de todolist:</h1>
      <input v-model="name" placeholder="Ma todolist" />
      
      <input type="button" value="valider" @click="send"/>
      <input type="button" value="quitter" @click="TogglePopup()"/>
      <input v-for="i in nbOfTodo" :key="i" v-model="todo[i]" placeholder="Ma todolist" />

    </div>

      
      
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CreateListPopup',
  components: {
   
  },data(){
    return{
        name : '',
        nbOfTodo:0,
        todo : [],
        value : null
    }
  },
  methods: {

      send:function (){
          if(this.name.length!=0){
           console.log(this.name)
            this.createTodoList(this.name).then((result) => {
              console.log(result)
              console.log( this.$parent.$attrs)
              
              this.$router.back()
            })
              // for(let i =1 ; i < this.todo.length ; i++){
              //   console.log(this.todo[i])
              //   console.log(result.data.id)            
              //   this.createTodo(this.todo[i],false,result.data.id);
              // } 
            this.TogglePopup()
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
  },props : ['TogglePopup']

};
</script>

<style scoped>


.popup{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.9);

  display: flex;
  align-items: center;
  justify-content: center;

  
}

.popup-inner{
    background: black;
    padding: 32px;
}

</style>