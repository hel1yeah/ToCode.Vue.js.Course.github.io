<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="error">
          <h1>error, page not found!</h1>
          <p>
            Go to <router-link class="link" to="/"> go to Home </router-link>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.error {
  text-align: center;
  color: firebrick;
  text-transform: uppercase;
  font-size: 2rem;
  & h1 {
    font-size: 3rem;
  }
  
}
.wrapper-content {
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  }
  .container{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }
</style>