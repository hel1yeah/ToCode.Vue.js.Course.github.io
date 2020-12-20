<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
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
  margin: 20px 0;
  &__inner{

  }
  &__list{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  &__item{

  }
}
</style>