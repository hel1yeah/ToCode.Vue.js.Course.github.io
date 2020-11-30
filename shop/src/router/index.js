// defolt
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// pages
import Home from "@/pages/Home";
import Example from "@/pages/Example";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/404";

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
  },
  
  {
    path: "*",
    name: "notFound",
    component: NotFound
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
