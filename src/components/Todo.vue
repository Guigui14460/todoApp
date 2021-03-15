<template>
    <div>
        <input type="checkbox" v-model="completed" /> {{ todo.name }}
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "Todo",
    methods: {

        show:function(){
            console.log(this.todo);
        },


        ...mapActions("todolist", ["toggleCompleteTodo", "modifyTodo"]),
    },
    watch: {
        completed: function(val) {
            this.toggleCompleteTodo({
                id: this.todo.id, 
                completed: Number(val), 
                name: this.name, 
                todolist_id: this.todo.todolist_id,
            });
        },
    },
    data() {
        return {
            name: this.todo.name,
            completed: Boolean(this.todo.completed),
        };
    },
    props: {
        todo: {type: Object},
    },mounted(){
        // this.show()
    }
}
</script>

<style scoped>
div {
    display: flex;
    align-items: flex-start;
}

div input[type="checkbox"] {
    margin-right: 10px;
}
</style>