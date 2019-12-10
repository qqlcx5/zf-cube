// eslint-disable-next-line import/no-cycle
import { fetchCategory, fetchSlides } from "@/api/home";
import * as types from "../actions-type";

export default {
  namespaced: true, // 命名空间
  state: {
    categories: [], // 分类数据
    currentLesson: -1, // 当前用户选择课程
    slides: [] // 轮播图数组
  },
  actions: {
    // 发请求的
    async [types.SET_CATEGORIES]({ commit }) {
      const categories = await fetchCategory();
      commit(types.SET_CATEGORIES, categories);
    },
    // 请求轮播图
    async [types.SET_SLIDES]({ commit }) {
      const slides = await fetchSlides();
      commit(types.SET_SLIDES, slides);
    }
  },
  mutations: {
    // 同步分类数据
    [types.SET_CATEGORIES](state, payload) {
      state.categories = payload;
    },
    // 当前用户选择课程
    [types.SET_CURRENTLESSON](state, payload) {
      state.currentLesson = payload;
    },
    // 设置轮播图
    [types.SET_SLIDES](state, payload) {
      state.slides = payload;
    }
  }
};
