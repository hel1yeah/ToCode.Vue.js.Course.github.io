<template>
  <div class="posts">
  <input type="text" v-model="postId">
  <button @click="loadPost">get post</button>
    <h1>user id is {{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postId: '',
    }
  },
  methods: {
    loadPost(){
      this.$router.push(`/posts/${this.postId}`)
    }
  },
}
</script>