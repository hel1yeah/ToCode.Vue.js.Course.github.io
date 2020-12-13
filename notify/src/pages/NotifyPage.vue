<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- wrapper -->
        <div class="notify__wrapper">
          <!-- title -->
          <div class="notify__title">
            <h3>Notify App</h3>
          </div>
          <!-- content -->
          <div class="notify__content">
            <!-- notify -->
            <notify :messages="messages"> </notify>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
import notify from "@/components/Notify.vue";

export default {
  components: {
    notify,
  },
  data() {
    return {
      messages: [
        { title: "message 1" },
        { title: "message 2" },
        { title: "message 3" },
        { title: "message 4" },
        { title: "message 5" },
        { title: "message 6" },
        { title: "message 7" },
      ],
    };
  },
};
</script>



<style lang="scss" scoped>
@import '../assets/scss/main';
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

.notify__wrapper {
  width: 400px;
  background-color:$default-color;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 12px 22px 0 rgba(0, 0, 0, 0.1);
}

.notify__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
}

.notify__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 24px;
  }
}
</style>
