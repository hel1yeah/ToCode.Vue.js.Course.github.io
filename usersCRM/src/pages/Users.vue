<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <p>debug: sort: {{ currentSort }}, dir : {{ currentSortDir }}</p>
        <!-- table -->
        <table>
          <!-- head -->
          <thead>
            <tr>
              <th @click="sort('name')">Имя</th>
              <th @click="sort('website')">Город</th>
              <th @click="sort('phone')">Телефон</th>
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
      currentSort: "name",
      currentSortDir: "asc",
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.users = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    usersSort () {
      return this.users.sort((a, b) => {
        let mod = 1
        if (this.currentSortDir === 'desc') mod = -1
        if (a[this.currentSort] < b[this.currentSort]) return -1 * mod
        if (a[this.currentSort] > b[this.currentSort]) return 1 * mod
        return 0
      })
      console.log(this.user.address.city);
    }
  },
  methods: {
    sort (e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = e
    }
  }
};
</script>