<template>
  <div class="container">
    <add-new-todo></add-new-todo>
    <ul>
      <li class="todo-item card w-100 mt-3"
          v-for="todo in allTodos" :key="todo.id">
          <h5 class="card-header w-100">
              {{todo.title}} 
            <button
                @click.stop="removeTodo(todo.id)"
                type="button"
                aria-label="Delete"
                title="Delete"
                class="btn-picto float-right"
              >
              <i class="fa fa-trash-alt" aria-hidden="true"></i>
            </button>
            <button
                type="checkbox"
                class="btn-picto float-right"
              >
                <input type="checkbox" class="btn-picto" />
                <i
                  aria-hidden="true"
                  class="material-icons"
                >{{ todo.completed ? 'check_box' : 'check_box_outline_blank' }}</i>
              </button>
          </h5>
          <div class="card-body mr-auto w-100">
              <div class="row">
                <div class="col-md-8">
                  <h6>{{todo.description}}</h6>
                </div>
                <div class="col-md-4 ml-auto todo-priority text-right">
                  <div class="priority-dot" :style="{background: todo.priorityColor}"></div>
                    <span>{{todo.priority }} Priority</span>
                  </div>
              </div>
          </div>
      </li>
    </ul>
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
.btn-picto {
  border: none;
  background: none;
  -webkit-appearance: none;
  cursor: pointer;
  color: blue;
}

.priority-dot {
  display: inline-block;
  height: 10px;
  width: 10px;
  background: #333;
  border-radius: 50%;
  margin-right: 10px;
}

</style>