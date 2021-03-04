<template>
    <nav>
        <!-- Ici il faut mettre les sidebaritems-->
        <sidebaritem></sidebaritem>
    </nav>
</template>


<script>
import Sidebaritem from "./sidebaritem"


export default {
  name: "SideBar",
  components: {
    Sidebaritem,
  }
};
</script>