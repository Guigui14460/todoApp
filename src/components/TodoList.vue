<template>
  <div v-if="todolist != null" class="center">
    <h2>{{ todolist.name }}<fa icon="trash-alt" class="icon icon-3x delete" @click="deletet" /></h2>
    
    <div>{{getRemainingTodosByTodolistId(todolist.id)}}_{{ remains }}</div>
    <div class="todos-container" v-if="todolist.todos.length == 0">
      Aucun todo pour cette liste
    </div>
    <div class="todos-container" v-else>
      <div id="filtration">
        <span style="margin-right: 20px;">Filtration :</span>
        <button @click="changeFilter('all')">Tout</button>
        <fa icon="check" class="icon icon-2x" @click="changeFilter('completed')">Complétés</fa>
        <fa icon="times" class="icon icon-2x" @click="changeFilter('notCompleted')">Non complétés</fa>
      </div>
      <todo v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
    <div v-show="isAdding" id="new-todo">
      <input type="text" v-model="newTodo" />
      <fa icon="plus" class="icon icon-2x add" @click="add"></fa>
      <fa icon="times-circle" class="icon icon-2x delete" @click="cancel"></fa>
    </div>
    <button v-if="!isAdding" class="blue" style="margin-top: 15px;" @click="isAdding = true">Ajouter un todo</button>
  </div>
</template>

<script>
import Todo from './Todo';
import { mapActions,mapGetters } from 'vuex';

export default {
  name: "TodoList",
  components: {
    Todo,
  },
  props: {
    todolist: {type: Object},
    setList: {type: Function},
  },
  data(){
    return {
      isAdding: false,
      newTodo: "",
      currentName: "",
      filter: 'all',
    };
  },
  methods: {
    ...mapActions("todolist", ["createTodo", "deleteTodoList"]),
    
    
    add() {
      this.createTodo({
        name: this.newTodo,
        completed: false,
        todolist_id: this.todolist.id,
      }).then(this.cancel);
    },
    cancel() {
      this.isAdding = false;
      this.newTodo = "";
    },
    deletet() {
      this.deleteTodoList({id: this.todolist.id}).then(response => {
        if(response.status >= 200 && response.status < 400) {
          this.setList(null);
        }
      });
    },
    changeFilter(type) {
      this.filter = type;
    },
  },
  
  computed: {

   ...mapGetters("todolist",["getRemainingTodosByTodolistId"]),

    remains(){
      return this.getRemainingTodosByTodolistId(this.todolist.id)
    },
    todos() {
      if(this.filter == "all"){
        return this.todolist.todos;
      }
      if(this.filter == "completed"){
        return this.todolist.todos.filter(todo => todo.completed);
      }
      return this.todolist.todos.filter(todo => !todo.completed);
    }
  },
};
</script>

<style scoped>
@import './buttons.css';
@import './forms.css';
@import './icons.css';
h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#filtration {
  display: flex;
  align-items: center;
  justify-content: center;
}
#filtration .icon {
  margin: 0 10px;
}

#new-todo {
  display: flex;
  padding: 15px 0 0 0;
  justify-content: center;
  align-items: center;
}

.todos-container {
  margin: 20px 0 10px 0;
}

.center {
  text-align: center;
}
</style>
