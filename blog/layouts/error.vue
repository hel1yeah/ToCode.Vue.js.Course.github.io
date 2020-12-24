<template>
<div class="wrapper-content wrapper-content--fixed">
  <section class="not-found">
    <div class="container">
      <div class="not-found__inner">
        <p class="title">Страница не найдена</p>
        <nuxt-link to="/"> Вернуться на главную страницу </nuxt-link>
        <img src="@/assets/error-404.svg" alt="error-404">
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.not-found{
  flex: 1 0 auto;
  height: 83vh;
  &__inner{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    a{
      margin-bottom: 30px;
    }
    img {
      width: 100px;
    }
  }
}

</style>