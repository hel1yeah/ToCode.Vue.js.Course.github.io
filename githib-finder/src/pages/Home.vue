<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- search -->
        <search
          :value="search"
          placeholder="Type Username..."
          @search="search = $event"
        >
        </search>
        <!-- button -->
        <button class="btn btnPrimary" @click="getRepos">Search</button>
        <!-- erorrs -->
        <errorTemp v-if="error" :error="error"> </errorTemp>
        <!-- wrapper -->
        <div class="repos__wrapper" v-if="repos">
          <div class="sort">
            <div @click="sort('name')" class="sort__name">по имени</div>
            <div @click="sort('stargazers_count')" class="sort__star">по звёздам</div>
          </div>
          <div class="repos__item" v-for="rep in usersSort" :key="rep.id">
            <div class="repos-info">
              <a class="link" target="_blank" :href="rep.html_url">
                {{ rep.name }}</a
              >
              <span>{{ rep.stargazers_count }} ⭐ </span>
            </div>
          </div>
        </div>
        <!-- item -->
      </div>
    </section>
  </div>
</template>

<script>
import search from "@/components/Search.vue";
import errorTemp from "@/components/Error.vue";
import axios from "axios";
export default {
  components: {
    search,
    errorTemp,
  },
  data() {
    return {
      search: "",
      // repos:[],
      repos: null,
      error: null,
      currentSort: "name",
      currentSortDir: "asc",
    };
  },
  methods: {
    sort(event) {
      if (event === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = event;
    },
    getRepos() {
      axios
        .get(`https://api.github.com/users/${this.search}/repos`)
        .then((respons) => {
          this.error = null;
          this.repos = respons.data;
        })
        .catch((error) => {
          this.repos = null;
          this.error = "(Not Found)";
        })
        .finally(() => (this.loading = false));
    },
  },
  computed: {
    usersSort() {
      return this.repos.sort((a, b) => {
        let mod = 1;
        if (this.currentSortDir === "desc") mod = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * mod;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * mod;
        return 0;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/utils/vars";
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
button {
  margin-top: 40px;
}
.repos__wrapper {
  width: 500px;
  margin: 30px 0;
}
.repos-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}
.sort {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: $primary-color;
  margin: 10px 0;
  &__name {
    cursor: pointer;
  }
  &__star {
    cursor: pointer;
  }
}
</style>
