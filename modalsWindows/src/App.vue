<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">

          <button class="btn btnPrimary" @click="modalFirst = true" >Первое Модальное окно</button>
          <!-- first modal -->
          <modals 
          title="First modal"
          v-if="modalFirst"
          @closeModal="closeModal"
          >

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
