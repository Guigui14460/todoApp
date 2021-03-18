<template>
  <aside>
    <div id="bar">
      <fa id="icon" icon="plus" @click="() => togglePopup('buttonTrigger')"></fa>
      <sidebar-item v-for="todolist in getTodolistsData" :key="todolist.id" :item="todolist" @click="setList(todolist)" />
      <CreateListPopup v-if="popupTriggers.buttonTrigger" :togglePopup ="()=>togglePopup('buttonTrigger')" :setList="setList" />
    </div>
    <fa id="displayMobileSidebar" :icon="mobileSidebarOpened ? 'arrow-left' : 'arrow-right'" @click="sidebarToggle"></fa>
  </aside>
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
    CreateListPopup,
  },
  methods: {
    ...mapActions("account", ["getAccountData"]),
    sidebarToggle() {
      this.mobileSidebarOpened = !this.mobileSidebarOpened;
      document.getElementById("bar").classList.toggle("opened");
    },
  },
  data() {
    return {
      list: null,
      mobileSidebarOpened: false,
    };
  },
  computed: {
    ...mapGetters("account", ['getUserData', 'isLoggedIn']),
    ...mapGetters("todolist", ['getTodolistsData']),
  },
  props: {
    setList : {type : Function}
  },
  setup() {
    const popupTriggers = ref({
      buttonTrigger : false,
      timedTrigger : false,
    });
    const togglePopup = (trigger) => {
      popupTriggers.value[trigger] =! popupTriggers.value[trigger]
    };

    return {
      CreateListPopup,
      popupTriggers,
      togglePopup,
    };
  }
};
</script>

<style scoped>
#bar {
  background-color: #c53737;
  margin: 0;
  height: 100%;
}

#displayMobileSidebar {
  display: none;
  cursor: pointer;
  padding: 25px 10px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: black;
  transition: all 0.2s ease-in-out;
}
#displayMobileSidebar:hover {
  color: #cccccc;
  background-color: #111111;
}

@media screen and (max-width: 768px){
    #bar {
      display: none;
      width: 200px;
    }
    #bar.opened {
      display: block;
    }

    #displayMobileSidebar {
      display: block;
      position: absolute;
      height: 20px;
      width: 20px;
      top: 155px;
      left: 100%;
    }

    aside {
      position: fixed;
      display: flex;
      top: 55px;
      left: 0;
      height: 100%;
    }
}

#icon {
  width: 45px;
  height: 45px;
  padding-left: 75px;
  padding-right: 80px;
  margin-bottom: -4px;
  cursor: pointer;
  border-top: 1px solid rgb(65, 58, 58);
  
}
#icon:hover {
  background-color: #241f1f;
}
</style>
