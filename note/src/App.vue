<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <h1>{{ title }}</h1>

          <message v-if="message" :message="message" />

          <!-- new not -->
          <newNote 
          :note="note"
          @addNote="addNote" />

          <!-- note list -->
          <div class="notes">
            <div class="note" v-for="(note, index) in notes" :key="index">
              <div class="note-header">
                <p>
                  {{ note.title }}
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
import message from '@/components/Message.vue';
import newNote from '@/components/NewNote.vue';
export default {
  components:{
    message,
    newNote,
  },
  data() {
    return {
      title: "Notes App",
      message: null,
      note: {
        title: " ",
        descr: " ",
      },
      notes: [
        {
          title: "First Note",
          descr: "Description for second note",
          date: new Date(Date.now()).toLocaleTimeString(),
        },
        {
          title: "Second Note",
          descr: "Description for second note",
          date: new Date(Date.now()).toLocaleTimeString(),
        },
        // {
        //   title: "Third Note",
        //   descr: "Description for second note",
        //   date: new Date(Date.now()).toLocaleTimeString(),
        // },
      ],
    };
  },
  methods: {
    addNote() {
      let { title, descr } = this.note;
      if (title === "") {
        this.message = "false error, note found title";
        return false;
      } else {
        this.message = "";
        this.notes.push({
          title,
          descr,
          date: new Date(Date.now()).toLocaleTimeString(),
        });
      }
        
      
      this.note.title = "";
      this.note.descr = "";
      this.note.message = "";
    },
  },
};
</script>


