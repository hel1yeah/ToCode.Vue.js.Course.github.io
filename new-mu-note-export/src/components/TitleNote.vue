<template>
  <div class="title-h1">
    <h1>{{ titleNote }}</h1>
    <div class="svg-wrapper">
      <svg
        :class="{ active: gridTest }"
        @click="gridTest = true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
      <svg
        :class="{ active: !gridTest }"
        @click="gridTest = false"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="8" y1="6" x2="21" y2="6"></line>
        <line x1="8" y1="12" x2="21" y2="12"></line>
        <line x1="8" y1="18" x2="21" y2="18"></line>
        <line x1="3" y1="6" x2="3" y2="6"></line>
        <line x1="3" y1="12" x2="3" y2="12"></line>
        <line x1="3" y1="18" x2="3" y2="18"></line>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleNote: {
      type: String,
      required: true,
      // default: 'Приложение на Vue.js для заметок',
    },
    grid: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      gridTest: this.grid,
    };
  },
  watch: {
    gridTest() {
      this.$emit("gridTest", this.gridTest);
    },
  },
};
</script>

<style lang="scss">
.title-h1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.svg-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(128, 128, 128);
  cursor: pointer;
  transition: all 1s;

  & svg:first-child {
    margin-right: 10px;
  }
  & svg:hover {
    color: rgb(56, 56, 56);
  }
  & svg.active {
    color: rgb(128, 6, 228);
  }
}
</style>