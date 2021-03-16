<template>
  <div>
    <sidebar-item v-for="todolist in allTodoList" :key="todolist.id" :item="todolist" @click="method(todolist)"/>
    <fa icon="plus" @click="() => TogglePopup('buttonTrigger')"></fa>
    <CreateListPopup v-if="popupTriggers.buttonTrigger" :TogglePopup ="()=>TogglePopup('buttonTrigger')" /> 
      


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
div {
  background-color: #ac5c5c;
  margin: 0;
}
</style>
