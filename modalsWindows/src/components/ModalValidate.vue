<template>
  <modal title="Тайт модального окна из Формами" @closeModal="closeModal">
    <div slot="body">
      <form @submit.prevent="onSubmit">
        <div class="form-item" :class="{ errorInput: $v.email.$error }">
          <label>Емейл</label>
          <p class="errorText" v-if="!$v.email.required">
            Обязательно укажите емейл
          </p>
          <p class="errorText" v-if="!$v.email.email">Не корректный емейл</p>
          <input
            placeholder="введите ваш емейл"
            v-model="email"
            :class="{ error: $v.email.$error }"
            @change="$v.email.$touch()"
          />
        </div>

        <div class="form-item" :class="{ errorInput: $v.name.$error }">
          <label>Имя</label>
          <p class="errorText" v-if="!$v.name.required">
            Oбязательно укажите имя
          </p>
          <p class="errorText" v-if="!$v.name.minLength">
            Имя не может быть короче {{ $v.name.$params.minLength.min }}-х букв!
          </p>
          <input
            placeholder="введите ваш имя"
            v-model="name"
            :class="{ error: $v.name.$error }"
            @change="$v.name.$touch()"
          />
        </div>

        <div class="form-item" :class="{ errorInput: $v.password.$error }">
          <label>Введите пароль </label>
          <p class="errorText" v-if="!$v.password.required" > Пороль обязательный </p>
          <p class="errorText" v-if="!$v.password.minLength"> Пароль не может быть короче {{ $v.password.$params.minLength.min }} знаков</p>
          <input placeholder="Ваш пароль" v-model.trim="$v.password.$model" />
          <label >Повторите пароль </label>
          <p class="errorText" v-if="!$v.repeatPassword.required" > Повторить пароль обязательно </p>
          <input placeholder="Повторите пароль" v-model.trim="$v.repeatPassword.$model"/>
          <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Пароли не идентичны</p>
        </div>


        <button class="btn btnPrimary">Отправить</button>
      </form>
    </div>
  </modal>
</template>
<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

import modal from "@/components/UI/Modal.vue";
export default {
  components: {
    modal,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(10),
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs("password"),
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", event);
    },
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = {
          name: this.name,
          email: this.email,
          password: this.password,
          repeatPassword: this.repeatPassword,
        };
        console.log(user);
        this.name = "";
        this.email = "";
        this.password = "";
        this.repeatPassword = "";
        this.$v.$reset();
        this.closeModal();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-item .errorText {
  display: none;
  color: firebrick;
  margin-bottom: 8px;
  font-size: 14px;
}
.form-item {
  &.errorInput .errorText {
    display: block;
  }
  & .error {
    border: 1px solid firebrick;
  }
}
</style>