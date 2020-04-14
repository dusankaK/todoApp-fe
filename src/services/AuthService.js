import { httpService } from "./HttpService.js";

const ENDPOINTS = {
  LOGIN: "/login",
  REGISTER: "/register"
};

class AuthService {
  login(credentials) {
    return httpService.getApiClient().post(ENDPOINTS.LOGIN, credentials);
  }

  register(credentials) {
    return httpService.getApiClient().post(ENDPOINTS.REGISTER, credentials);
  }
}

export const authService = new AuthService() 