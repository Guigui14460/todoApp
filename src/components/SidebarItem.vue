<template>
  <div>
    {{ item.name }}
    <done :item="item" />
  </div>
</template>

<script>
import Done from './Done.vue';

export default {
  name: "SidebarItem",
  components: {
    Done,
  },
  props: {
    item: { type: Object },
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  background-color: #af2222;
  padding: 10px;
  cursor: pointer;
  border-top: 1px solid rgb(65, 58, 58);
  justify-content: space-between;
}
div:last-of-type{
  border-bottom: 1px solid rgb(65, 58, 58);
}
div:hover{
  background-color: #ce1f1f;
}
</style>
