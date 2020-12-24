<template>
  <header class="header">
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <nuxt-link class="logo" to="/">Blog Nuxt</nuxt-link>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <nuxt-link
                class="navbar-link"
                :title="link.title"
                :to="link.url"
                >{{ link.title }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Blog",
          url: "/",
        },
        {
          title: "About",
          url: "/about",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.logo{
    color: #000;
  }
.navbar-link {
  
  &.nuxt-link-exact-active {
    color: #892fdd;
  }
}
</style>