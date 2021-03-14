<template>
  <div>
  
    
    <sidebar-item v-for="todolist in allTodoList" :key="todolist.id" :item="todolist" v-on:click="show(todolist)"/>
   
  </div>


</template>


<script>
import SidebarItem from "./SidebarItem";
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Sidebar",
  components: {
    SidebarItem,
  },
  methods: {

    show:function(todolist){
      this.method(todolist)
     
    },


    ...mapActions("account", ["login", "logout", "getAccountData"]),
    ...mapActions("todolist", ["getTodolists"]),
  },
  data(){
    return{
      list:null
    }
  },
  computed: {
    ...mapGetters("account", ['getToken', 'getUserData', 'isLoggedIn']),
    ...mapGetters("todolist", ['getTodolistsData']),
  },props: {
    allTodoList: {type: Object},
    method : {type : Function}
  },mounted(){
    this.method();
  }
};
</script>

<style scoped>
div {
  background-color: #ac5c5c;
  margin: 0;
}



</style>
