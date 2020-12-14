<template>
  <div class="error__wrapper">
    <div class="error">
      
      <p> {{ tst }} </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      props: {
        error: {
          type: String,
          required: true,
        },
        tst: {
          type: String,
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