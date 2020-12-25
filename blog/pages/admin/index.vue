<template>
  <PostsList :admin=true :posts="posts"></PostsList>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "1 post",
          descr:
            "Напоивший прямо рекламных там своих большой семь послушавшись города. Бросил его переписали напоивший имени.",
          img:
            "https://images.wallpaperscraft.ru/image/avtomobil_neon_chelovek_137624_2560x1080.jpg",
        },
        {
          id: 2,
          title: "2 post",
          descr:
            "Напоивший прямо рекламных там своих большой семь послушавшись города. Бросил его переписали напоивший имени.",
          img:
            "https://images.wallpaperscraft.ru/image/neon_ieroglify_nadpis_190976_1920x1080.jpg",
        },
        {
          id: 3,
          title: "3 post",
          descr:
            "Напоивший прямо рекламных там своих большой семь послушавшись города. Бросил его переписали напоивший имени.",
          img:
            "https://images.wallpaperscraft.ru/image/avtomobil_sportkar_neon_145748_2560x1080.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>