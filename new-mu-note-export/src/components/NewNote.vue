<template>
  <div class="new-note">
  <label >Загловок для заметки</label>
    <input v-model="note.titleNote" type="text" />
    <label ><h2>Описание для заметки</h2></label>
    <textarea v-model="note.descr"></textarea>
    <button class="btn btnPrimary" @click="componentsMetodsAddNode">Добавить Заметку</button>
  </div>
</template>
<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    componentsMetodsAddNode() {
      this.$emit("componentsMetodsAddNode", this.note);
    },
  },
};
</script>

<style lang="scss">
  .new-note{
    text-align: center;
    & button {
      margin: 20px 0;
    }
  }
</style>