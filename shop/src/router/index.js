// defolt
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// pages
import Home from "@/pages/Home";
import Example from "@/pages/Example";
import Contact from "@/pages/Contact";

const routes = [
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
  }
];

const router = new VueRouter({
  routes
});

export default router;
