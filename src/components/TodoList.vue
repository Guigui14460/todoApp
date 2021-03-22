<template>
  <div v-if="todolist != null" class="center">
    <h2>{{ todolist.name }} <fa icon="trash-alt" class="icon icon-3x delete" @click="deletet" /></h2>
    <div class="todos-container" v-if="todolist.todos.length == 0">
      Aucun todo pour cette liste
    </div>
    <div class="todos-container" v-else>
      <div id="filtration">
        <span style="margin-right: 20px;">Filtration :</span>
        <button :class="{active: filter == 'all'}" @click="changeFilter('all')">Tout</button>
        <fa icon="check" class="icon icon-2x" :class="{active: filter == 'completed'}" @click="changeFilter('completed')">Complétés</fa>
        <fa icon="times" class="icon icon-2x" :class="{active: filter == 'notCompleted'}" @click="changeFilter('notCompleted')">Non complétés</fa>
      </div>
      <todo v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
    <div v-show="isAdding" id="new-todo">
      <input type="text" v-model="newTodo" />
      <fa icon="plus" class="icon icon-2x add" @click="add"></fa>
      <fa icon="times-circle" class="icon icon-2x delete" @click="cancel"></fa>
    </div>
    <button v-if="!isAdding" class="blue" style="margin-top: 15px;" @click="isAdding = true">Ajouter un tout doux</button>
  </div>
</template>

<script>
import Todo from './Todo';
import { mapActions } from 'vuex';

export default {
  name: "TodoList",
  components: {
    Todo,
  },
  props: {
    todolist: { type: Object },
    setList: { type: Function },
  },
  data() {
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
    todos() {
      if(this.filter == "all"){
        return this.todolist.todos;
      }
      if(this.filter == "completed"){
        return this.todolist.todos.filter(todo => todo.completed);
      }
      return this.todolist.todos.filter(todo => !todo.completed);
    },
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
  margin: 3rem 0;
}

#filtration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
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

.active {
  background-color: #aaaaaa;
}
.active.icon {
  background-color: transparent;
  color: #aaaaaa;
}

@media screen and (max-width: 500px) {
  #filtration {
    font-size: 0.9em;
  }
  #filtration button {
    font-size: 0.9em;
    padding: 5px 11px;
  }
  #filtration .icon {
    width: 1em;
    height: 1em;
  }
  .icon-3x {
    width: 25px;
    height: 25px;
  }
}
</style>
