<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <p>debug: sort: {{ currentSort }}, dir : {{ currentSortDir }}, page : {{page.current}}, page : {{page.length}}</p>
        <!-- table -->
        <table>
          <!-- head -->
          <thead>
            <tr>
              <th @click="sort('name')">Имя &#8595</th>
              <th @click="sort('website')">Емейл &#8595</th>
              <th @click="sort('phone')">Телефон &#8595</th>
            </tr>
          </thead>

          <!-- body -->
          <tbody>
            <tr v-for="user in usersSort" :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ user.website }}</td>
              <td>{{ user.phone }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
    <div class="container">
      <div class="button-list">
        <div class="btn btnPrimary" @click="prevPage">
        &#8592
        </div>
        <div class="btn btnPrimary" @click="nextPage">
        &#8594
        </div>
      </div>
    </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      currentSort: "name",
      currentSortDir: "abc",
      page: {
        current: 1,
        length: 3,
      },
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    usersSort() {
      return this.users
        .sort((a, b) => {
          let mod = 1;
          if (this.currentSortDir === "cba") mod = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * mod;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * mod;
          return 0;
        })
        .filter((row, index) => {
          let start = (this.page.current - 1) * this.page.length;
          let end = this.page.current * this.page.length;
          if (index >= start && index < end) return true;
        });
    },
  },
  methods: {
    sort(e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "abc" ? "cba" : "abc";
      }
      this.currentSort = e;
    },
    // Pagination
    prevPage() {
      if (this.page.current > 1) this.page.current -= 1;
    },
    nextPage() {
      if (this.page.current * this.page.length < this.users.length)
        this.page.current += 1;
    },
    // Pagination

  },
};
</script>

<style lang="scss">
.button-list {
  width: 100%;
  text-align: center;
}
.btn {
  border-radius: 60px;
  margin: 0 20px;
}
td{
  width: 33%;
}
</style>