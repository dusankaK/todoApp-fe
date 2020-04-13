import {todoService} from '../../services/TodoService.js'

export const TodosStore = {
  state: {
    todos: []
  },
  mutations: {
    setTodos: (state, todos) => {
      state.todos = todos
    }
  },
  actions: {
    async fetchTodos(context) {
      const response = await todoService.getAll();
      context.commit('setTodos', response.data)
    }

  },
  getters: {
    allTodos: state => state.todos
  },
}