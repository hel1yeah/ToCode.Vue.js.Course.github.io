<template>
  <modal title="Тайт модального окна из Формами" @closeModal="closeModal">
    <div slot="body">
      <form @submit.prevent="">
        <label>Имя</label>
        <input
          type="text"
          placeholder="введите ваш имя"
        />
        <label>Емейл</label>
        <input
          type="text"
          placeholder="введите ваш емейл"
        />
        <button class="btn btnPrimary">Отправить</button>
      </form>
    </div>
  </modal>
</template>
<script>
import modal from "@/components/UI/Modal.vue";
export default {
  components: {
    modal,
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", event);
    },
  },
};
</script>

<style lang="stylus" scoped></style>