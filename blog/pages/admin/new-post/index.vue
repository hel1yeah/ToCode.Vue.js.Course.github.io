<template>
  <newPostFrom @save="onSave"></newPostFrom>
</template>

<script>
import newPostFrom from '@/components/Admin/NewPostFrom'

export default {
  components: {
    newPostFrom
  },
  layout: 'admin',
  methods: {
    onSave(post){
      console.log('save');
    }
  },
}
</script>