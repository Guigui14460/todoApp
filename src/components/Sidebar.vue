<template>
  <div id="bar">
    <fa id="icon" icon="plus" @click="() => TogglePopup('buttonTrigger')"></fa>
    <sidebar-item v-for="todolist in getTodolistsData" :key="todolist.id" :item="todolist" @click="setList(todolist)" />
    <CreateListPopup v-if="popupTriggers.buttonTrigger" :TogglePopup ="()=>TogglePopup('buttonTrigger')" :setList="setList" />
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

@media screen and (max-width: 768px){
    #bar {
      display: none;
    }
}

#icon{
  width: 45px;
  height: 45px;
  padding-left: 75px;
  padding-right: 80px;
  margin-bottom: -4px;
  border-top: 1px solid rgb(65, 58, 58);
  /* border-bottom: 1px solid rgb(65, 58, 58); */
  
}

#icon:hover{
  /* opacity: 0.8; */
  background-color: #241f1f;
}
</style>
