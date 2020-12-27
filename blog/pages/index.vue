<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo />
    <Intro title="Мои последние посты" />
    <PostsList :posts="posts"></PostsList>
    <contacts></contacts>
  </div>
</template>




<script>
import promo from "@/components/Promo.vue";
import contacts from "@/components/Contacts.vue";
export default {
  components: {
    promo,
    contacts,
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          posts : [
              {
                id: 1,
                title: "1 post",
                descr:
                  "Напоивший прямо рекламных там своих большой семь послушавшись города. Бросил его переписали напоивший имени.",
                img:
                  "https://images.wallpaperscraft.ru/image/avtomobil_neon_chelovek_137624_2560x1080.jpg",
              }
            ]
          })
      }, 1500);
    }).then(data => {
      return data
    }).catch(e => {
      context.error(e)
    })
  },
  data() {
    return {
      posts: [],
    };
  },
};
</script>

<style lang="scss">
</style>