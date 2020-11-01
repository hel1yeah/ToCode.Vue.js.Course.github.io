<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- Компонент меседж ерор (выводит сообщение об ошибке ) -->
          <message v-if="message" :message="message" />

          <!-- Компонент  newNote (создаёт новую заметку) -->
          <newNote :note="note" @componentsMetodsAddNode="addNote" />
          <!-- Компонент Тайтл (просто тайтл) -->
          <titleNote
            :titleNote="titleNote"
            title="Название приложения"
            :grid="grid"
            @gridTest="grid = $event"
          />
          <!-- note list -->
          <notes :notes="notes" @remove="removeNotes" :grid="grid" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from "@/components/Message";
import titleNote from "@/components/TitleNote";
import newNote from "@/components/NewNote";
import notes from "@/components/Notes";
export default {
  components: {
    message,
    titleNote,
    newNote,
    notes,
  },
  data() {
    return {
      titleNote: "Приложение на Vue.js для заметок",
      message: null,
      grid: true,
      note: {
        titleNote: "",
        descr: "",
      },
      notes: [
        {
          titleNote: "Первый тестовый заголовок заметки ",
          descr: "Тестовое описание ",
          date: new Date(Date.now()).toLocaleTimeString(),
        },
        {
          titleNote: "Второй тестовый заголовок заметки",
          descr: "Тестовое описание",
          date: new Date(Date.now()).toLocaleTimeString(),
        },
        {
          titleNote: "Третий тестовый заголовок заметки",
          descr: "Тестовое описание",
          date: new Date(Date.now()).toLocaleTimeString(),
        },
      ],
    };
  },
  methods: {
    addNote() {
      // console.log(this.note);
      let { titleNote, descr } = this.note;
      if (titleNote.trim().length === 0) {
        this.message =
          "Произошла ошибка, Вы не указали заголовок. Без загловка нельзя создать заметку!!!";
        return false;
      } else {
        this.notes.push({
          titleNote,
          descr,
          date: new Date(Date.now()).toLocaleTimeString(),
        });
      }
      this.note.titleNote = "";
      this.note.descr = "";
      this.note.message = null;
    },
    removeNotes(index) {
      this.notes.splice(index, 1);
    },
  },
};
</script>

<style>
</style>
