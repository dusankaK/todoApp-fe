<template>
  <div class="container">
    <add-new-todo></add-new-todo>
    <h2 class="text-center mt-4">My Todos</h2>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        <p>{{todo.title}}</p>
        <button v-on:click="removeTodo(todo.id)">delete</button>
      </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddNewTodo from '../components/AddNewTodo';
export default {
  name: 'Todos',
  computed:{
    ...mapGetters({
      allTodos: 'allTodos'
    })
  },
  methods: {
    ...mapActions({
      fetchTodos: 'fetchTodos',
      deleteTodo: 'deleteTodo',
      addTodo: 'addTodo'
    }),
    removeTodo(id){
      this.deleteTodo(id);
    }
  },
  created() {
    this.fetchTodos();
  },
  components: {
    AddNewTodo
  }

}
</script>
<style>
  .todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #7b998b;
  padding: 1rem;
  border-radius: 3px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

</style>