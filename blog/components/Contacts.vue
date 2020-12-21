<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact</h2>
      <form @submit.prevent="onSubmit" class="contact__form">
        <label for="name">Ваше имя </label>
        <input v-model="user.name" type="text" id="name" />
        <label for="email"> Ваш емейл</label>
        <input v-model="user.email" type="text" id="email" />
        <label for="text"> Ваш текст</label>
        <textarea v-model="user.text" id="text"></textarea>
        <!-- buttons -->
        <div class="controls">
          <AppButton class="btnWhite"> test </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import AppButton from '@/components/UI/Controls/Button'
export default {
  components:{
      AppButton,
    },
  data() {
    return {
      user: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    },
  },
};
</script>


<style lang="scss">
@import "@/assets/scss/main.scss";
.contact {
  text-align: center;
  background-color: $purple-color;
  color: #fff;
  &__form {
    max-width: 600px;
    margin: 30px auto;
  }

  h2 {
    color: #fff;
  }

  .controls {
    margin: 20px;
  }
}
</style>