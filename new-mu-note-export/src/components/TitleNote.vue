<template>
  <div class="title-h1">
    <h1>{{titleNote}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    titleNote: {
      type: String,
      required: true,
      // default: 'Приложение на Vue.js для заметок',
    }
  }
}
</script>