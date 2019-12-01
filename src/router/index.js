import Vue from 'vue';
import VueRouter from 'vue-router';
import Loadable from '../utils/Loadable';
import Home from '../views/Home/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      idx: 0,
    },
  },
  {
    path: '/course',
    name: 'course',
    component: Loadable(() => import(/* webpackChunkName: "about" */ '../views/Course/index.vue')),
    meta: {
      idx: 1,
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: Loadable(() => import(/* webpackChunkName: "about" */ '../views/Profile/index.vue')),
    meta: {
      idx: 2,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
