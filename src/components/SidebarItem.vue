<template>
  <!-- <div class="sidebar-item">{{ item.name }}</div> -->
  <div><button>{{ item.name }}</button></div>
</template>

<script>
export default {
  name: "SidebarItem",
  props:{
    item: { type: Object },
  }
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
}

button {
  text-align: center;
  margin: 0;
  padding: 10%;
  width: 100%;
  color: white;
  border: none;
  background-color: rgb(134, 41, 41);
}

button:hover{
  background-color:  rgb(146, 72, 72);
  border: none;
  text-align: center;
  text-decoration: none;
}

/* .sidebar-item {
  text-align: left;
  padding: 15px 10px;
  color: white;
  background-color: rgb(134, 41, 41);
  cursor: pointer;
  margin: 2px 0;
  width: 80px;
  text-overflow: ellipsis;
}
.sidebar-item:not(:last-child){
  border-bottom: 1px solid white;
}
.sidebar-item:hover {
  background-color:  rgb(170, 65, 65);
} */
</style>
