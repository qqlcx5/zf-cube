import Vue from "vue";
import Vuex from "vuex";
// eslint-disable-next-line import/no-cycle
import home from "./modules/home";
import * as types from "./actions-type";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // namespaced: true,
    home
  },
  state: {
    ajaxToken: [] //存放所有请求
  },
  mutations: {
    [types.PUSH_TOKEN](state, cancel) {
      console.log("mutations");
      state.ajaxToken = [...state.ajaxToken, cancel];
    },
    [types.CLEAR_TOKEN](state) {
      state.ajaxToken.forEach(cancel => cancel());
    }
  }
});
