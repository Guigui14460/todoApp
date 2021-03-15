<template>
    <div v-bind:class="{completed}">
        <input type="checkbox" v-model="completed" />
        
        <span v-if="!isChanging" @click="isChanging = true">{{ todo.name }}</span>
        <div v-else>
            <input v-model="currentName" />
            <fa icon="times-circle" type="fas" class="icon delete" @click="cancel()"></fa>
            <fa icon="edit" type="fas" class="icon edit" @click="modify()"></fa>
        </div>
        <fa icon="trash-alt" type="fas" class="icon delete"></fa>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "Todo",
    methods: {

        show:function() {
            console.log(this.todo);
        },
        modify() {
            this.modifyTodo({
                id: this.todo.id,
                completed: Number(this.completed),
                name: this.currentName,
                todolist_id: this.todo.todolist_id,
            }).then(this.isChanging = false);
        },
        cancel(){
            this.isChanging = false;
            this.currentName = this.todo.name;
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
            isChanging: false,
            currentName: this.todo.name,
        };
    },
    props: {
        todo: {type: Object},
    },mounted(){
        // this.show()
    },
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

.completed span {
    text-decoration: line-through;
    color: #999999;
}

.icon {
    width: 20px;
    height: 20px;
    margin: 0 5px;
    cursor: pointer;
}
.edit {
    color: rgb(106, 108, 248);
}
.delete {
    color: red;
}

</style>