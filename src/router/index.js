import Vue from 'vue';
import VueRouter from 'vue-router';
import Loadable from '../utils/Loadable';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/course',
    name: 'course',
    component: Loadable(() => import(/* webpackChunkName: "about" */ '../views/Course/index.vue')),
  },
  {
    path: '/profile',
    name: 'profile',
    component: Loadable(() => import(/* webpackChunkName: "about" */ '../views/Profile/index.vue')),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
