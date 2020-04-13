import {authService} from '../../services/AuthService.js';

export const authStoreModule = {
  state: {
    token: localStorage.getItem("token"),
    registerErrors: []
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setRegisterErrors(state, errors) {
      state.registerErrors = errors;
    }
  },
  actions: {
    async registerUser(context, credentials) {
      try {
        const response = await authService.register(credentials);
        authService.setHeaders({
          Authorization: `Bearer ${response.data.token}`
        });
        context.commit("setToken", response.data.token);
        context.commit("setRegisterErrors", null);
        localStorage.setItem("token", response.data.token);
        return response;
      } catch (exception) {
        context.commit("setRegisterErrors", exception.response.data.errors);
      }
    }
  },
  getters: {
    registerErrors(state) {
      return state.registerErrors;
    }
  }
};






// export const UsersStore = {
//   state: {
//     user: {}
//   },
//   mutations: {
//     setUser: ( state, data) => {
//       //state.user = data;
//       console.log(data);
//     },
//     loginUser: (state, data) => {
//       state.token = data.access_token
//     }
//   },
//   actions: {
//     async fetchCurrentUser({commit}){
//       var config = {
//         headers: {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9yZWdpc3RlciIsImlhdCI6MTU4NjcxNDM1OSwiZXhwIjoxNTg2NzE3OTU5LCJuYmYiOjE1ODY3MTQzNTksImp0aSI6Im5yNlk3ekh5OU50UFVZRTgiLCJzdWIiOjQsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.EuEdu38uGdYhEboXGv1b9pIff2fd9SWTO5qxzooHmhE'}
//       };
      
//       let response;
//         try{
//           response = await axios.post('http://127.0.0.1:8000/api/me', {}, config);
//           commit('setUser', response.data);

//         } catch(e) {
//           console.log('nesto')
//         }    
//     },

//     async loginUser({ commit }, user) {
//       user = {
//           email: 'ogi@gmail.com',
//           password: 'ogi123456'
//       }

//       var bodyFormData = new FormData();
//       bodyFormData.set('email', user.email);
//       bodyFormData.set('password', user.password);

//       let response;
//       try{
//           response = await axios.post(
//               'http://127.0.0.1:8000/api/login',bodyFormData
//           );
//       }catch(e){
//           console.log('nije autorizovan');
//       }

//       commit('loginUser', response.data)

//   }
//   },
//   getters: {
//     getUser: state => state.user,
//     getToken: state => state.getToken
//   },
//}