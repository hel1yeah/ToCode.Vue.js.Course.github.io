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
      required: 'Напишите пожалуйста заголовок заметки, без него нельзя создать заметку.',
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

    
    
    