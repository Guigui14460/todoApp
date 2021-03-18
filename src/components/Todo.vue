<template>
  <div v-bind:class="{completed}" style="display: flex; align-items: center;">
    <input type="checkbox" v-model="completed" @change="emitControler(completed)" />
    <span v-if="!isChanging" @click="isChanging = true" >{{ todo.name }}</span>
    <div v-else style="display: flex; align-items: center;">
      <input v-model="currentName" />
      <fa icon="times-circle" type="fas" class="icon icon-2x delete" @click="cancel"></fa>
      <fa icon="edit" type="fas" class="icon icon-2x edit" @click="modify"></fa>
    </div>
    <fa icon="trash-alt" type="fas" class="icon icon-2x delete" @click="del"></fa>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Todo",
  props: {
    todo: { type: Object },
  },
  methods: {
    ...mapActions("todolist", ["toggleCompleteTodo", "modifyTodo", "deleteTodo"]),
    emitControler(state) {
      this.$emit("signalUpdateCount", state);
    },
    modify() {
      this.modifyTodo({
        id: this.todo.id,
        completed: Number(this.completed),
        name: this.currentName,
        todolist_id: this.todo.todolist_id,
      }).then(this.isChanging = false);
    },
    cancel() {
      this.isChanging = false;
      this.currentName = this.todo.name;
    },
    del() {
      this.deleteTodo({
        id: this.todo.id,
        todolist_id: this.todo.todolist_id,
      });
    },
  },
  watch: {
    completed(val) {
      this.toggleCompleteTodo({
        id: this.todo.id,
        completed: Number(val),
        name: this.name,
        todolist_id: this.todo.todolist_id,
      });
    },
  },
  data() {
    return {
      name: this.todo.name,
      completed: Boolean(this.todo.completed),
      isChanging: false,
      currentName: this.todo.name,
    };
  },
}
</script>

<style scoped>
@import './icons.css';

div {
    display: flex;
    align-items: flex-start;
}

div input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 15px 10px 15px 0;
}

.completed span {
    text-decoration: line-through;
    color: #999999;
}
</style>
