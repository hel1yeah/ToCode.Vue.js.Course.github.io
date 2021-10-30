// defolt
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// pages
import Home from "../pages/Home.vue";
import Example from "../pages/Example";
import Contact from "../pages/Contact";
import NotFound from "../pages/404";

const router = new VueRouter({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/example",
      name: "example",
      component: Example
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },

    {
      path: "*",
      name: "notFound",
      component: NotFound
    }
  ]
});

export default router;
