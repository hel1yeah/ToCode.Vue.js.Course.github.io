<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <newComment></newComment>
    <comments :comments="comments"></comments>
  </div>
</template>

<script>
import post from "@/components/Blog/Post.vue";
import newComment from "@/components/Comments/newComment.vue";
import comments from "@/components/Comments/Comments.vue";
export default {
  components: {
    post,
    newComment,
    comments,
  },
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
      comments: [
        {name: 'Dimas', text:'семантика буквоград путь вопроса'},
        {name: 'Kirril', text:'То все которое живет пунктуация коварный страна'},
      ]
    };
  },
};
</script>