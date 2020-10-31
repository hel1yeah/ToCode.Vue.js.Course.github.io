<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- Компонент Тайтл -->
          <titleNote 
          :titleNote="titleNote" 
          title="Название приложения" />
          
          <!-- Компонент меседж ерор -->
          <message 
          v-if="message" 
          :message="message" />

          <!-- Компонент  newNote -->
          <newNote 
          :note="note" 
          @componentsMetodsAddNode="addNote"
          />
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
import newNote from '@/components/NewNote'
export default {
  components : {
    message,
    titleNote,
    newNote,
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
