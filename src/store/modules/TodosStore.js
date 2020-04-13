import {todoService} from '../../services/TodoService.js'

export const TodosStore = {
  state: {
    todos: []
  },
  mutations: {
    setTodos: (state, todos) => {
      state.todos = todos
      console.log(todos)
    },
    deleteTodo: (state, id) => {
    const todoIndex = state.todos.findIndex(todo => todo.id === id)
    console.log(todoIndex);
    state.todos.splice(todoIndex, 1);
  }
  },
  actions: {
    async fetchTodos(context) {
      const response = await todoService.getAll();
      context.commit('setTodos', response.data)
    },

    async deleteTodo(context, id) {
      await todoService.deleteTodo(id);
      context.commit('deleteTodo', id)
    }

  },
  getters: {
    allTodos: state => state.todos
  },
}