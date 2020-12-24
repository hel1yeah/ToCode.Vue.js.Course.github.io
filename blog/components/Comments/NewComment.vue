<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">Оставить комментарий</h2>
      <Message v-if="message" :message="message"></Message>
      <form @submit.prevent="onSubmitComment" class="contact__form">
        <label> Имя  </label>
        <AppInput v-model="comment.name" type="text" id="name" ></AppInput>
        <label> Текст </label>
        <AppTextArea v-model="comment.text" id="text"></AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <AppButton class="btnWhite"> test </AppButton>
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
      comment: {
        name: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmitComment() {
      console.log(this.comment);
      this.message = 'Submited';
            // reset 
      this.comment.name= '';
      this.comment.text= '';
    },
  },
};
</script>


<style lang="scss">
@import "@/assets/scss/main.scss";
.new-comment {
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