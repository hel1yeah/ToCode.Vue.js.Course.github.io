<template>
  <div class="wrapper">
  <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/system/Header.vue'
export default {
  component: {
    Header,
  }
}
</script>
