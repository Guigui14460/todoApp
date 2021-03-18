<template>
  <div id="bar">
    <fa id="icon" icon="plus" @click="() => TogglePopup('buttonTrigger')"></fa>
    <CreateListPopup v-if="popupTriggers.buttonTrigger" :TogglePopup ="()=>TogglePopup('buttonTrigger')" /> 
    <sidebar-item v-for="todolist in allTodoList" :key="todolist.id" :item="todolist" @click="method(todolist)"/>
    
    
      


    <!-- <router-link  :to="{name: 'create'}" icon="plus"><fa icon="plus"></fa></router-link>   -->
  </div>
</template>


<script>
import SidebarItem from "./SidebarItem";
import { mapActions, mapGetters } from 'vuex';
import CreateListPopup from './CreateListPopup';
import { ref } from 'vue';
export default { 
  name: "Sidebar",
  components: {
    SidebarItem,
    CreateListPopup
  },
  methods: {
    ...mapActions("account", ["login", "logout", "getAccountData"]),
    ...mapActions("todolist", ["getTodolists"]),
  },
  data(){
    return {
      list: null,
    };
  },
  computed: {
    ...mapGetters("account", ['getToken', 'getUserData', 'isLoggedIn']),
    ...mapGetters("todolist", ['getTodolistsData']),
  },
  props: {
    allTodoList: {type: Object},
    method : {type : Function}
  },
  mounted(){
    this.method();
  },setup(){
    const popupTriggers = ref({
      buttonTrigger : false,
      timedTrigger : false,
    })

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] =! popupTriggers.value[trigger]
    }
    return {
      CreateListPopup,
      popupTriggers,
      TogglePopup
    }
  }
};
</script>

<style scoped>
#bar {
background-color: #c53737;
  margin: 0;
}

#icon{
  width: 45px;
  height: 45px;
  padding-left: 75px;
  padding-right: 80px;
  margin-bottom: -4px;
  margin-top: 20px;
  border-top: 1px solid rgb(65, 58, 58);
  /* border-bottom: 1px solid rgb(65, 58, 58); */
  
}

#icon:hover{
  /* opacity: 0.8; */
  background-color: #241f1f;
}
</style>
