<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Страниа Администратора">
        <nuxt-link to="/admin" class="link linkWhite">Flvby</nuxt-link>
      </Intro>
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/system/Header.vue";
import Footer from "~/components/system/Footer.vue";
export default {
  component: {
    Header,
    Footer,
  },
};
</script>
