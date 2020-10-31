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
      required: true,
      default: "default", // сообщение которое сработает если мы не передадим required
    },
  },
};
</script>

<style lang="scss" scoped>
  .message{
    text-align: center;
    color: firebrick;
  }
</style>