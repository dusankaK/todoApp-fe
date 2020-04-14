import {authService} from '@/services/AuthService.js';

export const authStore = {
  state: {
    token: localStorage.getItem("token"),
    userId: null,
    registerErrors: [],
    loginErrors: null
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_REGISTER_ERRORS(state, errors) {
      state.registerErrors = errors;
    },
    SET_LOGIN_ERRORS(state, errors) {
      state.loginErrors = errors;
    },
    SET_USER_ID(state, userId) {
      state.userId = userId
    }
  },
  actions: {
    async registerUser(context, credentials) {
      try {
        const response = await authService.register(credentials);
        context.commit("SET_TOKEN", response.data.token);
        context.commit("SET_REGISTER_ERRORS", null);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data.user_id);
        return response;
      } catch (exception) {
          context.commit("SET_REGISTER_ERRORS", exception.response.data.errors);
        
      }
    },
    async login (context, credentials) {
      try {
        const response = await authService.login(credentials);
        context.commit("SET_TOKEN", response.data.token);
        context.commit("SET_USER_ID", response.data.user_id);
        context.commit("SET_LOGIN_ERRORS", null);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data.user_id);
        return response;
      } catch (exception) {
        if (exception.response.data && exception.response.data.error) {
          context.commit("SET_LOGIN_ERRORS", exception.response.data.error);
        }
      }
    },
    async logout (context) {
      context.commit("SET_TOKEN", null);
      localStorage.removeItem("token")
    }
  },
  getters: {
    isUserLoggedIn(state) {
      return !!state.token;
    },
    registerErrors(state) {
      return state.registerErrors;
    },
    loginErrors(state) {
      return state.loginErrors
    },
    userId(state) {
      return state.userId;
    }
  }
};