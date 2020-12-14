<template>
  <div class="error__wrapper">
    <div class="error">
      
      <p> {{ test1 }} </p>
    </div>
  </div>
</template>
<script>
import home from '@/pages/Home.vue'
export default {
  data() {
    return {
      props: {
        error: {
          type: String,
          required: true,
        },
        test1: {
          type: String,
          required: true,
        },
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.error__wrapper {
  margin-top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 5px solid red;
  text-align: center;
  position: relative;
  display: block;
}
.error {
  margin-top: 50%;
  transform: translateY(-50%);
}
</style>