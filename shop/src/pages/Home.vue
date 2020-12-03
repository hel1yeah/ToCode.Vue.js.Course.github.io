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
  import example from '../store/example'

export default {
  modules: {
    example,
  },
    computed: {
    getMessage(){
      return this.$store.getters.getMessage;
    }
  },
}
</script>
