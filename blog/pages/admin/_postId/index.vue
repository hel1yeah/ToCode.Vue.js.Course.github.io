<template>
  <newPostFrom @save="onSave" :postEdit="post"></newPostFrom>
</template>

<script>
import axios from "axios";

import newPostFrom from "@/components/Admin/NewPostFrom";

export default {
  components: {
    newPostFrom,
  },
  layout: "admin",
  asyncData (contex) {
    return axios.get(`https://blog-nuxt-b3cce.firebaseio.com/posts/${contex.params.postId}.json`)
      .then(res => {
        return {
          post: { ...res.data, id: contex.params.postId }
        }
      })
      .catch(e => contex.error(e))
  },
  methods: {
    onSave(post) {
      console.log("Post Editing");
      console.log(post);
    },
  },
  computed: {
    postsLoadet() {
      return this.$store.getters.getPostsLoaded;
    },
  },
};
</script>