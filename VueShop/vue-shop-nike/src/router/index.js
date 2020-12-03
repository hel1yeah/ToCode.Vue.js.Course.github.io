// defolt
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// pages
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/404";

const router = new VueRouter({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop
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
