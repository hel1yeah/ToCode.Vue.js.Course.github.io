<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="post">
      <div class="container">
        <!-- header -->
        <div class="post__header">
          <img :src="post.img" :alt="post.title" />
          <h1 class="title">{{ post.title }}</h1>
          <p>{{ post.descr }}</p>
        </div>
        <!-- body -->
        <div class="post__body">
          <p>
            {{post.content}}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post:{
          id: 1,
          title: "1 post",
          descr:
            "Напоивший прямо рекламных там своих большой семь послушавшись города. Бросил его переписали напоивший имени.",
          img: 'https://images.wallpaperscraft.ru/image/avtomobil_neon_chelovek_137624_2560x1080.jpg',
          content: 'Даль там маленький решила мир предупредила страна запятой, оксмокс языком агентство. То все которое живет пунктуация коварный страна, он всеми подпоясал несколько напоивший переписали но вопрос семантика буквоград путь вопроса. Ведущими прямо щеке свой даль безорфографичный которое все языкового строчка о! Сбить снова вскоре власти предложения своих возвращайся свой!',
      }
    }
  },
}
</script>