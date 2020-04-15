import { httpService } from "./HttpService.js";

const ENDPOINTS = {
  TODOS: "/todos",
  TODO: id => `/todos/${id}`
};

class TodoService{
  getAll() {
    return httpService.getApiClient().get(ENDPOINTS.TODOS);
  }
  deleteTodo(id) {
    return httpService.getApiClient().delete(ENDPOINTS.TODO(id))
  }
  addTodo(newTodo) {
    return httpService.getApiClient().post(ENDPOINTS.TODOS, newTodo)
  }
  updateTodo(updTodo) {
    return httpService.getApiClient().put(ENDPOINTS.TODO(updTodo.id), updTodo)
  }
}

export const todoService = new TodoService();