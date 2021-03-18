<template @todosLeft="logTest">
  <div @click="setColor" >{{ item.name }} </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props:{
    item: { type: Object },
    
    data(){
      return{Todos: 0}
    }
  
  },methods:{
    setColor:function(){
      console.log("fsdfsdfsd");
    },
    logTest(variable){
      console.log("Received",variable)
    },    
  }
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
}

div:last-of-type{
  border-bottom: 1px solid rgb(65, 58, 58);
}


div:hover{
  background-color: #241f1f;
}
</style>
