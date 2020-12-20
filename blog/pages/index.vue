<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo />
    <Intro title="My lasts posts:" />
    <postsList :posts="posts"></postsList>

  </div>
</template>




<script>
import promo from "@/components/Promo.vue";
import intro from "@/components/UI/Intro.vue";
import postsList from "@/components/Blog/PostsList.vue";
export default {
  components: {
    promo,
    intro,
    postsList,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "1 post",
          descr:
            "Напоивший прямо рекламных там своих большой семь послушавшись города. Бросил его переписали напоивший имени.",
          img: 'https://images.wallpaperscraft.ru/image/avtomobil_neon_chelovek_137624_2560x1080.jpg',
        },
        {
          id: 2,
          title: "2 post",
          descr:
            "Напоивший прямо рекламных там своих большой семь послушавшись города. Бросил его переписали напоивший имени.",
          img: 'https://images.wallpaperscraft.ru/image/neon_ieroglify_nadpis_190976_1920x1080.jpg',
        },
        {
          id: 3,
          title: "3 post",
          descr:
            "Напоивший прямо рекламных там своих большой семь послушавшись города. Бросил его переписали напоивший имени.",
          img: 'https://images.wallpaperscraft.ru/image/avtomobil_sportkar_neon_145748_2560x1080.jpg',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>