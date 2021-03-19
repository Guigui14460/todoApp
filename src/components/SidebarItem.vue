<template>
  <div @click="setColor" >{{ item.name }} <done :item="item"/> </div>
  
</template>

<script>
import Done from './Done.vue';
export default {
  name: "SidebarItem",
  components:{
    Done,
  },

  props:{
    item: { type: Object },
    data(){
      return{Todos: 0}
    }
  
  },methods:{
    setColor:function(){
      console.log("fsdfsdfsd");
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

done{
  float: right;

}

</style>
