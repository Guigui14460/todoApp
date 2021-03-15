<template>
<div>
  <button >{{item.name}}</button>
</div>
   
</template>


<script>
export default {
  name: "SidebarItem",
  props:{
    item:{type: Object},
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


</style>
