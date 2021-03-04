<template>
  <h1>todolist</h1>
  <Sidebar></Sidebar>
  <todolist></todolist>
</template>

<script>
import { defineComponent } from "vue";
import todolist  from "../components/todolist"
import  Sidebar  from "../components/sidebar"

export default defineComponent({
    name: 'Home',
    components: {
      todolist,
      Sidebar
    },
});
</script>

<style scoped>



</style>