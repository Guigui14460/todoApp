<template>
    <nav>
      <!-- Ici il faut mettre les sidebaritems-->
      <sidebar-item />
      <aside></aside>
    </nav>
</template>


<script>
import SidebarItem from "./SidebarItem"

export default {
  name: "Sidebar",
  components: {
    SidebarItem,
  },
};
</script>

<style scoped>
nav {
  background-color: #202020;
  margin: 0;
}
</style>