import Vue from 'vue';
import Vuex from 'vuex';
import {TodosStore} from './modules/TodosStore';
import {authStore} from './modules/authStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TodosStore, 
    authStore
  }
})