<template>
  <div class="wrapper">
    <!-- header -->
    <header class="header">
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">VUE-CLI</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link
                  class="navbar-link"
                  :title="link.title"
                  :to="link.url"
                  >{{ link.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <!-- /header -->

    <router-view></router-view>

    <!-- footer -->
    <!-- /footer -->
  </div>
</template>
<script>
import "./assets/scss/main.scss";

export default {
  data() {
    return {
      links: [
        { title: "Home", url: "/" },
        { title: "Example", url: "/example" },
        { title: "Contact", url: "/contact" }
      ]
    };
  }
};
</script>

<style lang="scss" >
.navbar-link {
  &.router-link-exact-active {
    color: #49bc8a;
  }
}
</style>
