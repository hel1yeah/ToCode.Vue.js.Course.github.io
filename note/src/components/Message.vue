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
    },
  },
};
</script>

// <style lang="scss" scoped>
//   p{
//     color: red;
//   }
// </style>
    

<style lang="css" scoped="">
  .message{
    color: red;
  }
</style>
    
    
    