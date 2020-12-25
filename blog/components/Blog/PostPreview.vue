<template>
  <nuxt-link :to="getLink" class="post__preview">
    <img :src="post.img" :alt="post.title" />
    <div class="post__content">
      <h3 class="title">{{ post.title }}</h3>
      <p>{{ post.descr }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    
  },
  computed: {
    getLink(){
      return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`
    }
  }
};
</script>

<style lang="scss">
.post__preview {
  max-width: 33.333%;
  padding: 16px;
  margin-bottom: 20px;
  img {
    margin-bottom: 15px;
    height: 200px;
  }
}
.post__content {
  p {
    color: #999;
  }
}
</style>