import {todoService} from '../../services/TodoService.js'

const getPriorityColor = item => {
  if (item.priority === "High") item.priorityColor = "#f5365c";
  if (item.priority === "Medium") item.priorityColor = "#ffbb33";
  if (item.priority === "Low") item.priorityColor = "#5e72e4";
};

export const TodosStore = {
  state: {
    todos: []
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
    }
  },
  getters: {
    allTodos: state => state.todos
  }
}