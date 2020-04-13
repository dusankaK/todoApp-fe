import Vue from 'vue';
import Router from 'vue-router';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Todos from './components/Todos'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/todos',
      name: 'todos',
      component: Todos
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})