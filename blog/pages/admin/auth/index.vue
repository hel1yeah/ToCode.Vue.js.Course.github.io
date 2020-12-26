<template >
  <section class="auth">
    <div class="container">
      <form @submit.prevent="toCome" class="auth__form">
        <AppInput type="email" v-model="user.email"> Логин </AppInput>
        <AppInput type="password" v-model="user.password"> Пароль </AppInput>

        <div class="controls">
          <AppButton> Войти </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    toCome() {
      this.user.email = "";
      this.user.password = "";
    },
  },
};
</script>

<style lang="scss">
.auth {
  max-width: 400px;
  text-align: center;
  margin: 0 auto;
  &__form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 68vh;
    input {
      min-width: 500px;
    }
  }
}
</style>