<template>
  <section class="intro">
    <div class="container">
      <h2>{{ title }}</h2>
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.intro {
  width: 100%;
  margin: 20px 0;
  text-align: center;
  color: white;
  background-color: #892fdd;

  h1 {
    font-size: 26px;
  }
}
</style>