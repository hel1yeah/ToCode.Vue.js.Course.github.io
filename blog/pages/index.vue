<template>
  <div class="wrapper-content wrapper-content--fixed">
      <Promo />
      <Intro title="My lasts posts:" />
  </div>
</template>




<script>
import promo from '@/components/Promo.vue'
import intro from '@/components/UI/Intro.vue'
export default {
  components: {
    promo,
    intro,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>