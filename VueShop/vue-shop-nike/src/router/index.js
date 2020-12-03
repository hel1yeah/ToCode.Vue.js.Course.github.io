// defolt
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// pages
import Home from "@/components/Home";
import Example from "@/components/Example";
import Contact from "@/components/Contact";
import NotFound from "@/components/404";

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
