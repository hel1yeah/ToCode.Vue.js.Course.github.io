<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <div class="modal__buttons">
            <!-- first modal button -->
            <button class="btn btnPrimary" @click="modalFirst = !modalFirst">
              Первое Модальное окно
            </button>
            <!-- second modal  button-->
            <button
              class="btn btnPrimary"
              @click="modalSecond.show = !modalSecond.show"
            >
              Модальное окно с Формами
            </button>
            <!--validate  modal button -->
            <button
              class="btn btnPrimary"
              @click="modalValidate = !modalValidate"
            >
              Окно с Валидными формами
            </button>
          </div>

          <!-- first modal -->
          <modals
            title="Тайт первого модального окна "
            v-show="modalFirst"
            @closeModal="closeModal"
          >
            <div slot="body">
              <p>Test slot 1</p>
              <button class="btn btnPrimary" @click="modalFirst = !modalFirst">
                Первое Модальное окно
              </button>
            </div>
          </modals>
          <!-- /first modal -->
          <!-- second modal -->
          <modals
            title="Тайт модального окна из Формами"
            v-show="modalSecond.show"
            @closeModal="closeModal"
          >
            <div slot="body">
              <form @submit.prevent="submintSecondForm">
                <label>Имя</label>
                <input
                  type="text"
                  required
                  placeholder="введите ваш имя"
                  v-model="modalSecond.name"
                />
                <label>Емейл</label>
                <input
                  type="text"
                  required
                  placeholder="введите ваш емейл"
                  v-model="modalSecond.email"
                />
                <button class="btn btnPrimary">Отправить</button>
              </form>
            </div>
          </modals>
          <!-- /second modal -->
          <!-- modalValidate -->
          <modalValidate v-show="modalValidate" @closeModal="closeModal">
          </modalValidate>

          <!-- /modalValidate -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import modals from "@/components/UI/Modal.vue";
import modalValidate from "@/components/ModalValidate.vue";

export default {
  components: {
    modals,
    modalValidate,
  },
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: "",
        email: "",
      },
      modalValidate: false,
    };
  },
  methods: {
    closeModal() {
      this.modalFirst = false;
      this.modalSecond.show = false;
      this.modalValidate = false;
    },
    submintSecondForm() {
      axios.post('https://site.com/mail.php',{
        name: this.modalSecond.name,
        email: this.modalSecond.email,
      })



      // reset
      this.modalSecond.name = "";
      this.modalSecond.email = "";
      this.modalSecond.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
