<template>

  <div class="shopItem">
    <img :src="product.img" :alt="product.title">
    <p>{{product.title}}</p>
  </div>

</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" >
.shopItem__wrapper{
  display: flex;
  text-align: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.shopItem{
  max-width: 48%;
  & img{
    
  }
  p{
    text-align: center;
    
    font-size: 1.1rem;
  }
}
</style>