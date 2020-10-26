<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <h1>{{ title }}</h1>
          <!-- message -->
          <message v-if="message" :message="message" />
          <!-- new not -->
          <newNote 
          :note="note"
          @addNote="addNote" />
          <!-- notes list -->
          <notes 
          :notes="notes"
          @remove="removeNotes"
          />  
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from '@/components/Message.vue';
import newNote from '@/components/NewNote.vue';
import notes from '@/components/Notes.vue';

export default {
  components:{
    message,
    newNote,
    notes,
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
        this.message = "False Error, Note Found Title";
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
    removeNotes(index){
      this.notes.splice(index, 1)
    }
  },
};
</script>


