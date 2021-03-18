<template>
  <div id="bar">
    <sidebar-item v-for="todolist in getTodolistsData" :key="todolist.id" :item="todolist" @click="setList(todolist.id)"/>
    <fa id="icon" icon="plus" @click="() => TogglePopup('buttonTrigger')"></fa>
    <CreateListPopup v-if="popupTriggers.buttonTrigger" :TogglePopup ="()=>TogglePopup('buttonTrigger')" :setList="setList"/>


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
    ...mapActions("account", ["getAccountData"]),
  },
  data() {
    return {
      list: null,
    };
  },
  computed: {
    ...mapGetters("account", ['getToken', 'getUserData', 'isLoggedIn']),
    ...mapGetters("todolist", ['getTodolistsData']),
  },
  props: {
    setList : {type : Function}
  },
  mounted() {
    this.setList();
  },
  setup() {
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
  width: 10%;
  height: 10%;
  margin-left: 10%;

}

#icon:hover{
  opacity: 0.8;
}
</style>
