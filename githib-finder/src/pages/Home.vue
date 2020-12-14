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
        <errorTemp 
        v-if="error"
        :test1="test1"
        >
          
        </errorTemp>
        <!-- wrapper -->
        <div class="repos__wrapper" v-if="repos">
          <div class="repos__item" v-for="rep in repos" :key="rep.id">
            <div class="repos-info">
              <a class="link" 
              target="_blank" 
              :href="rep.html_url">
              {{rep.name}}</a>
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
import errorTemp from '@/components/Error.vue'
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
      test1: 'red',
    };
  },
  methods: {
    getRepos() {
      axios
        .get(`https://api.github.com/users/${this.search}/repos`)
        .then((respons) => {
          this.error = null
          this.repos = respons.data;
        })
        .catch((error) => {
          this.repos = null
          this.error = '(Not Found)'
        })
        .finally(() => (this.loading = false));
      // console.log(`get user ${this.search}`);
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
