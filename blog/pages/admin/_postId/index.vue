<template>
  <newPostFrom @save="onSave" :postEdit="post"></newPostFrom>
</template>

<script>
import newPostFrom from "@/components/Admin/NewPostFrom";

export default {
  components: {
    newPostFrom,
  },
  layout: "admin",
  data() {
    return {
      post: {
        id: 1,
        title: "1 post",
        descr:
          "Напоивший прямо рекламных там своих большой семь послушавшись города. Бросил его переписали напоивший имени.",
        img:
          "https://images.wallpaperscraft.ru/image/avtomobil_neon_chelovek_137624_2560x1080.jpg",
        content:
          "Даль там маленький решила мир предупредила страна запятой, оксмокс языком агентство. То все которое живет пунктуация коварный страна, он всеми подпоясал несколько напоивший переписали но вопрос семантика буквоград путь вопроса. Ведущими прямо щеке свой даль безорфографичный которое все языкового строчка о! Сбить снова вскоре власти предложения своих возвращайся свой!",
      },
    };
  },
  methods: {
    onSave(post) {
      console.log("Post Editing");
      console.log(post);
    },
  },
};
</script>