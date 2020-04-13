import { HttpService } from "./HttpService.js";

class TodoService extends HttpService {
  getAll() {
    return this.axios.get('/todos');
  }
}

export const todoService = new TodoService();