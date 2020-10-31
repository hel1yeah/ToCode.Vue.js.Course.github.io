<template>
  <div class="new-note">
    <label> Загловок заметки</label>
    <input v-model="note.title" type="text" />
    <label>Описание заметки </label>
    <textarea v-model="note.descr"></textarea>
    
    <!-- radio -->
    <div class="aline-flex-wrapp">
    <label>Важность заметки</label>
    <div class="aline-flex">
      <input type="radio" id="huey"  value="while" checked  v-model="checked"/>
      <label for="huey">Обычный</label>
    </div>

    <div class="aline-flex">
      <input type="radio" id="dewey"  value="yellow" v-model="checked"/>
      <label for="dewey">Средний</label>
    </div>

    <div class="aline-flex">
      <input type="radio" id="louie" value="firebrick" v-model="checked"/>
      <label for="louie">Важный</label>
    </div>
    
    <span> {{checked}} </span>
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
  data() {
    return { checked: this.value };
  },
  methods: {
    addNote() {
      this.$emit("addNote", this.note);
    },
  },
  watch: {
  checked(val) {
    this.$emit('checked', val);
  },
},
};
</script>

<style lang="scss">
.new-note {
  text-align: center;
  & .btn {
    margin-top: 10px;
  }
}
.aline-flex-wrapp{
  
  margin: 30px auto;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  padding: 30px 27px;
  border-radius: 14px;
  border: 1px solid #DCDFE6;
}
.aline-flex{
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