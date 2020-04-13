import { HttpService } from "./HttpService.js";

class TodoService extends HttpService {
  getAll() {
    return this.axios.get('/todos');
  }
  deleteTodo(id) {
    return this.axios.delete(`/todos/${id}`)
  }
}

export const todoService = new TodoService();