<template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
      <h1>Création de todolist :</h1>
      <input v-model="name" placeholder="Ma todolist" />
      <button @click="send" class="blue">Valider</button>
      <button @click="togglePopup()" class="red">Quitter</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CreateListPopup",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions("todolist", ["createTodoList"]),
    send() {
      if (this.name.length != 0) {
        this.createTodoList(this.name).then((result) => {
          this.setList(result.data);
        });
        this.togglePopup();
      }
    },
  },
  props: {
    togglePopup: {type: Function},
    setList: {type: Function},
  },
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
