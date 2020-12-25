<template>
  <section class="post-list">
    <div class="container">
      <div class="posts__wrapper">
        <postPreview v-for="post in posts" :key="post.id" :admin='admin' :post="post">
        </postPreview>
      </div>
    </div>
  </section>
</template>

<script>
import postPreview from "@/components/Blog/PostPreview.vue";
// PostPreview.vue
export default {
  components: {
    postPreview,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.posts__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>