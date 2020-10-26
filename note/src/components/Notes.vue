<template>
  <div class="notes">
    <div class="note" v-for="(note, index) in notes" :key="index">
      <div class="note-header">
        <p>
          {{ note.title }}
        </p>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss">
  .notes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;
  }
  .note{
    width: 46%;
    padding: 18px 20px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 1px rgba(77,74,77,1);
    &-header {
      p {
        color: rgb(128, 6, 228);
      }
    }
    &-body{
      p {
        margin: 20px 0;
        font-size: 22px;
      }
      span {
        font-size: 14px;
        color: #999;
      }
    }
  }
</style>