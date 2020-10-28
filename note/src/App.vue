<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- <h1>{{ title }}</h1> -->

          <!-- message -->
          <message v-if="message" :message="message" />

          <!-- new not -->
          <newNote :note="note" @addNote="addNote" />

          <div class="note-header">
            <h1>{{ title }}</h1>
            <!-- search -->

            <search
              :value="search"
              placeholder="find your note"
              @search="search = $event"
            />
            <div class="icons">
              <svg
                :class="{ active: grid }"
                @click="grid = true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <svg
                :class="{ active: !grid }"
                @click="grid = false"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3" y2="6"></line>
                <line x1="3" y1="12" x2="3" y2="12"></line>
                <line x1="3" y1="18" x2="3" y2="18"></line>
              </svg>
            </div>
          </div>

          <!-- notes list -->
          <notes 
          :notes="notesFilter" 
          :grid="grid" 
          @remove="removeNotes" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from "@/components/Message.vue";
import newNote from "@/components/NewNote.vue";
import notes from "@/components/Notes.vue";
import search from "@/components/Search.vue";

export default {
  components: {
    message,
    newNote,
    notes,
    search,
  },
  data() {
    return {
      title: "Notes App",
      search: "",
      message: null,
      grid: true,
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
      ],
    };
  },
  computed: {
    notesFilter() {
      let array = this.notes,
        search = this.search;

      if (!search) return array;
      // Small
      search = search.trim().toLowerCase();
      // Filter
      array = array.filter(function (item) {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      });
      return array;
    },
  },
  methods: {
    addNote() {
      const { title, descr } = this.note;
      if (!title.trim().length) {
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
    removeNotes(index) {
      this.notes.splice(index, 1);
    },
  },
};
</script>


