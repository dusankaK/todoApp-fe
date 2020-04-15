import {todoService} from '../../services/TodoService.js'

const getPriorityColor = item => {
  if (item.priority === "High") item.priorityColor = "#f5365c";
  if (item.priority === "Medium") item.priorityColor = "#ffbb33";
  if (item.priority === "Low") item.priorityColor = "#5e72e4";
};

export const TodosStore = {
  state: {
    todos: [],
    showUpdate: false
  },
  mutations: {
    SET_TODOS: (state, todos) => {
      state.todos = todos.map(todo => {
        getPriorityColor(todo);
        return todo;
      });
    },
    DELETE_TODO: (state, id) => {
    const todoIndex = state.todos.findIndex(todo => todo.id === id)
    state.todos.splice(todoIndex, 1);
    },
    ADD_TODO: (state, todo) => {
      getPriorityColor(todo)
      state.todos.unshift(todo)
    },
    UPDATE_TODO: (state, updatedTodo) => {
      state.todos.filter(todo => {
        if (todo.id === updatedTodo.id) {
          todo.title = updatedTodo.title;
          todo.description = updatedTodo.description;
          todo.priority = updatedTodo.priority;
          getPriorityColor(todo);
        }
      });
      state.showUpdate = false;
    },
    SHOW_UPDATE_FORM: (state, data) => (state.showUpdate = data),
    COMPLETED_TODO: (state, id) => {
      state.todos.findIndex(todo => todo.id === id);
    }
  },
  actions: {
    async fetchTodos(context) {
      const response = await todoService.getAll();
      context.commit('SET_TODOS', response.data)
    },
    async deleteTodo(context, id) {
      await todoService.deleteTodo(id);
      context.commit('DELETE_TODO', id)
    },
    async addTodo(context, data) {
      await todoService.addTodo(data);
      context.commit('ADD_TODO', data)
    },
    async updateTodo(context, data) {
      await todoService.updateTodo(data);
      context.commit('UPDATE_TODO', data)
    },
    async showUpdateForm(context, data) {
      context.commit('SHOW_UPDATE_FORM', data)
    },
    async markComplete(context, todo) {
      todo.completed = 1;
      const response = await todoService.updateTodo(todo);
      context.commit('COMPLETED_TODO', response.data);
    }
  },
  getters: {
    allTodos: state => state.todos,
    showUpdate: state => state.showUpdate
  }
}