<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">Оставить комментарий</h2>
      <form @submit.prevent="onSubmitComment" class="contact__form">
        <label for="name">Ваше имя </label>
        <input v-model="comment.name" type="text" id="name" />
        <label for="text"> Ваш текст</label>
        <textarea v-model="comment.text" id="text"></textarea>
        <!-- buttons -->
        <div class="controls">
          <button class="btn btnPrimary">Запостить</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      comment: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmitComment() {
      console.log(this.comment);
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