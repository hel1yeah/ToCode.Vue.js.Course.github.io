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
            <th>Возраст</th>
            <th>Пол</th>
            </tr>
          </thead>

          <!-- body -->
          <tbody>
            <tr v-for="user in users" :key="user.id">
            <td> {{user.name}} </td>
            <td> {{user.age}} </td>
            <td> {{user.gender}} </td>
            </tr>
          </tbody>
        </table>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        
      ],
    };
  },
  created() {
    this.users = [
      { id: 1, name: "Yuriy", gender: "male", age: 22 },
        { id: 2, name: "Dimon", gender: "flame", age: 234 },
    ]
  },
};
</script>