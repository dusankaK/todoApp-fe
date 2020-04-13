import { HttpService } from "./HttpService.js";

class AuthService extends HttpService {
  login(credentials) {
    return this.axios.post("/login", credentials);
  }

  register(credentials) {
    return this.axios.post("/register", credentials);
  }
}

export const authService = new AuthService() 