<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product__wrapper">
          <!-- slider -->
          <div class="product__slider">
            <!-- <img :src="product.img" :alt="product.title" /> -->

            <carousel
              :perPage="1"
              autoplay="true"
              autoplayTimeout="20000"
              paginationEnabled="true"
              paginationActiveColor="#49bc8a"
              paginationColor="#b2f3d7"
            >
              <slide v-for="(slide, index) in product.gellery" :key="index">
                <img :src="slide.img" :alt="slide.name" />
              </slide>
            </carousel>
          </div>
          <!-- content -->
          <div class="product__content">
            <h1 class="title">{{ product.title }}</h1>
            <p>{{ product.descr }}</p>
          </div>
        </div>
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

<style lang="scss">
.product__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product__slider,
.product__content {
  max-width: 48%;
  text-align: left;
}
.VueCarousel-inner{
  visibility: visible!important;
  flex-basis: 100%!important;
  width: 100%!important;
}
</style>