<template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
      <h1>Création de tout doux liste :</h1>
      <input v-model="name" placeholder="Liste de course du ..." />
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
        this.createTodoList({name: this.name}).then((result) => {
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
h1 {
  font-size: 1.75em;
  margin: 10px 0 1em 0;
}

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

button:first-of-type {
  margin: 1em 0;
}
</style>
