<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">

          <button class="btn btnPrimary" @click="modalFirst = !modalFirst" >Первое Модальное окно</button>
          <!-- first modal -->
          <modals 
          title="Первое модальное окно "
          v-if="modalFirst"
          @closeModal="closeModal"
          >
          <div slot="body">
              <p>Test slot 1</p>
              <button class="btn btnPrimary" @click="modalFirst = !modalFirst" >Первое Модальное окно</button>
          </div>
          </modals>

        </div>

      </section>
    </div>
  </div>
</template>

<script>
import modals from "@/components/Modal.vue";
export default {
  components:{  
    modals,
  },
  data() {
    return {
      modalFirst:false
    }
  },
  methods: {
    closeModal(event){
      this.modalFirst = false
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
