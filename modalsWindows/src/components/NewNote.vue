<template>
  <div class="new-note">

    <label> Загловок заметки</label>
    <input v-model="note.title" type="text" />
    <label>Описание заметки </label>
    <textarea v-model="note.descr"></textarea>

    <!-- radio -->
    <div class="aline-flex-wrapp">
      <form >

          


      </form>
      <label>Важность заметки</label>
      <div class="aline-flex">
        <input    type="radio" id="huey" value="white" v-model="note.bgColor" />
        <label for="huey">Обычный</label>
      </div>

      <div class="aline-flex">
        <input  type="radio" id="dewey" value="yellow" v-model="note.bgColor" />
        <label for="dewey">Средний</label>
      </div>

      <div class="aline-flex">
        <input  type="radio" id="louie" value="firebrick" v-model="note.bgColor" />
        <label for="louie">Важный</label>
      </div>
    </div>

    <button class="btn btnPrimary" @click="addNote">Создать заметку</button>
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
    addNote() {
      this.$emit("addNote", this.note);
    },
  },
};
</script>

<style lang="scss">
.new-note {
  text-align: center;
  margin-bottom: 20px;
  & .btn {
    margin-top: 10px;
  }
}
.aline-flex-wrapp {
  margin: 30px auto;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  padding: 30px 27px;
  border-radius: 14px;
  border: 1px solid #dcdfe6;
}
.aline-flex {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & input {
    margin-bottom: 0;
    width: 20px;
  }
  & label {
    margin-bottom: 0;
    width: 100px;
  }

}
</style>