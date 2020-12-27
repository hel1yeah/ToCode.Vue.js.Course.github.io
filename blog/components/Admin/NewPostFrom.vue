<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent>
        <AppInput v-model="post.title"> Заголовок </AppInput>
        <AppInput v-model="post.descr"> Описание </AppInput>
        <AppInput v-model="post.img"> Ссылка на картинку </AppInput>
        <AppTextArea v-model="post.content"> Контент </AppTextArea>
        <div class="controls">
          <AppButton class="btnDanger" @click="cancel"> Отмена </AppButton>
          <AppButton @click="onSave"> Сохранить пост </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postEdit: {
      type: Object,
      requreid: false
    }
  },
  data() {
    return {
      post: this.postEdit
        ? { ...this.postEdit }
        : {
            title: "",
            descr: "",
            img: "",
            content: "",
          },
    };
  },
  methods: {
    onSave() {
      this.$emit("save", this.post);
    },
    cancel() {
      this.$router.push("/admin/");
    },
  },
};
</script>

<style lang="scss" scoped>
.controls {
  text-align: center;
  margin: 20px 0;
}
</style>