import axios from 'axios'
const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export const TodosStore = {
  state: {
    todos: []
  },
  mutations: {
    setTodos: (state, todos) => {
      state.todos = todos
    },
    deleteTodo: (state, id) => {
      let index;
      let cnt = 0;
      state.todos.forEach(todo => {
        if(todo.id === id){
          index = cnt;
        }
        cnt++;
      })
      state.todos.splice(index, 1);
    }
  },
  actions: {
 


   async fetchTodos({commit}) {
      const response = await axios.get(`${ROOT_URL}/todos`);

      commit('setTodos', response.data)
    },

    async deleteTodo({commit}, id) {
      const response = await axios.delete(`${ROOT_URL}/todos/${id}`);
      //console.log(response);
      commit('deleteTodo', response.data)
    }

  },
  getters: {
    allTodos: state => state.todos
  },
}