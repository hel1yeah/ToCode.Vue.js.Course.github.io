<template>
  <div class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: 'False Error, Note Found Title',
    },
  },
};
</script>

<style lang="css" scoped>
  .message{
    color: red;
    text-align: center;
  }
</style>

    
    
    