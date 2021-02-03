<template>
  <newPostFrom
    :postEdit="post"
    @submit="onSubmit" />
</template>

<script>
import axios from 'axios'

import newPostFrom from '@/components/Admin/NewPostFrom.vue'
export default {
  components: { newPostFrom },
  layout: 'admin',
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
    onSubmit (post) {
      console.log('Post Editing!')
      this.$store.dispatch('editPost', post)
        .then(()=>{
          this.$router.push('/admin')
        })
    }
  }
}
</script>
