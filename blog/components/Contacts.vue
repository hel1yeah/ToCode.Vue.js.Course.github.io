<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Форма связи</h2>
      <!-- message -->
      <Message v-if="message" :message="message"></Message>
      <!-- form -->
      <form @submit.prevent="onSubmit" class="contact__form">
        <!-- input -->
        <AppInput v-model="user.name"  >Ваше имя:</AppInput>
        <AppInput v-model="user.email" type="email" >Ваш емейл:</AppInput>
        <AppTextArea v-model="user.text" >Текст</AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <AppButton class="btnWhite"> Отправить </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Message from '@/components/UI/Message'
import AppButton from '@/components/UI/Controls/Button'
import AppInput from '@/components/UI/Controls/Input'
import AppTextArea from '@/components/UI/Controls/TextArea'
export default {
  components:{
      AppButton,
      AppInput,
      AppTextArea,
      Message,
    },
  data() {
    return {
      message: null,
      user: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.message = 'Submited';
      console.log(this.user);

      // reset 
      this.user.name= '';
      this.user.email= '';
      this.user.text= '';
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