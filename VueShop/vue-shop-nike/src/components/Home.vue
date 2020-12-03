<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Home Page</h1>
      <p> message : {{getMessage}} </p>

        
      </div>
    </section>
  </div>
</template>

<script>
  import shop from '../components/Shop'

export default {
  modules: {
    shop,
  },
    computed: {
    getMessage(){
      return this.$store.getters.getMessage;
    }
  },
}
</script>
