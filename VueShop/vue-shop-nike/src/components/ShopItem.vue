<template>
  <div class="shopItem">
    <router-link :to="/shop/ + 'nike' + product.id" class="link">
      <img :src="product.img" :alt="product.title" />
      <h1>{{ product.title }}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" >
.shopItem__wrapper {
  display: flex;
  text-align: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.shopItem {
  max-width: 600px;
  &:hover{
    opacity:  .8;
  }
  & img {
    width: 100%;
  }
  p {
    text-align: center;

    font-size: 1.1rem;
  }
}
</style>