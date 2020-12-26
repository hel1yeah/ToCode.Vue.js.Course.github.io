<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Страница Администратора">
        <nuxt-link to="/admin" class="link linkWhite">Админка</nuxt-link>
        <nuxt-link to="/admin/new-post" class="link linkWhite">Новый пост</nuxt-link>
        <nuxt-link to="/admin/comments" class="link linkWhite">Коментарии</nuxt-link>
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
  middleware:
    ['auth']
  ,
};
</script>
