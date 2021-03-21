<template>
  <span v-if="remains == 0">
    <fa icon="check" class="icon"></fa>
  </span>
  <span v-if="remains > 0">{{ remains }}</span>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Done",
  props: {
    item: { type: Object },
  },
  computed: {
    ...mapGetters("todolist", ["getRemainingTodosByTodolistId"]),
    remains(){
      return this.getRemainingTodosByTodolistId(this.item.id)
    },
  },
};
</script>

<style scoped>
span {
  display: inline-block;
  margin-left: 5px;
}

.icon {
  width: 15px;
  height: 15px;
}
</style>