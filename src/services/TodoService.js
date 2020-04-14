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
}

export const todoService = new TodoService();