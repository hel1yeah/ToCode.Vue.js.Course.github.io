<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- Компонент Тайтл -->
          <titleNote :titleNote="titleNote" title="Название приложения" />
          
          <!-- Компонент меседж ерор -->
          <message v-if="message" :message="message" />

          <!-- new not -->
          <div class="new-note">
            <input v-model="note.titleNote" type="text" />
            <textarea v-model="note.descr"></textarea>
            <button @click="addNote">addNote</button>
          </div>

          <!-- note list -->
          
          <div class="notes">
            <div class="note" v-for="(note, index) in notes" :key="index">
              <div class="note-header">
                <p>
                  {{ note.titleNote }}
                </p>
              </div>
              <div class="note-body">
                <p>{{ note.descr }}</p>
                <span>{{ note.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from '@/components/Message'
import titleNote from '@/components/TitleNote'
export default {
  components : {
    message,
    titleNote,
  },
  data() {
    return {
      titleNote: "Приложение на Vue.js для заметок",
      message: null,
      note: {
        titleNote: "",
        descr: "",
      },
      notes: [
        {
          titleNote: "First Note",
          descr: "Description for second note",
          date: new Date(Date.now()).toLocaleTimeString(),
        },
        {
          titleNote: "Second Note",
          descr: "Description for second note",
          date: new Date(Date.now()).toLocaleTimeString(),
        },
        {
          titleNote: "Third Note",
          descr: "Description for second note",
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
        this.message = "Произошла ошибка, Вы не указали заголовок. Без загловка нельзя создать заметку!!!";
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
  },
};
</script>

<style>
</style>
