import { fetchCategory } from '@/api/home';
import * as types from '../actions-type';

export default {
  namespaced: true, // 命名空间
  state: {
    categories: [],
  },
  actions: {
    // 发请求的
    async [types.SET_CATEGORIES]({ commit }) {
      const categories = await fetchCategory();
      commit(types.SET_CATEGORIES, categories);
    },
  },
  mutations: {
    // 同步状态
    [types.SET_CATEGORIES](state, payload) {
      state.categories = payload;
    },
  },
};
