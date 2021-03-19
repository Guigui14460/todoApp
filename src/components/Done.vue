<template>
  <p v-if="remains == 0"> is Done !  </p>
  <p v-if="remains > 0">{{remains}} left  </p>

</template>

<script>

import { mapGetters } from 'vuex';
export default {
  name: "Done",
  props:{
    item: {type: Object},
  },
  data(){return{}},
  methods:{},
  computed:{

    ...mapGetters("todolist",["getRemainingTodosByTodolistId"]),

    remains(){
      return this.getRemainingTodosByTodolistId(this.item.id)
    },


  }



};
</script>
<style scoped>
p{
  background-color: rgb(109, 105, 105);
  margin-left: 5px;
  border-radius: 5px;


}
</style>