import Vue from 'vue';
import Vuex from 'vuex';
import {TodosStoreModule} from './modules/TodosStoreModule';
import {authStoreModule} from './modules/authStoreModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TodosStoreModule, 
    authStoreModule
  }
})