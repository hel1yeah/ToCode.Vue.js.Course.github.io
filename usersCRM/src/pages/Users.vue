<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- table -->
        <table>
          <!-- head -->
          <thead>
            <tr>
              <th>Имя</th>
              <th>Город</th>
              <th>Телефон</th>
            </tr>
          </thead>

          <!-- body -->
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ user.address.city }}</td>
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
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          console.log(response.data);
          this.users = response.data
        }).catch(error => {
          console.log(error);
        });

    // this.users = [
    //   { id: 1, name: "Yuriy", gender: "male", age: 22 },
    //     { id: 2, name: "Dimon", gender: "flame", age: 234 },
    // ]
  },
};
</script>