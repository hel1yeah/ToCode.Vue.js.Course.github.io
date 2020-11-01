<template>

  <div class="notes" >
  
    <div class="note" :class="{full : !grid}" v-for="(note, index) in notes" :key="index">
      <div class="note-header" :class="{full : !grid}">
        <p>
          {{ note.titleNote }}
        </p>
        <p style="cursor: pointer; color: red" @click="removeNote(index)">X</p>
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
    },
    grid: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    removeNote(index) {
      this.$emit("remove", index);
    },
  },
};
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
  transition: All 1s;
}
.note {
  width: 46%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 1px rgba(77, 74, 77, 0.2);
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    transform: translate(0, -6px);
    transition-delay: 0s;
  }
  &.full {
    width: 100%;

  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    h1 {
      font-size: 32px;
    }
    p {
      color: rgb(128, 6, 228);
    }
    & .icons {
      & svg {
        margin-right: 15px;
        color: #999;
        cursor: pointer;
        &.active {
          color: rgb(128, 6, 228);
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    &.full {
      justify-content: center;
      text-align: center;
      p {
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  &-body {
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