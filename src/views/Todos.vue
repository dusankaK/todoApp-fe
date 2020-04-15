<template>
  <div class="container">
    <add-new-todo v-if="!showUpdate"></add-new-todo>
    <update-todo :updatedTodo = "updatedTodo" v-else></update-todo>
    <ul>
      <li class="todo-item card w-100 mt-3"
          v-for="todo in allTodos" :key="todo.id"
          @click="handleUpdateForm(todo, $event)">
          <h5 class="card-header w-100" :class="{'is-complete':todo.completed}">
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
                @click.stop="onCheckBoxChecked(todo)"
                :title="todo.completed ? 'Undone' : 'Done'"
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
                  <h6 :class="{'is-complete':todo.completed}">{{todo.description}}</h6>
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
import UpdateTodo from '../components/UpdateTodo'

export default {
  name: 'Todos',
  data() {
    return {
      newTodo: {
        title: "",
        description: "",
        priority: "High"
      },
      updatedTodo: {
        title: "",
        description: "",
        priority: ""
      }
    }
  },
  computed:{
    ...mapGetters({
      allTodos: 'allTodos',
      showUpdate: 'showUpdate'
    })
  },
  methods: {
    ...mapActions({
      fetchTodos: 'fetchTodos',
      deleteTodo: 'deleteTodo',
      addTodo: 'addTodo',
      updateTodo: 'updateTodo',
      showUpdateForm: 'showUpdateForm',
      markComplete: 'markComplete'
    }),
    handleUpdateForm(todoItem) {
      this.updatedTodo.title = todoItem.title;
      this.updatedTodo.description = todoItem.description;
      this.updatedTodo.priority = todoItem.priority;
      this.updatedTodo.id = todoItem.id;
      this.showUpdateForm(true);
    },
    removeTodo(id){
      this.deleteTodo(id);
    },
    onCheckBoxChecked(todo){
      this.markComplete(todo)
    }
  },
  created() {
    this.fetchTodos();
  },
  components: {
    AddNewTodo,
    UpdateTodo
  }

}
</script>
<style>
.is-complete {
  text-decoration: line-through;
}
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

li.todo-item:hover {
  background-color: #f4f5f7;
  cursor: pointer;
}

</style>