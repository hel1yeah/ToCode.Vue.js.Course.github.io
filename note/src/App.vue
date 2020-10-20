<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <h1>{{ title }}</h1>
          <div class="messag" v-if="message">
            <p>{{ message }}</p>
          </div>
          <!-- new not -->
          <div class="new-note">
            <input v-model="note.title" type="text" />
            <textarea v-model="note.descr"></textarea>
            <button @click="addNote">addNote</button>
          </div>
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
export default {
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
        {
          title: "Third Note",
          descr: "Description for second note",
          date: new Date(Date.now()).toLocaleTimeString(),
        },
      ],
    };
  },
  methods: {
    addNote() {
      // console.log(this.note);
      let { title, descr } = this.note;
      if (title === "") {
        this.message = "false error, note found title";
        return false;
      } else {
        this.notes.push({
          title,
          descr,
          date: new Date(Date.now()).toLocaleTimeString(),
        });
      }
      this.note.title = "";
      this.note.descr = "";
      this.note.message = null;
    },
  },
};
</script>


