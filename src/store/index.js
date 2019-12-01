import Vue from 'vue';
import Vuex from 'vuex';
// eslint-disable-next-line import/no-cycle
import home from './modules/home';

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    // namespaced: true,
    home,
  },
});
