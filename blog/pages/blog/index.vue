<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts:" />
    <PostsList :posts="postsLoadet"></PostsList>
  </div>
</template>


<script>
// import PostsList from ''
export default {
  components:{
    PostsList
  },
  computed: {
    postsLoadet() {
      return this.$store.getters.getPostsLoaded;
    },
  },
};
</script>

<style lang="scss">
</style>