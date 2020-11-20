<template>
  <modal title="Тайт модального окна из Формами" @closeModal="closeModal">
    <div slot="body">
      <form @submit.prevent="">
        <div class="form-item" :class="{ errorInput: $v.name.$error }">
          <label>Имя</label>
          <p class="errorText" v-if="!$v.name.required" > Oбязательно укажите имя </p>
          <p class="errorText" v-if="!$v.name.minLength" > Имя не может быть короче {{ $v.name.$params.minLength.min }}-х букв! </p>
          <input
            placeholder="введите ваш имя"
            v-model="name"
            :class="{ error: $v.name.$error }"
            @change="$v.name.$touch()"
          />
        </div>

        <label>Емейл</label>
        <input placeholder="введите ваш емейл" v-model="email" />
        <button class="btn btnPrimary">Отправить</button>
      </form>
    </div>
  </modal>
</template>
<script>
import { required, minLength, email } from "vuelidate/lib/validators";

import modal from "@/components/UI/Modal.vue";
export default {
  components: {
    modal,
  },
  data() {
    return {
      name: "",
      email: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
    },
    email: {
      required,
      minLength: minLength(6),
      email,
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", event);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-item .errorText{
  display: none;
  color: firebrick;
  margin-bottom: 8px;
  font-size: 14px;
}
.form-item {
  &.errorInput .errorText{
display: block;
}
}



</style>