<template>
  <div class="posts">
    <h1>user id is {{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  validate({params}) {
    // Number
    return  /^\d+$/.test(params.id)
  }
}
</script>