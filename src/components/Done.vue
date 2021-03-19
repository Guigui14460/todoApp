<template>
  <p v-if="remains == 0"> | is Done !  </p>
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
