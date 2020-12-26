<template>
  <CommentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
    <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td>
          <span>{{ comment.name }}</span>
        </td>
        <td>
          <span>{{ comment.text }}</span>
        </td>
        <td>
          <span v-if="comment.status" class="status true">Опубликовать</span>
          <span v-else class="status false">Спрятать</span>
        </td>
        <td>
          <span @click="changeComment(comment.id)" class="link"> Изменить статус </span>
        </td>
        <td><span @click="deleteComment(comment.id)" class="link"> Удалить </span></td>
      </tr>
    </tbody>
  </CommentTable>
</template>

<script>
import commentTable from "@/components/Admin/CommentTable";

export default {
  components: {
    commentTable,
  },
  layout: "admin",
  data() {
    return {
      comments: [
        {
          id: 1,
          name: "Dimas",
          text: "семантика буквоград путь вопроса",
          status: true,
        },
        {
          id: 2,
          name: "Kirril",
          text: "То все которое живет пунктуация коварный страна",
          status: false,
        },
      ],
    };
  },
  methods: {
    changeComment(id) {
      console.log(`change Comment id - ${id} `);
    },
    deleteComment(id) {
      console.log(`change Comment id - ${id} `);
    },
  },
};
</script>