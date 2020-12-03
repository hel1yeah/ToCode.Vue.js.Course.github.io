<template>
  <div class="wrapper">
    <!-- header -->
    <header class="header">
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo-wrapper">
              <div class="logo">VUE-CLI</div>
              <picture class="logo-picture">
                <img src="./assets/logo.png" alt="Vue Logo" class="logo-img" />
              </picture>
            </div>

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
        { title: "Shop", url: "/shop" },
        { title: "Contact", url: "/contact" },
      ],
    };
  },
};
</script>

<style lang="scss" >
.navbar-link {
  &.router-link-exact-active {
    color: #49bc8a;
  }
}
.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 115px;
}
.logo {
//  &-picture {
//  }
  &-img {
    height: 30px;
    width: 30px;
  }
}
</style>
