<template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
      <h1>Création de todolist:</h1>
      <input v-model="name" placeholder="Ma todolist" />
      <input type="button" value="valider" @click="send" />
      <input type="button" value="quitter" @click="TogglePopup()" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CreateListPopup",
  components: {},
  data() {
    return {
      name: "",
    };
  },
  methods: {
    send: function () {
      if (this.name.length != 0) {
        console.log(this.name);
        this.createTodoList(this.name).then((result) => {
          console.log(result);
          console.log(this.$parent.$attrs);
        });

        this.TogglePopup();
      }
    },

    ...mapActions("account", ["login", "logout", "getAccountData"]),
    ...mapActions("todolist", ["createTodoList"]),
  },
  computed: {
    ...mapGetters("account", ["getToken", "getUserData", "isLoggedIn"]),
    ...mapGetters("todolist", ["getTodolistsData"]),
  },
  props: ["TogglePopup"],
};
</script>

<style scoped>


.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-inner {
  background: rgb(170, 57, 57);
  padding: 1.5em;
  border-radius: 1em;
   display: grid;
    grid-template-rows: 1fr;
}

input {
  margin-right: 2%;
}


</style>