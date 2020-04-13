import Vue from 'vue';
import Router from 'vue-router';
import store from './store/index.js'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Todos from './components/Todos'

Vue.use(Router);

const routes = [
    {
      path: '/todos',
      name: 'todos',
      component: Todos,
      meta: {
        guest: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        guest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    }
  ];    

  const router = new Router ({
    routes,
    mode: "history"
  });

  router.beforeEach((to, from, next) => {
    const isUserLoggedIn = store.getters.isUserLoggedIn;
  
    if (!to.meta.guest && !isUserLoggedIn) {
      return next({
        name: "login"
      });
    }
  
    if (to.name === "login" && isUserLoggedIn) {
      return next({
        name: "todos"
      });
    }
  
    if (to.name === "register" && isUserLoggedIn) {
      return next({
        name: "todos"
      });
    }
  
    return next();
  });
  
  export default router;