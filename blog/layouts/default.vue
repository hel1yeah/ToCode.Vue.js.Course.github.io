<template>
  <div class="wrapper">
  <Header />

    <Nuxt />

  <Footer />
  </div>
</template>

<script>
import Header from '~/components/system/Header.vue'
import Footer from '~/components/system/Footer.vue'
export default {
  component: {
    Header,
    Footer,
  }
}
</script>

<style lang="scss">
  .wrapper{
    position: relative;
    padding-bottom: 50px;
  }
</style>
