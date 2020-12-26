<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="container">
        <ul class="footer__list">
          <li
            class="footer__item"
            v-for="contact in contacts"
            :key="contact.index"
          >
            {{ contact.title }} : {{ contact.value }}
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  data() {
    return {
      contacts: [
        {
          title: "Телефон",
          value: "09754275465",
        },
        {
          title: "Улица",
          value: "Киевская",
        },
        {
          title: "Дом",
          value: "83",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  &__inner {
    margin: 20px 0 0;
    height: 50px;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  }
  &__list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  //  &__item {
  //  }
}
</style>