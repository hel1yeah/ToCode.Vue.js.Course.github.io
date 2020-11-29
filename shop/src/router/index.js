// defolt
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// pages
import Home from '@/pages/Home'
import Example from '@/pages/Example'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/example',
    name: 'example',
    component: Example
  }
];

const router = new VueRouter({
  routes
});

export default router;
