<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>{{ product.title }}</h1>
        <img :src="product.img" :alt="product.title" />
        <p>{{ product.descr }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      id: Number(this.$route.params.id),
    };
  },
  created() {
    // this.id = Number(this.$route.params.id);
    this.product = this.$store.getters.getProduct(this.id);
    console.log(this.product);
  },
};
</script>