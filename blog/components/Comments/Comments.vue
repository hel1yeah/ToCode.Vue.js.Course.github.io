<template>
  <section v-if="comments" class="commets">
    <div class="container">
    <h2 class="header__comments">Коментарии</h2>
      <div class="comment__wrapper">
        <div class="comment" v-for="comment in comments" :key="comment.name">
          <p class="name">
            {{ comment.name }}
          </p>
          <p class="name">
            {{ comment.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.header__comments{
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
  color: #8854d0;
  font-weight: bold;
}

.comment__wrapper{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.comment {
  max-width: 400px;
  background-color: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 15px 10px;
  p:first-child{
    font-weight: 800;
    margin-bottom: 10px;
  }
}
</style>